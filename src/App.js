/* eslint-disable react/react-in-jsx-scope */
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='main=page'>
        <h1>Richard David Jorgensen III</h1>
        <h2>Full Stack Software Developer</h2>
      </div>
      <div className='grid-container'>
        <div className='grid-item'>
          <h3>Projects</h3>
          <div>
            <h4>Data Movers</h4>
            <h4>IT Ticket System</h4>
            <h4>Neural Network</h4>
          </div>
        </div>
        <div className='grid-item'>
          <h3>Skills</h3>
          <div>
            <p>HTML | CSS | React | Node JS | JavaScript | Python | PHP | C++ | Java | MYSQL | Microsoft Office Suite | Express | Axios | APIs</p>
          </div>
        </div>
        <div className='grid-item'>
          <h3>Contact</h3>
          <div>
            <a href='https://www.linkedin.com/in/rdavid-jorgensen3/'>LinkedIn</a>
            <a href='https://github.com/r-d-jorgensen'>Git Hub</a>
          </div>
        </div>
      </div>
      <div>
        <h3>Resume</h3>
        <button></button>
      </div>
    </div>
  );
}

export default App;
