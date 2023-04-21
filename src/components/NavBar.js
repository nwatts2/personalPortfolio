import React, { useState, useEffect } from 'react';
import "../css/NavBar.css";

const NavBar = ({ page, setPage, sizer }) => {
    const homeShape = `M${15 / sizer.width * 100},98 h${280 / sizer.width * 100} q${15 / sizer.width * 100},0 ${15 / sizer.width * 100},-25 v-25 q0,-25 ${15 / sizer.width * 100},-25 h${(sizer.width > 1920 ? (747) : (sizer.width > 1800 ? (732) : (sizer.width - 1110))) / sizer.width * 100} q${15 / sizer.width * 100},0 ${15 / sizer.width * 100},25 v25 q0,25 ${15 / sizer.width * 100},25 h${95 / sizer.width * 100} q${15 / sizer.width * 100},0 ${15 / sizer.width * 100},-25 v-25 q0,-25 ${15 / sizer.width * 100},-25 h${(sizer.width > 1920 ? (sizer.width + 48) : (sizer.width > 1800 ? (sizer.width + 33) : (sizer.width))) / sizer.width * 100} l0,-26 h-${(sizer.width > 1800 ? (2 * sizer.width + 1195) : (3 * sizer.width - 595)) / sizer.width * 100} v26 h${(sizer.width > 1800 ? ((sizer.width - 95) / sizer.width * 100) : 100)} q${15 / sizer.width * 100},0 ${15 / sizer.width * 100},25 v25 q0,25 ${15 / sizer.width * 100},25 z`
    
    const aboutShape = `M${15 / sizer.width * 100},98 h${280 / sizer.width * 100} q${15 / sizer.width * 100},0 ${15 / sizer.width * 100},-25 v-25 q0,-25 ${15 / sizer.width * 100},-25 h${(sizer.width > 1920 ? (872) : (sizer.width > 1800 ? (857) : (sizer.width - 985))) / sizer.width * 100} q${15 / sizer.width * 100},0 ${15 / sizer.width * 100},25 v25 q0,25 ${15 / sizer.width * 100},25 h${95 / sizer.width * 100} q${15 / sizer.width * 100},0 ${15 / sizer.width * 100},-25 v-25 q0,-25 ${15 / sizer.width * 100},-25 h${(sizer.width > 1920 ? (sizer.width - 77) : (sizer.width > 1800 ? (sizer.width - 92) : (sizer.width - 125))) / sizer.width * 100} l0,-26 h-${(sizer.width > 1800 ? (2 * sizer.width + 1195) : (3 * sizer.width - 595)) / sizer.width * 100} v26 h${(sizer.width > 1800 ? ((sizer.width - 95) / sizer.width * 100) : 100)} q${15 / sizer.width * 100},0 ${15 / sizer.width * 100},25 v25 q0,25 ${15 / sizer.width * 100},25 z`
    
    const swiftShape = `M${15 / sizer.width * 100},98 h${280 / sizer.width * 100} q${15 / sizer.width * 100},0 ${15 / sizer.width * 100},-25 v-25 q0,-25 ${15 / sizer.width * 100},-25 h${(sizer.width > 1920 ? (997) : (sizer.width > 1800 ? (982) : (sizer.width - 860))) / sizer.width * 100} q${15 / sizer.width * 100},0 ${15 / sizer.width * 100},25 v25 q0,25 ${15 / sizer.width * 100},25 h${95 / sizer.width * 100} q${15 / sizer.width * 100},0 ${15 / sizer.width * 100},-25 v-25 q0,-25 ${15 / sizer.width * 100},-25 h${(sizer.width > 1920 ? (sizer.width - 202) : (sizer.width > 1800 ? (sizer.width - 217) : (sizer.width - 250))) / sizer.width * 100} l0,-26 h-${(sizer.width > 1800 ? (2 * sizer.width + 1195) : (3 * sizer.width - 595)) / sizer.width * 100} v26 h${(sizer.width > 1800 ? ((sizer.width - 95) / sizer.width * 100) : 100)} q${15 / sizer.width * 100},0 ${15 / sizer.width * 100},25 v25 q0,25 ${15 / sizer.width * 100},25 z`
    const reactShape = `M${15 / sizer.width * 100},98 h${280 / sizer.width * 100} q${15 / sizer.width * 100},0 ${15 / sizer.width * 100},-25 v-25 q0,-25 ${15 / sizer.width * 100},-25 h${(sizer.width > 1920 ? (1122) : (sizer.width > 1800 ? (1107) : (sizer.width - 735))) / sizer.width * 100} q${15 / sizer.width * 100},0 ${15 / sizer.width * 100},25 v25 q0,25 ${15 / sizer.width * 100},25 h${95 / sizer.width * 100} q${15 / sizer.width * 100},0 ${15 / sizer.width * 100},-25 v-25 q0,-25 ${15 / sizer.width * 100},-25 h${(sizer.width > 1920 ? (sizer.width - 327) : (sizer.width > 1800 ? (sizer.width - 342) : (sizer.width - 375))) / sizer.width * 100} l0,-26 h-${(sizer.width > 1800 ? (2 * sizer.width + 1195) : (3 * sizer.width - 595)) / sizer.width * 100} v26 h${(sizer.width > 1800 ? ((sizer.width - 95) / sizer.width * 100) : 100)} q${15 / sizer.width * 100},0 ${15 / sizer.width * 100},25 v25 q0,25 ${15 / sizer.width * 100},25 z`
    const pythonShape = `M${15 / sizer.width * 100},98 h${280 / sizer.width * 100} q${15 / sizer.width * 100},0 ${15 / sizer.width * 100},-25 v-25 q0,-25 ${15 / sizer.width * 100},-25 h${(sizer.width > 1920 ? (1247) : (sizer.width > 1800 ? (1232) : (sizer.width - 610))) / sizer.width * 100} q${15 / sizer.width * 100},0 ${15 / sizer.width * 100},25 v25 q0,25 ${15 / sizer.width * 100},25 h${95 / sizer.width * 100} q${15 / sizer.width * 100},0 ${15 / sizer.width * 100},-25 v-25 q0,-25 ${15 / sizer.width * 100},-25 h${(sizer.width > 1920 ? (sizer.width - 452) : (sizer.width > 1800 ? (sizer.width - 467) : (sizer.width - 500))) / sizer.width * 100} l0,-26 h-${(sizer.width > 1800 ? (2 * sizer.width + 1195) : (3 * sizer.width - 595)) / sizer.width * 100} v26 h${(sizer.width > 1800 ? ((sizer.width - 95) / sizer.width * 100) : 100)} q${15 / sizer.width * 100},0 ${15 / sizer.width * 100},25 v25 q0,25 ${15 / sizer.width * 100},25 z`
    const contactShape = `M${15 / sizer.width * 100},98 h${280 / sizer.width * 100} q${15 / sizer.width * 100},0 ${15 / sizer.width * 100},-25 v-25 q0,-25 ${15 / sizer.width * 100},-25 h${(sizer.width > 1920 ? (1372) : (sizer.width > 1800 ? (1357) : (sizer.width - 485))) / sizer.width * 100} q${15 / sizer.width * 100},0 ${15 / sizer.width * 100},25 v25 q0,25 ${15 / sizer.width * 100},25 h${95 / sizer.width * 100} q${15 / sizer.width * 100},0 ${15 / sizer.width * 100},-25 v-25 q0,-25 ${15 / sizer.width * 100},-25 h${(sizer.width > 1920 ? (sizer.width - 577) : (sizer.width > 1800 ? (sizer.width - 592) : (sizer.width - 625))) / sizer.width * 100} l0,-26 h-${(sizer.width > 1800 ? (2 * sizer.width + 1195) : (3 * sizer.width - 595)) / sizer.width * 100} v26 h${(sizer.width > 1800 ? ((sizer.width - 95) / sizer.width * 100) : 100)} q${15 / sizer.width * 100},0 ${15 / sizer.width * 100},25 v25 q0,25 ${15 / sizer.width * 100},25 z`

    const [pathShape, setPathShape] = useState(homeShape);

    useEffect(() => {
        switch(page) {
            case "HOME":
                setPathShape(homeShape);
                break;
            case "ABOUT":
                console.log(aboutShape);
                setPathShape(aboutShape);
                break;
            case "REACT":
                setPathShape(reactShape);
                break;
            case "SWIFT":
                setPathShape(swiftShape);
                break;
            case "PYTHON":
                setPathShape(pythonShape);
                break;
            case "CONTACT":
                setPathShape(contactShape);
                break;
            default:
                setPathShape(homeShape);
        }

    }, [page, homeShape, aboutShape, swiftShape, reactShape, pythonShape, contactShape])


    return (
        <div className="row navBarContainer">
            <h1>Noah's Lab</h1>
            <h2>By Noah Watts</h2>
            <div className='row navBar' style={sizer.width > 1920 ? {width: 835} : {width: (sizer.width > 1800 ? (750 + (sizer.width - 1800) / 2) + 25 : (775))}}>
                <h3 onClick={() => {setPage("HOME")}} style={{top: 0, left: `0px`}} ><a href="#home">Home</a></h3>
                <h3 onClick={() => {setPage("ABOUT")}} style={{top: 0, left: `125px`}} ><a href="#about">About</a></h3>
                <h3 onClick={() => {setPage("SWIFT")}} style={{top: 0, left: `250px`}} ><a href="#swift">Swift</a></h3>
                <h3 onClick={() => {setPage("REACT")}} style={{top: 0, left: `375px`}} ><a href="#react">React.js</a></h3>
                <h3 onClick={() => {setPage("PYTHON")}} style={{top: 0, left: `500px`}} ><a href="#python">Python</a></h3>
                <h3 onClick={() => {setPage("CONTACT")}} style={{top: 0, left: `625px`}} ><a href="#contact">Contact</a></h3>
            </div>
            <div className="navSVG">
                <svg width={sizer.width} height="100%" viewBox="0 0 100 100" overflow="visible" preserveAspectRatio="none" style={{strokeLinejoin: "round", stroke: '#d9d9d9', fill: '#F15455'}}>
                    <path d={pathShape}
                    style={{strokeWidth: 3}}
                    vectorEffect="non-scaling-stroke"
                    fillRule="inherit" />
                </svg>
            </div>
        </div>       
    )
}

export default NavBar;