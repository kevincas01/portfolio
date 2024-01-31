import React from 'react'
import '../Styles/navbar.css'

const Navbar = ({aboutRef,experienceRef,projectsRef}) => {
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
        const isScrolled = window.scrollY > 20;
        setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
    <div className={scrolled ? 'navbar scrolled' : 'navbar'}>
        <div className="nav-name">
          
          <span style={{fontWeight:"bold"}}>Kevin C</span>
        </div>
        <div className='hamburger'>=</div>
        <div className="nav-links">
          
          <span className="nav-item"
          onClick={() => aboutRef.current.scrollIntoView({  behavior: 'smooth',
          block: 'start',
          inline: 'nearest', })}
          >About</span>
          <span className="nav-item"
          onClick={() => experienceRef.current.scrollIntoView({  behavior: 'smooth',
          block: 'start',
          inline: 'nearest',})}
          >Experience</span>
          <span className="nav-item"
          onClick={() => projectsRef.current.scrollIntoView({  behavior: 'smooth',
          block: 'start',
          inline: 'nearest',})}
          >Projects</span>
          <span className="nav-item"
          onClick={() => projectsRef.current.scrollIntoView({  behavior: 'smooth',
          block: 'start',
          inline: 'nearest',})}
          >Contact</span>
        </div>

      </div>
  )
}

export default Navbar