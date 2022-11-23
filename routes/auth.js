const express = require('express')
const passport = require('passport')
const router = express.Router()
// const { ensureAuth, ensureGuest } = require('../middleware/auth')

const Story = require('../models/Story')

// @desc   auth with google
// @route   GET /
router.get('/google', passport.authenticate(
'google',{scope:['profile']})
),

// @desc    google auth callback
// @route   GET /auth/google/callback
router.get('/google/callback',passport.authenticate('google',{failureRedirect:
'/'}),(res,req)=>{
    res.redirect('/dashboard')
})
module.exports = router