import './App.css';
import About from './About';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Interests from './Interests';

const ScrollableSection = () => {
    return(
        <div className="ScrollableSection">
            <About />
            <Education />
            <Projects />
            <Skills />
            <Interests />
        </div>         
    );
}

export default ScrollableSection;