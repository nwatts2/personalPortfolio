import React, { useState, useEffect } from 'react';
import "../css/NavBar.css";

const NavBar = ({ page, setPage, sizer }) => {
    const curveLength = 15;
    const titleLength = 280;
    const tabLength = 95;

    const [pageIndex, setPageIndex] = useState(0);

    const [spaceLength, setSpaceLength] = useState('');
    const [endLength, setEndLength] = useState('');
    const [topLength, setTopLength] = useState('');
    const [returnLength, setReturnLength] = useState('');

    useEffect(() => {
        switch(page) {
            case "HOME":
                setPageIndex(0);
                break;
            case "ABOUT":
                setPageIndex(1);
                break;
            case "SWIFT":
                setPageIndex(2);
                break;
            case "REACT":
                setPageIndex(3);
                break;
            case "PYTHON":
                setPageIndex(4);
                break;
            case "CONTACT":
                setPageIndex(5);
                break;
            default:
                setPageIndex(0);
        }

    }, [page]);

    useEffect(() => {
        let tempReturn, tempSpace, tempEnd, tempTop;

        if (sizer.width > 1920) {
            tempReturn = sizer.width;
            tempSpace = 810 + (pageIndex * (2 * curveLength + tabLength));
        }
        else if (sizer.width > 1800) {
            tempReturn = sizer.width - (2 * curveLength);
            tempSpace = sizer.width - titleLength - ((6 - pageIndex) * (2 * curveLength + tabLength)) - (4 * curveLength) - ((sizer.width - 1800) / 2) - 20;
            
        } else {
            tempReturn = sizer.width - (2 * curveLength);
            tempSpace = sizer.width - titleLength - ((6 - pageIndex) * (2 * curveLength + tabLength)) - (5 * curveLength) - 20;
        }

        tempEnd = (2 * sizer.width) - titleLength - tempSpace - tabLength - (7 * curveLength);
        tempTop = sizer.width + (8 * curveLength) + titleLength + tempSpace + tabLength + tempEnd;

        setReturnLength(tempReturn);
        setSpaceLength(tempSpace);
        setEndLength(tempEnd);
        setTopLength(tempTop);

    }, [sizer.width, pageIndex])

    function pixel(pixels) {
        return pixels / sizer.width * 100;
    }

    function handleScroll (newPage) {
        let e = document.getElementById(newPage.toLowerCase());
        e.scrollIntoView({
            block:'start',
            behavior: 'smooth',
            inline: 'nearest'
        });
        setPage(newPage);
    }

    return (
        <div className="row navBarContainer">
            <h1>Noah's Lab</h1>
            <h2>By Noah Watts</h2>
            <div className='row navBar' >
                <h3 onClick={() => {handleScroll("HOME")}} style={{top: 0, left: `0px`}} >Home</h3>
                <h3 onClick={() => {handleScroll("ABOUT")}} style={{top: 0, left: `125px`}} >About</h3>
                <h3 onClick={() => {handleScroll("SWIFT")}} style={{top: 0, left: `250px`}} >Swift</h3>
                <h3 onClick={() => {handleScroll("REACT")}} style={{top: 0, left: `375px`}} >React.js</h3>
                <h3 onClick={() => {handleScroll("PYTHON")}} style={{top: 0, left: `500px`}} >Python</h3>
                <h3 onClick={() => {handleScroll("CONTACT")}} style={{top: 0, left: `625px`}} >Contact</h3>
            </div>
            <div className="navSVG">
                <svg width={sizer.width} height="100%" viewBox="0 0 100 100" overflow="visible" preserveAspectRatio="none" style={{strokeLinejoin: "round", stroke: '#33EAC9', fill: '#232831'}}>
                    <path d={`M${pixel(curveLength)},98 h${pixel(titleLength)} q${pixel(curveLength)},0 ${pixel(curveLength)},-25 v-25 q0,-25 ${pixel(curveLength)},-25 h${pixel(spaceLength)} q${pixel(curveLength)},0 ${pixel(curveLength)},25 v25 q0,25 ${pixel(curveLength)},25 h${pixel(tabLength)} q${pixel(curveLength)},0 ${pixel(curveLength)},-25 v-25 q0,-25 ${pixel(curveLength)},-25 h${pixel(endLength)} l0,-26 h-${pixel(topLength)} v26 h${pixel(returnLength)} q${pixel(curveLength)},0 ${pixel(curveLength)},25 v25 q0,25 ${pixel(curveLength)},25 z`}
                    style={{strokeWidth: 3}}
                    vectorEffect="non-scaling-stroke"
                    fillRule="inherit" />
                </svg>
            </div>
        </div>       
    )
}

export default NavBar;