import './App.css';
import About from './About';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Interests from './Interests';

const ScrollableSection = () => {
    return(
        <div className="RightSide">
            <About />
            <Education />
            <Skills />
            <Projects />
            <Interests />
        </div>         
    );
}

export default ScrollableSection;