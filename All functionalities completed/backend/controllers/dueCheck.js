const cron = require('node-cron');
const mongoose= require('mongoose');
const User= require('../models/user')
const Todo= require('../models/todo');

const Twilio= require('twilio');

const accountSid= 'accountSid';
const authToken = 'authToken';

module.exports = (req, res, next)=>{
    User.find().populate('todos').then(users =>{
        users.forEach((user) =>{
            const client= Twilio(accountSid,authToken);
            cron.schedule('0 12 * * *', async ()=>{
                try{
                    const now= new Date();
                    user.todos.forEach((todo) =>{
                        // console.log(todo.dueDate)
                        const due= new Date(todo.dueDate);
                        const reminder= todo.reminderSent;
                        const status= todo.status;
                        if((due < now) && !reminder && status === 'pending'){
                            client.messages.create({
                                body: `Reminder! The task ${todo.title} is Overdue!`,
                                from: "twilio-test-number",
                                to: '+91 '+user.phone
                                // to: '+91 93153 43409'
                            })
                            todo.reminderSent=true;
                            Todo.findById(todo._id).then(todo =>{
                                todo.reminderSent=true;
                                todo.save().then(result => console.log("Reminder sent")).catch(err => console.log(err))
                            }).catch(err => console.log(err))
                        }
                    })
                }
                catch(err){
                    console.log(err);
                }
            })

        })
    }).catch(err => console.log(err))

    next();
}