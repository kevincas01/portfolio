import React from 'react'
import '../Styles/contact.css'

const Contact = () => {
  return (
    <div className='contact-container'>

        <h1>Contact</h1>

        <form className='contact-form'>

        <div className='contact-input'>
            <label>Name</label>
            <input type="text" placeholder='Enter your name'/>

        </div>

        

        <div className='contact-input'>
            <label>Email</label>
            <input type="text" placeholder='Enter your email'/>

        </div>
        <div className='contact-input'>
            <label>Subject (Optional)</label>
            <input type="text" placeholder='Enter your email'/>

        </div>

        <div className='contact-input'>
            <label>Message</label>
            <textarea>

            </textarea>

        </div>

        </form>
        

       
    </div>
  )
}

export default Contact