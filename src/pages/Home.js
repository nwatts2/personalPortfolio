import React from 'react';
import Desk from '../images/Desk.png';
import PaintBackground from '../components/PaintBackground';
import "../css/Home.css";

const Home = ({ page }) => {
    return (
        <div className="row home pageSection">
            <div className="column homeLeft">
                <div className="greetingContainer">
                    <p className="tab" id="HOME">Welcome! I'm Noah</p>
                </div>
                <h1>A <span className='purposeEmphasis'>Software Developer</span> {"with a passion for"} <span className='purposeEmphasis'>bringing ideas to life.</span></h1>
                <div className="purposeStatement">
                    <p>{"I’m dedicated to improving the user experience; together, we can create powerful tools for iOS, MacOS, and the web."}</p>
                </div>
                <div className="row scrollPrompt" style={page === "HOME" ? {opacity: 1} : {opacity: 0}}>
                    <svg viewBox="0 0 24 24" ><line id="primary" x1="12" y1="3" x2="12" y2="21" style={{strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2}}></line><polyline id="primary-2" data-name="primary" points="9 18 12 21 15 18" style={{strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2}}></polyline></svg>
                    <p>Scroll to learn more</p>
                    <svg viewBox="0 0 24 24" ><line id="primary" x1="12" y1="3" x2="12" y2="21" style={{strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2}}></line><polyline id="primary-2" data-name="primary" points="9 18 12 21 15 18" style={{strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2}}></polyline></svg>
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