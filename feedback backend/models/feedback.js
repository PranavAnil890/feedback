const  mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({

    couse_id:{
        type:String,
        require:true

    },
    course_name:{
        type:String,
        require:true
    },
    course_duraion:{
        type:String,
        requirw:true
    },

    overall_feedback:{
        type:String,
        require:true
    }

})
module.exports=mongoose.model('feedback',feedbackSchema);

