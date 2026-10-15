const express = require('express');
const router = express.Router();
const feedback = require('../models/feedback');

//get all feedback
router.get('/',async(req,res)=>{
    try{
        const feedbacks =await feedback.find();
        res.json(feedbacks);
    }catch(error){
        res.status(500).json({
            message:error.message
        });
    }
});

//post the feedback

router.post('/',async(req,res)=>{
    try{
        const feedback={
        course_id,
        course_name,
        course_duration,
        overall_feedback,
    }=req.body;

    const newFeedback = new feedback({
         course_id,
        course_name,
        course_duration,
        overall_feedback,
    })

    const savedFeedback = await newFeedback.save();
    res.status(201).json(savedFeedback);

    }catch(error){
        res.status(400).json({
            message:error.message
        });
    }
});

// put the feedback
router.put('/:id',async(req,res)=>{
    try{
        const updatedFeedback = await feedback.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                returndocument:'after',
                runvalidators:true
            }
        );
        if(updatedFeedback){
           return res.status(404).json({
                message:'feedback not found'
            });
        }
        res.json(updatedFeedback);
    }catch(error){
        res.status(400).json({
            message:error.message
        });
    }
});

//delete the feedback

router.delete('/:id',async(req,res)=>{
    try{
        const deleteFeedback = await feedback.findByIdAndDelete(
            req.params.id
        );

        if(!deleteFeedback){
            return res.status(404).json({
                message:"feedback not found"
            });
        }
        res.json({
            message:"feedback deleted successfully"
        });

    }catch(error){
        res.status(500).json({
            message:error.message
        });
    }
});
module.exports=router;