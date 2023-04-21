import React from 'react';
import NoahPhoto from '../images/Portfolio Photo.png';
import CityBackground from '../components/CityBackground';
import "../css/About.css";

const About = () => {
    return (
        <div className="column aboutContainer pageSection" id="about">
            <div className="row sectionTitleContainer">
                <div className="column sectionTitle">
                    <hr style={{margin: "0px 0 10px 0"}}/>
                    <h1 className="tab" id="ABOUT">About</h1>
                    <hr style={{margin: "10px 0 0 0"}}/>
                </div>
            </div>
            <div className="row about" id="about">
                <div className="column aboutLeft">
                    <img src={NoahPhoto} alt="Noah Watts" />
                </div>
                <div className="column aboutRight">
                    <h1 className="tab" id="ABOUT">Who's Noah?</h1>
                    <div className="column aboutBox">
                        <p>{"I’m Noah! I’m a hard working developer with a strong technical background. I have experience working with several popular modern languages and frameworks, such as JavaScript/React.js/Node.js, Swift/SwiftUI, and Python."}</p>
                        <p>{"I recently graduated from the University of Colorado at Colorado Springs with a B.S. in Physics, and I worked in the school’s IT department during my time there. I went on to work in IT after graduating, and it was then that I rediscovered my love for programming."}</p>
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