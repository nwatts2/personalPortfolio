import React from 'react';
import Desk from '../images/Desk.png';
import PaintBackground from '../components/PaintBackground';
import "../css/Home.css";

const Home = () => {
    return (
        <div className="row home pageSection" id="home">
            <div className="column homeLeft">
                <div className="greetingContainer">
                    <p className="tab" id="HOME">Welcome! I'm Noah</p>
                </div>
                <h1>{"I’m a"} <span className='purposeEmphasis'>Software Developer</span> {"with a passion for"} <span className='purposeEmphasis'>bringing ideas to life.</span></h1>
                <div className="purposeStatement">
                    <p>{"I create powerful tools for iOS, MacOS, and the web, and I love every minute of it."}</p>
                </div>
            </div>
            <div className="column homeRight">
                <div className="row deskImageContainer">
                    <PaintBackground />
                    <img src={Desk} alt="Noah's Desk" />
                </div>
            </div>
        </div>        
    );
}

export default Home;