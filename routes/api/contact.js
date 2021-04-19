const express = require('express')
const router = express.Router()

//User Model
const User = require('../../models/User')


//@ route GET api/user
//@desc Get All Users
//@access Public
router.get('/', (req, res) => {
    User.find()
      .then(user => res.json(user))
})

//@ route POST api/user
//@desc Create new User
//@access Public
router.post('/', (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    address: req.body.address
})
newUser.save().then(user => res.json(user))
})

//@ route DELETE api/users
//@desc Delete a User
//@access Public
router.delete('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => user.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}))
})


//@ route UPDATE api/user
//@desc UPDATE a User
//@access Public
router.put('/:id', (req, res) => {
  const found = USER.some(user => user.id === parseInt(req.params.id))
  if(found) {
    const updUser = req.body
    Todo.forEach(user => {
      if(user.id === parseInt(req.params.id)) {
        user.name = updUser.name ? updUser.name : user.name
        user.email = updUser.email ? updUser.email : user.email
        user.address = updUser.address ? updUser.address : user.address
        res.json({ msg: 'User was updated', user })      
      } else {
        res.status(400).json({ms: `No user with the id of ${req.params.id}`})
      }
    })
  }
})



module.exports = router
