import React from 'react';
import NoahPhoto from '../images/NoahPhoto.jpg';
import CityBackground from '../components/CityBackground';
import "../css/About.css";

const About = () => {
    //"M7 33.5h-5v-5c0-0.552-0.448-1-1-1s-1 0.448-1 1v6c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1s-0.448-1-1-1zM31 3.5h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1h5v5c0 0.552 0.448 1 1 1s1-0.448 1-1v-6c0-0.552-0.448-1-1-1z"

    return (
        <div className="column aboutContainer pageSection">
            <div className="row sectionTitleContainer">
                <div className="column sectionTitle">
                    <hr style={{margin: "0px 0 10px 0"}}/>
                    <h1 className="tab" id="ABOUT">About</h1>
                    <hr style={{margin: "10px 0 0 0"}}/>
                </div>
            </div>
            <div className="row about" id="about">
                <div className="column aboutLeft">
                    <span style={{top: "4%", left: "20%"}} >{'<div id="aboutMe">'}</span>
                    <div className='row profileImageContainer'>
                        <svg viewBox="0 0 32 38"><path d="M7 3.5h-6c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-5h5c0.552 0 1-0.448 1-1s-0.448-1-1-1zM31 27.5c-0.552 0-1 0.448-1 1v5h-5c-0.552 0-1 0.448-1 1s0.448 1 1 1h6c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z"></path></svg>
                        <img src={NoahPhoto} alt="Noah Watts" />
                    </div>
                    <span style={{bottom: "-10%", left: "30%"}} >{'<h1> Noah Watts </h1>'}</span>
                    <span style={{bottom: "-15%", left: "30%"}} >{'<h2> Denver, Colorado </h2>'}</span>
                    <span style={{bottom: "-20%", left: "20%"}} >{'</div>'}</span>
                </div>
                <div className="column aboutRight">
                    <h1 className="tab" id="ABOUT">Who's Noah?</h1>
                    <div className="column aboutBox">
                        <p>{"I’m Noah! I’m a hard working developer with a strong technical background. I have experience working with several popular modern languages and frameworks, such as "}<span className="aboutEmphasis">JavaScript/React.js/Node.js</span>, <span className="aboutEmphasis">Swift/SwiftUI</span>, and <span className="aboutEmphasis">Python</span>.</p>
                        <p>{"I recently graduated from the University of Colorado at Colorado Springs with a "}<span className="aboutEmphasis">B.S. in Physics</span>{", and I worked in the school’s IT department during my time there. I went on to work in IT after graduating, and it was then that I rediscovered my love for programming."}</p>
                        <p>{"Since then, I’ve spent my time learning to code and building up a portfolio, and it’s here that I’d like to show you what I’ve accomplished."}</p>
                    </div>
                    <svg className="rectangle1" viewBox="0 0 100 100" >
                        <rect width="100" height="100" />
                    </svg>
                    <svg className="rectangle2" viewBox="0 0 100 100" >
                        <rect width="100" height="100" />
                    </svg>
                    <svg className="rectangle3" viewBox="0 0 100 100" >
                        <rect width="100" height="100" />
                    </svg>
                    <CityBackground />
                </div>
            </div>    
        </div>
            
    );
}

export default About;