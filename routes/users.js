// const express = require('express');
// let users = require('../users');
// // const router = express();           ------> HERE we cant use it but we must creae router object as below

// const router = express.Router();

// const {body,validationResult } = require('express-validator')



// router.get('/',(req,res)=>{
//     res.json({
//         data: users,
//         message: 'ok',
//     })
// })




// router.get('/:id',(req,res)=>{
//     const user =  users.find((u)=>u.id == req.params.id);  
//     if(!user) return res.status(404).json({data: null,message: 'the user with the given id was not found!'});
//     res.json({
//         data: user,
//         message: 'ok',
//     })
// })


// router.post('/',[
//     body('email','email must be valid').isEmail,
//     body('first_name','first_name cant be empty').notEmpty(),
//     body('last_name','last name cant be empty').notEmpty()
// ],(req,res)=>{
//     const errors = validationResult(req);   
//     if(!errors.isEmpty()){
//         return res.status(400).json({data: null,errors: errors.array(),message: 'validation error'})
//     }
//     users.push({id: users.length + 1,...req.body});
//     res.json({
//     data: users,
//     message: 'ok',
//     })
// })



// router.put('/:id',[
//     body('email','email must be valid').isEmail(),
//     body('first_name','first_name cant be empty').notEmpty(),
//     body('last_name','last name cant be empty').notEmpty()
// ],(req,res)=>{

//     const user = users.find(u=>u.id == req.params.id);
//     if(!user){
//         return res.status(404).json({
//             data: null,
//             message: 'the user with given id was not found'})
//     }
//     const errors = validationResult(req);   
//     if(!errors.isEmpty()){
//         return res.status(400).json({data: null,errors: errors.array(),message: 'validation error'})
//     }
    
//     users.map(user=>{
//         if(user.id == req.params.id){
//             return {...user,...req.body}
//         }
//         return user;
//     })
//     res.json({
//     data: users,
//     message: 'ok',
//     })
// })


// router.delete('/:id',(req,res)=>{

//     const user =  users.find(u => u.id == req.params.id);
//     if(!user){
//      return res.status(404).json({
//          data: null,
//          message: 'the user with given id was not found', 
//      })
 
//      const index = users.indexOf(user)
 
//      users.splice(index,1)
 
//      res.json({
//          data: user,
//          message: 'ok',
//      })
//     }
//  })


//  module.exports = router





const express = require('express');
// let users = require('../users');
// const router = express();           ------> HERE we cant use it but we must creae router object as below

const router = express.Router();
const {body,validationResult } = require('express-validator')



const User = require('./../models/users')







router.get('/',async (req,res)=>{
    const users = await User.find(); 
    res.json({
        data: users,
        message: 'ok',
    })
})




router.get('/:id',async (req,res)=>{
    const user =  User.find(req.params.id); 
    if(!user) return res.status(404).json({
        data: null,
        message: 'the user with the given id was not found!'
     });
    res.json({
        data: user,
        message: 'ok',
    })
})


router.post('/',[
    body('email','email must be valid').isEmail,
    body('first_name','first_name cant be empty').notEmpty(),
    body('last_name','last name cant be empty').notEmpty()
],async (req,res)=>{
    const errors = validationResult(req);   
    if(!errors.isEmpty()){
        return res.status(400).json({data: null,errors: errors.array(),message: 'validation error'})
    }
    let newUser = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
    })
    newUser = await newUser.save();
    res.json({
    data: newUser,
    message: 'ok',
    })
})



router.put('/:id',[
    body('email','email must be valid').isEmail(),
    body('first_name','first_name cant be empty').notEmpty(),
    body('last_name','last name cant be empty').notEmpty()
], async (req,res)=>{
    const errors = validationResult(req);   
    if(!errors.isEmpty()){
        return res.status(400).json({data: null,errors: errors.array(),message: 'validation error'})
    }
    
    const user = User.findByIdAndUpdate(req.params.id,{
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    },{new: true})
    if(!user){
        return res.status(404).json({
            data: null,
            message: 'the user with given id was not found'})
    }

    res.json({
    data: user,
    message: 'ok',
    })
})


router.delete('/:id',async (req,res)=>{

    const user =  await User.findByIdAndRemove(req.params.id)
    if(!user){
     return res.status(404).json({
         data: null,
         message: 'the user with given id was not found', 
     })
 
     res.json({
         data: user,
         message: 'ok',
     })
    }
 })


 module.exports = router