import React from 'react'
import '../Styles/about.css'

const About = React.forwardRef((props, ref) => {
  
  return (
    <div className="about" ref={ref}>
       
       <div className='about-header'>
        <h1>About</h1>
        </div>
       
       
       <div className='about-info'>

       
       <div className='about-info-text'>
       <h2>Get to know me!</h2>
        <p>
        My experience in various software projects has allowed me to showcase my ability to create robust, scalable, and maintainable applications. 
        </p>
        
        <p> As a passionate software developer, I am dedicated to perfecting my craft and continuously expanding my <span className='special-word'>knowledge</span>. I am actively seeking new opportunities where I can contribute and grow. If you have an exciting opportunity that resonates with my skills and experience, I'd be thrilled to connect. Do not hesitate to reach out!</p>
       </div>

       <div className='about-info-skills'>
       
       <h2>Skills</h2>
       <div className='skills'>

        <div className='skill'>
          HTML
        </div>
        <div className='skill'>
          CSS
        </div>
        <div className='skill'>
          Bootstrap
        </div>
        <div className='skill'>
          Javascript
        </div>
        <div className='skill'>
          React
        </div>
        
          <div className='skill'>
            Express
          </div>
          <div className='skill'>
            Node.js
          </div>
          <div className='skill'>
            Python
          </div>
          <div className='skill'>
            Flask
          </div>
          <div className='skill'>
            SQL
          </div>
        
        <div className='skill'>
          GIT
        </div>
        <div className='skill'>
          Github
        </div>

       
       </div>
        </div>
       </div>
    </div>
  )
})

export default About