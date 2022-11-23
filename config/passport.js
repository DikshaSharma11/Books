const GoggleStrategy =require('passport-goggle-oauth20').strategy
const mongoose=require('mongoose')
const user = require('../models/user')
const User=require('../models/user')
module.exports=function(passport){
    passport.use(new GoggleStrategy({
        clientID:process.env.GOOGLE_CLIENT_ID,
        clientSecret:process.env.GOOGLE_CLIENT_ID,
        callbackUrl:'/auth/google/callback',


    },
    async(accessToken,refresh,profile,done)=>{
        console.log(profile)
    }

    
    ))
    passport.serializeUser((id,done)=>{
        user.findById(id,(err,data)=>
            done(err,data)
        )

    })
    passport.deserializeUser((id,done)=>{
        user.findById(id,(err,data)=>
            done(err,data)
        )
    })

}
