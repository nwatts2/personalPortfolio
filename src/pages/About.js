import "../css/About.css"
import NoahPhoto from '../images/Portfolio Photo.png';
import CityBackground from '../components/CityBackground';
import React from 'react'

const About = () => {
    return (
        <div className="column aboutContainer pageSection" id="about">
            <div className="sectionTitleContainer">
                <div className="sectionTitle">
                    <hr style={{margin: "0px 0 10px 0"}}/>
                    <h1 className="tab" id="ABOUT">About Me</h1>
                    <hr style={{margin: "10px 0 0 0"}}/>
                </div>
            </div>
            <div className="row about" id="about">
                <div className="aboutLeft">
                    <img src={NoahPhoto} />
                </div>
                <div className="aboutRight">
                    <h1 className="tab" id="ABOUT">Who's Noah?</h1>
                    <div className="column aboutBox">
                        <p>{"I’m Noah! I’m a hard working developer with a strong technical background. I recently graduated from the University of Colorado at Colorado Springs with a B.S. in Physics, and I worked in the school’s IT department during my time there. I went on to work in IT for Phil Long Dealerships after graduating, and it was there that I rediscovered my love for programming."}</p>
                        <hr />
                        <p>{"After spending some time learning Python and SQL on my own, I decided to leave the company to pursue self-education full time. I focused primarily on web-development at first, and then expanded my scope to include iOS/macOS development. Overall, the past year has been quite productive and fulfilling for me, and it’s here that I’d like to show off what I’ve accomplished in that time."}</p>
                    </div>
                    <svg width="50%" height="auto" viewBox="0 0 100 100" style={{position: "absolute", zIndex: 0, top: "5%", left: "-5%"}} fill="#f15455" >
                        <rect width="100" height="100" />
                    </svg>
                    <svg width="50%" height="auto" viewBox="0 0 100 100" style={{position: "absolute", zIndex: 0, top: "15%", left: "40%"}} fill="#141719" >
                        <rect width="100" height="100" />
                    </svg>
                    <svg width="50%" height="auto" viewBox="0 0 100 100" style={{position: "absolute", zIndex: 0, top: "35%", left: "0%"}} fill="#232831" >
                        <rect width="100" height="100" />
                    </svg>
                    <CityBackground />
                </div>
            </div>    
        </div>
            
    );
}

export default About;