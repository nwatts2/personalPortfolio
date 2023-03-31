import React, { useEffect, useState } from 'react'
import "../css/Home.css"

const Home = () => {
    return (
        <div className="home" id="home">
            <div className="homeLeft">
                <div className="greetingContainer">
                    <p className="tab" id="HOME">Welcome! I'm Noah</p>
                </div>
                <h1>{"I’m a"} <span className='purposeEmphasis'>Software Developer</span> {"with a passion for"} <span className='purposeEmphasis'>bringing ideas to life.</span></h1>
                <div className="purposeStatement">
                    <p>{"As an early career full-stack developer, I have experience working with several popular modern languages and frameworks, such as JavaScript/React.js/Node.js, Swift/SwiftUI, and Python. I’ve also integrated dedicated databases into several of my projects, using primarily MongoDB."}</p>
                </div>
            </div>
            <div className="homeRight">
                <p>Image</p>
            </div>
        </div>        
    );
}

export default Home;