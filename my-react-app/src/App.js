import logo from './logo.svg';
import './App.css';
import project1 from './Developer journal image.PNG';

function App() {
  return (
    <div className="App">
      <div className="HomePage">
      <div className="Information">
          <h1>Brandon Chung</h1>
        </div>
        <div className="About">
          <h1>About</h1>
          <p>Hi I am a computer science student at the University of California San Diego. I am a rising junior and looking to become a software engineer. 
            I have experience working with a variety of coding languages and hope to develop my professional career.</p>
        </div>
        <div className="Education">
          <h1>Education</h1>
          <h2>University of California, San Diego</h2>
          <h3>Bachelor of Science</h3>
          <p>Computer Science</p>
          <p>Relevant Coursework: </p>
        </div>
        <div className="Skills">
          <h1>Skills</h1>
          <ul>
            <li>Java</li>
            <li>Python</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>JavaScript</li>
            <li>C</li>
            <li>C++</li>
            <li>React</li>
          </ul>
        </div>
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
        <div className="Interests">
          <h1>Interests</h1>
          {/**/}
        </div>          
      </div>
    </div>
  );
}

export default App;
