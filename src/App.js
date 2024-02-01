
import './App.css';
import { useEffect, useState,useRef} from 'react';
import About from './Components/About';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Profile from './Components/Profile';


function App() {

  const [headerTitle, setHeaderTitle]= useState("")
  const [headerName,setHeaderName]=useState("")
  const [showHeader,setHeaderDescription]=useState("")
  

  const name="Kevin Castro"
  const title="Hello World, my name is"

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  

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

          if (j > name.length+5) {
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
      <Navbar aboutRef={aboutRef} experienceRef={experienceRef} projectsRef={projectsRef} contactRef={contactRef}/>

      
      <div>
        <Profile aboutRef={aboutRef} />
        <About ref={aboutRef} />
        <Experience ref={experienceRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
      </div>

        <button className="scroll-top-button"onClick={scrollToTop}>Back to the top</button>

        <hr></hr>

      <div className=''>
        Github
        Linkedin

      </div>
    
    </div>
    
  );
}

export default App;
