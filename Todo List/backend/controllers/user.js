const User= require('../models/user');
const bcrypt= require('bcryptjs');
const jwt= require('jsonwebtoken');

exports.getSignup= (req, res, next)=>{
    res.send('<h1>This is the signup page</h1>')
}

exports.postSignup=async (req, res, next)=>{
    const email= req.body.email;
    const name= req.body.name;
    const password= req.body.password;

  const hashedPw= await bcrypt.hash(password, 12)

    const user = new User({
        email: email,
        name: name,
        password: hashedPw,
        todos: []
    })
     user.save()
    .then(result =>{
        console.log("User created")
        res.status(200).json({message: "User created Successfully"})
    })
    .catch(err => console.log(err))
}

exports.postLogin = (req, res, next)=>{
    const email= req.body.email;
    const password= req.body.password;

    User.findOne({email: email}).then(user =>{
        if(!user){
            console.log('User not found');
            return res.redirect('/signup');
        }
        bcrypt.compare(password, user.password).then(isEqual =>{
            if(!isEqual){
                console.log("Invalid Password");
                // return res.redirect('/login');
                return;
            }
            const token= jwt.sign({email: user.email, userId: user._id},"secretkey",{expiresIn: '1h'});

            res.status(200).json({message: "Logged in", token: token, userId: user._id});
            // console.log(req);
        }).catch(err => console.log(err))
    })
}

