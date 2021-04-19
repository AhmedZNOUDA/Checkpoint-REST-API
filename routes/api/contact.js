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


//@ route UPDATE api/todo
//@desc UPDATE a Todo
//@access Public
router.put('/:id', (req, res) => {
  const found = Todo.some(todo => todo.id === parseInt(req.params.id))
  if(found) {
    const updTodo = req.body
    Todo.forEach(todo => {
      if(todo.id === parseInt(req.params.id)) {
        todo.name = updTodo.name ? updTodo.name : todo.name
        res.json({ msg: 'Task was updated', todo })      
      } else {
        res.status(400).json({ms: `No task with the id of ${req.params.id}`})
      }
    })
  }
})



module.exports = router