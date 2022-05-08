import { request } from 'express' // Imports express. This is part of the MERN stack.
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body // Obtain an email and password from the request body.

  const user = await User.findOne({ email }) // Find the user that matches with the obtained email.

  if (user && (user.matchPassword(password))) { // Checks if the user exists the obtained password is correct for the user.
    res.json({ //Returns a JSON containing the user id, name, email, newly generated token and whether or not they are an admin.
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id)
    })
  } else {
    res.status(401) // Sets the HTTP status to unauthorised if the password was incorect.
    throw new Error('Invalid Email or Password')

  }
})

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body // Obtain a name, email and password from the request body.

  const userExists = await User.findOne({ email }) // Tries to find a user with the obtained email.

  if (userExists) {
    res.status(400) // Sets the HTTP status to bad request if the user already exists. 
    throw new Error('User already exists')
  }

  const user = await User.create({ // Creates a new user with the obtained data.
    name,
    email,
    password
  })

  if (user) {//Checks if the creation was successful.
    res.status(201).json({ // Sets the HTTP status to created and returns a JSON containing the user id, name, email, newly generated token and whether or not they are an admin.
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)// Sets the HTTP status to bad request if the user creation failed. 
    throw new Error('Invalid user data')
  }
})

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id) // Obtain a user id from the request body and uses it to find a user.

  if (user) { // Checks if the user exists.
    res.json({ //Returns a JSON containing the user id, name, email and newly generated token.
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin
    })

  }
  else {
    res.status(404)// Sets the HTTP status to not found if the user could not be found.
    throw new Error('User not found')
  }


})

const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id) // Obtain a user id from the request body and uses it to find a user.

  if (user) { // Checks if the user exists.
    user.name = req.body.name || user.name 
    user.email = req.body.email || user.email
    if (req.body.password) {
      user.password = req.body.password
    }

    const updatedUser = await user.save()

    res.json({//Returns a JSON containing the updated user id, name, email, newly generated token and whether or not they are an admin.
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id)
    })
  }
  else {
    res.status(404)// Sets the HTTP status to not found if the user could not be found.
    throw new Error('User not found')
  }


})



export {
  authUser, getUserProfile, registerUser, updateUserProfile
}

