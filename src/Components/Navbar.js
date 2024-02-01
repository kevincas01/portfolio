import React from 'react'
import '../Styles/navbar.css'

const Navbar = ({aboutRef,experienceRef,projectsRef,contactRef}) => {
    const [scrolled, setScrolled] = React.useState(false);

    const [isNavToggled,setIsNavToggled]=React.useState(false)

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
      <>
      
    <div className={scrolled ? 'navbar scrolled' : 'navbar'}>
        <div className="nav-name">
          
          <span style={{fontWeight:"bold"}}>Kevin C</span>

        </div>
        <div className={`menu ${isNavToggled ? 'menu-toggled' : ''}`} onClick={()=>{
          console.log(!isNavToggled)
          setIsNavToggled(!isNavToggled);
        }}>

          <span className="line"></span>
            <span className="line"></span>
        </div>

        <div className={`nav-links ${isNavToggled ? 'nav-toggled' : ''}`}>

          <span className="nav-item"
          onClick={() => { setIsNavToggled(false)
            aboutRef.current.scrollIntoView({  behavior: 'smooth',
          block: 'start',
          inline: 'nearest', })}}
          >About</span>
          <span className="nav-item"
          onClick={() => {setIsNavToggled(false)
            experienceRef.current.scrollIntoView({  behavior: 'smooth',
          block: 'start',
          inline: 'nearest',})}}
          >Experience</span>
          <span className="nav-item"
          onClick={() => {setIsNavToggled(false)
            projectsRef.current.scrollIntoView({  behavior: 'smooth',
          block: 'start',
          inline: 'nearest',})}}
          >Projects</span>
          <span className="nav-item"
          onClick={() => {setIsNavToggled(false)
            contactRef.current.scrollIntoView({  behavior: 'smooth',
          block: 'start',
          inline: 'nearest',})}}
          >Contact</span>
        </div>

    </div>

      <div className={`nav-bars ${isNavToggled ? 'toggled' : ''}`}>

        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} 
          className={`nav-bar ${isNavToggled ? 'toggled' : 'nontoggled'}`}
          id={`${isNavToggled ? 'toggled-' : 'nontoggled-'}nav-bar-${index}`}
          style={{ animationDelay: `${(index + 1)*0.05}s` }}

          >

          </div>
        ))}
      </div>


    </>
  )
}

export default Navbar