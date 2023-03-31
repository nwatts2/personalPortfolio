import "../css/About.css"
import React from 'react'

const About = () => {
    return (
        <div className="row about" id="about">
            <div className="aboutLeft">
                <p>Image</p>
                <div className="row nameContainer">
                    <p>Arrow SVG</p>
                    <h1>Noah</h1>
                </div>
            </div>
            <div className="aboutRight">
                <h1 className="tab" id="ABOUT">Who's Noah?</h1>
                <div className="column aboutBox">
                    <p>{"I’m Noah! I’m a hard working developer with a strong technical background. I recently graduated from the University of Colorado at Colorado Springs with a B.S. in Physics, and I worked in the school’s IT department during my time there. I went on to work in IT for Phil Long Dealerships after graduating, and it was there that I rediscovered my love for programming."}</p>
                    <hr />
                    <p>{"After spending some time learning Python and SQL on my own, I decided to leave the company to pursue self-education full time. I focused primarily on web-development at first, and then expanded my scope to include iOS/macOS development. Overall, the past year has been quite productive and fulfilling for me, and it’s here that I’d like to show off what I’ve accomplished in that time."}</p>
                </div>
            </div>
        </div>        
    );
}

export default About;