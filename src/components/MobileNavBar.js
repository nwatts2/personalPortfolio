import React, { useState } from 'react';
import "../css/NavBar.css";

const MobileNavBar = ({ setPage, sizer }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuAnimation, setMenuAnimation] = useState({});
    
    function handleMenuClick () {
        if (menuOpen) {
            setMenuAnimation({
                animation: "closeMenu .4s ease-in-out"
            });

            setTimeout(() => {
                setMenuOpen(false);
            }, 200);
        } else {
            setMenuAnimation({
                animation: "openMenu .4s ease-in-out"
            });

            setTimeout(() => {
                setMenuOpen(true);
            }, 200);        }
    }

    return (
        <div className="row mobileNavBarContainer">
            <h1>Noah's Lab</h1>
            <h2>By Noah Watts</h2>
            <svg width={sizer.width} height="100%" viewBox="0 0 100 100" overflow="visible" preserveAspectRatio="none" style={{strokeLinejoin: "round", stroke: '#d9d9d9', fill: '#F15455'}}>
                <path d={`M0,98 h${245 / sizer.width * 100} q${15 / sizer.width * 100},0 ${15 / sizer.width * 100},-25 v-25 q0,-25 ${15 / sizer.width * 100},-25 h${(sizer.width - 275) / sizer.width * 100} h1 v-25 h-102 v100 z`}
                style={{strokeWidth: 3}}
                vectorEffect="non-scaling-stroke"
                fillRule="inherit" />
            </svg>
            <div className="row menuButton" onClick={handleMenuClick} >
                <svg viewBox="0 0 20 20" ><path fill-rule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"/></svg>
            </div>
            {menuOpen &&
                <div className="column mobileMenu" style={menuAnimation} >
                    <a onClick={() => {setPage("HOME"); handleMenuClick() }} href="#home" >Home</a>
                    <a onClick={() => {setPage("HOME"); handleMenuClick() }} href="#about" >About</a> 
                    <a onClick={() => {setPage("HOME"); handleMenuClick() }} href="#swift" >Swift</a>  
                    <a onClick={() => {setPage("HOME"); handleMenuClick() }} href="#react" >React.js</a>  
                    <a onClick={() => {setPage("HOME"); handleMenuClick() }} href="#python" >Python</a>  
                    <a onClick={() => {setPage("HOME"); handleMenuClick() }} href="#contact" >Contact</a>    
                </div>
            }
        </div>       
    )
}

export default MobileNavBar;