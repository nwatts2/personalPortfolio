import React from 'react';
import PaintBackground from '../components/PaintBackground';
import '../css/ReactPythonBackground.css';

const ReactPythonBackground = () => {
    return (
        <div className="reactPythonBackground">
            <svg width="500" height="500" viewbox="0 0 100 100" style={{position: "absolute", top: "6%", left: "18%"}} fill="#30475D" >
                <circle cx="250" cy="250" r="250" />
            </svg>
            <svg width="500" height="500" viewbox="0 0 100 100" style={{position: "absolute", top: "8%", left: "1%"}} fill="#232831" >
                <circle cx="250" cy="250" r="250" />
            </svg>
            <svg width="600" height="600" viewbox="0 0 100 100" style={{position: "absolute", top: "8%", left: "29%"}} fill="#F15455" >
                <circle cx="300" cy="300" r="300" />
            </svg>
            <svg width="500" height="500" viewbox="0 0 100 100" style={{position: "absolute", top: "16%", left: "13%"}} fill="#d9d9d9" >
                <circle cx="250" cy="250" r="250" />
            </svg>
            <svg width="500" height="500" viewbox="0 0 100 100" style={{position: "absolute", top: "33%", left: "38%"}} fill="#30475D" >
                <circle cx="250" cy="250" r="250" />
            </svg>
            <svg width="500" height="500" viewbox="0 0 100 100" style={{position: "absolute", top: "18%", right: "0.5%"}} fill="#232831" >
                <circle cx="250" cy="250" r="250" />
            </svg>
            <PaintBackground />
            <svg width="500" height="500" viewbox="0 0 100 100" style={{position: "absolute", top: "45%", left: "5%"}} fill="#232831" >
                <circle cx="250" cy="250" r="250" />
            </svg>
            <svg width="600" height="600" viewbox="0 0 100 100" style={{position: "absolute", bottom: "20%", right: "2%"}} fill="#d9d9d9" >
                <circle cx="300" cy="300" r="300" />
            </svg>
            <svg width="500" height="500" viewbox="0 0 100 100" style={{position: "absolute", bottom: "7%", left: "1%"}} fill="#F15455" >
                <circle cx="250" cy="250" r="250" />
            </svg>
        </div>
    )
}

export default ReactPythonBackground;