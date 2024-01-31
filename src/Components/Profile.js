import React from 'react'
import '../Styles/profile.css'
const Profile = ({aboutRef}) => {

    const [headerTitle, setHeaderTitle]= React.useState("")
    const [headerName,setHeaderName]=React.useState("")
    const [showHeader,setShowHeader]=React.useState("")
    
    const name="Kevin Castro"
    const title="Hello World, I'm"
    React.useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setHeaderTitle(title.substring(0, i));
      i++;

      if (i > title.length) {
        clearInterval(intervalId);

        let j = 0;
        const nameIntervalId = setInterval(() => {
          setHeaderName(name.substring(0, j));
          j++;

          if (j > name.length+5) {
            clearInterval(nameIntervalId);
            setShowHeader("show")
          }
        }, 75);
        
      }
    }, 50); // Change the interval duration (in milliseconds) as needed

    
      return () => {
        clearInterval(intervalId); // Cleanup on component unmount
       
      };

  }, [title,name]);

  return (

    <>
    
    <div className='profile'>
        <div className='profile-headshot'>

        <img src='/images/KevinC.jpeg' alt='Kevin Castro Headshot' id='photo'></img>

        </div>
        <div className="profile-content">
        <h3 className='profile-greeting'>{headerTitle} </h3>
        <h1 className='profile-name'>{headerName}</h1>
        {showHeader&& (
          <div className="hidden-content">

          <p>A <span className='special-word'>passionate </span> and <span className='special-word'>eager</span> software developer</p>
          
          <div className="profile-buttons">
          <button className='profile-button'> Resume</button>
          <button className='profile-button'> Contact</button>
          </div>
            </div>

          )}
        </div>

        
       

    </div>
    <div className='view-more' 
    onClick={() => aboutRef.current.scrollIntoView({  behavior: 'smooth',
          block: 'start',
          blockOffset: 70,
          inline: 'nearest', })}>
            View More
            </div>
    </>
  )
}

export default Profile