import React from 'react';
import SectionHeader from '../components/SectionHeader';
import NoahPhoto from '../images/NoahPhoto.webp';
import ShadesBackground from '../components/ShadesBackground';
import "../css/About.css";

const About = ({ setPage }) => {

    function handleScroll () {
        let e = document.getElementById('CONTACT');
        e.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
            inline: 'nearest'
        });
        setPage('CONTACT');
    }

    return (
        <div className="column aboutContainer pageSection">
            <SectionHeader title="About" identifier="ABOUT" />
            <div className="row about" id="about">
                <div className="column aboutLeft">
                    <span style={{margin: "0 0 0 5%"}} >{'<div id="aboutMe">'}</span>
                    <div className='row profileImageContainer'>
                        <svg viewBox="0 3 32 33"><path d="M7 3.5h-6c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-5h5c0.552 0 1-0.448 1-1s-0.448-1-1-1zM31 27.5c-0.552 0-1 0.448-1 1v5h-5c-0.552 0-1 0.448-1 1s0.448 1 1 1h6c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z"></path></svg>
                        <img src={NoahPhoto} alt="Noah Watts" />
                        <h3 className='contactButton' onClick={() => {handleScroll()}} >Contact me</h3>
                    </div>
                    <span style={{margin: "0 0 0 10%"}} >{'<h1> Noah Watts </h1>'}</span>
                    <span style={{margin: "0 0 0 10%"}} >{'<h2> Denver, Colorado </h2>'}</span>
                    <span style={{margin: "0 0 0 5%"}} >{'</div>'}</span>
                </div>
                <div className="column aboutRight">
                    <h1 className="tab" id="ABOUT">Who's Noah?</h1>
                    <div className="column aboutBox">
                        <p>{"I’m Noah! I’m a hard working developer with a strong technical background. I have experience working with several popular modern languages and frameworks, such as "}<span className="aboutEmphasis">JavaScript/React.js/Node.js</span>, <span className="aboutEmphasis">Swift/SwiftUI</span>, and <span className="aboutEmphasis">Python</span>.</p>
                        <p>{"I recently graduated from the University of Colorado at Colorado Springs with a "}<span className="aboutEmphasis">B.S. in Physics</span>{", and I worked in the school’s IT department during my time there. I went on to work in IT after graduating, and it was then that I rediscovered my love for programming."}</p>
                        <p>{"Since then, I’ve spent my time learning to code and building up a portfolio, and it’s here that I’d like to show what I’ve accomplished."}</p>
                    </div>
                    <ShadesBackground />
                </div>
            </div>    
        </div>
            
    );
}

export default About;