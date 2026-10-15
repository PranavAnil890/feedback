import React from 'react'
import{useState} from 'react'
import axios from 'axios'

const AddFeedback = () => {
    const{feedback,setfeedback}=useState({
        course_name:"",
        course_comment:"",
        course_feedback:"",
    })

    function handlechange(e){
        const{name,value}=e.target
        setfeedback((prev)=>{
            return{
                ...prev,
                [name]:value
            }
        })

        const handleSubmit=async(e)=>{
            e.preventDefault()


            try{
                const response =await axios.post('http://localhost:3000/feedback',
                    feedback,
                )
                console.log(response.data)
            }

            catch(error){
                console.error('error',error)
            }

           
        }

         //edit the feedback
         const handleEdit=async(e)=>{
            e.preventDefault()

            try{
                const response = await axios.put(`http://localhost:3000/feedback/${feedback.id}`,
                    {
                        course_name:feedback.course_name,
                        course_comment:feedback.course_comment,
                        course_feedback:feedback.course_feedback
                    }
                )
                console.log(response.data)
            }catch(error){
                console.log('error',error)
            }
         }

         //delete the feedback
         const handleDelete= async(e)=>{
            e.preventDefault()

            try{
                const response = await axios.delete(`http://localhost:3000/feedback/${feedback.id}`,
                    {
                        course_name:feedback.course_name,
                        course_comment:feedback.course_comment,
                        course_feedback:feedback.course_feedback
                    }
                )
            }catch(error){
                console.log('error',error)
            }
         }
            
    }

  return (
    <div className='feedback-form'>
        <div className='form'>
            <h2>FeedBackForm</h2>
            <form onSubmit ={handleSubmit}>

                <input
                type:'text'
                placeholder='course_name'
                name='course_name'
                value={feedback.course_name}
                onChange={handlechange}
                />
                <input
                type:'text'
                placeholder='course_connect'
                name='course_comment'
                value={feedback.course_comment}
                onchange={handleChange}
                />
                <input
                type:'text'
                placeholder='course_feedback'
                name='course-feedback'
                value={feedback.course_feedback}
                onChange={handlechange}
                />
                <button className: 'btn' type='submit' onclick={handleSubmit}>submit</button>
                <button className: 'btn' type='submit' onclick={handleEdit}>edit</button> 
                <button className: 'btn' type='submit' onclick={handleDelete}>Delete</div> 

               </form>
      
    </div>


    </div>
  )
};

export default AddFeedback
