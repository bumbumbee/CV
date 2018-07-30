import React, { Component } from 'react';
import './style/main.scss';
import Header from './components/Header'
import Footer from './components/Footer'
import DevelopmentSkills from './components/DevelopmentSkills'
import Education from './components/Education'
import WorkExperience from './components/WorkExperience'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <DevelopmentSkills/>
          <WorkExperience/>
          <Education/>
        <Footer/>

      </div>
    );
  }
}

export default App;
