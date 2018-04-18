const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Vote = require('../models/vote')

const Pusher = require('pusher');

var pusher = new Pusher({
  appId: '511346',
  key: 'dcaf4db38d1d8df4c8d6',
  secret: 'e247f46f83af585e5de9',
  cluster: 'us2',
  encrypted: true
});


router.get('/', (req, res)=>{
    vote.find().then(votes=>{
        res.json({success:true, votes: votes})
    }); 
});


router.post('/', (req, res)=>{
    //Save to db
    const newVote ={
        os: req.body.os, //when hit vote, the os is gonna go into this obj here
    points: 1
    }
    
    new Vote(newVote).save().then(vote=>{
         pusher.trigger('os-poll', 'os-vote', {
            points: parseInt(vote.points),
            os: vote.os
        });
        return res.json({success: true, message:'Thank you for voting'});
    });
    
    
   
});

// Since we are in the router we have to export it
module.exports = router;




