
import './App.css';
import { useEffect, useState,useRef} from 'react';
import About from './Components/About';
import Experience from './Components/Experience';
import Projects from './Components/Projects';


function App() {

  const [headerTitle, setHeaderTitle]= useState("")
  const [headerName,setHeaderName]=useState("")
  const [showHeader,setHeaderDescription]=useState("")
  

  const name="Kevin Castro"
  const title="Hello World, I'm"

  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null)
  

  useEffect(() => {
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

          if (j > name.length) {
            clearInterval(nameIntervalId);
            setHeaderDescription("show")
          }
        }, 75);
        
      }
    }, 50); // Change the interval duration (in milliseconds) as needed

    
      return () => {
        clearInterval(intervalId); // Cleanup on component unmount
       
      };

  }, [title,name]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // For smooth scrolling
    });
  };

  return (
    <div className="App">
      <div className="navbar">
        <div className="nav-name">
          
          <span>Kevin C</span>
        </div>
        <div className='hamburger'>=</div>
        <div className="nav-links">
          
          <span className="nav-item"
          onClick={() => educationRef.current.scrollIntoView({  behavior: 'smooth',
          block: 'start',
          blockOffset: 50,
          inline: 'nearest', })}
          >Education</span>
          <span className="nav-item"
          onClick={() => experienceRef.current.scrollIntoView({  behavior: 'smooth',
          block: 'start',
          blockOffset: 50,
          inline: 'nearest',})}
          >Experience</span>
          <span className="nav-item"
          onClick={() => projectsRef.current.scrollIntoView({  behavior: 'smooth',
          block: 'start',
          blockOffset: 5000,
          inline: 'nearest',})}
          >Projects</span>
          <span className="nav-item"
          onClick={() => projectsRef.current.scrollIntoView({  behavior: 'smooth',
          block: 'start',
          blockOffset: 5000,
          inline: 'nearest',})}
          >Contact</span>
        </div>

      </div>

      <div className='profile'>
        <div className='profile-headshot'>

        <img src='/images/KevinC.jpeg' alt='Kevin Castro Headshot' id='photo'></img>

        </div>
        <div className="profile-content">
        <h3>{headerTitle} </h3>
        <h1><span className='profile-name'>{headerName}</span></h1>
        {showHeader&& (
          <div className="hidden-content">

          <p>A passionate and eager software developer</p>
          
          <div className="profile-buttons">
          <button> Open Resume</button>
          <button> Contact</button>
          </div>
            </div>

          )}
        </div>
       

      </div>
      <div>
        <About ref={educationRef} />
        <Experience ref={experienceRef} />
        <Projects ref={projectsRef} />
      </div>

        <button onClick={scrollToTop}>Back to the top</button>
    </div>
    
  );
}

export default App;
