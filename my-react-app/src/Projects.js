import './App.css';
import project1 from './Developer journal image.PNG';

const Projects = () => {
    return(
        <div className="Projects">
            <h1>Projects</h1>
            <div className="ProjectCard">
                <img src={project1} alt="Developer Journal image"/>
                <h3><a 
                    href="https://github.com/cse110-sp24-group29/cse110-sp24-group29.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Developer Journal</a> | CSS, HTML, JavaScript</h3>
                <p>
                    Journaling app that utilizes a full stack to store and display user information and data. 
                    CSS, HTML, and Javascript was used to dynamically update each page in order to allow users to keep track of their projects and software engineering experiences.
                    Created in CSE110 Software Engineering class and worked with a team of student developers to create this webapp. 
                </p>            
            </div>
        </div>     
    );
}

export default Projects;