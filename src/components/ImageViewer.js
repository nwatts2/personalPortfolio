import { useState } from 'react';
import React from 'react';
import SenateCallSim from '../images/Senate Call Sim.png'
import GubernatorialResults2018 from '../images/2018 Gubernatorial Results.png'
import GubernatorialResults2022 from '../images/Gubernatorial Results.png'
import HouseResults from '../images/House Results.png'
import MainPage from '../images/Main Page.png'
import AlaskaResults from '../images/Alaska House Breakdown.png'
import '../css/ImageViewer.css';

const ImageViewer = ({ mode }) => {
    const [activeImage, setActiveImage] = useState(0);
    const images = [MainPage, SenateCallSim, HouseResults, GubernatorialResults2022, GubernatorialResults2018, AlaskaResults];
    const numPictures = images.length;

    function updateImage(method) {
        if (method === "previous") {
            if (activeImage > 0) {
                setActiveImage(activeImage - 1);
            } else {
                setActiveImage(numPictures - 1);
            }
        } else if (method === "next") {
            if (activeImage < numPictures - 1) {
                setActiveImage(activeImage + 1);
            } else {
                setActiveImage(0);
            }
        }
    } 

    return (
        <div className="column imageViewer">
            <div className="row imageViewerDisplayContainer">
                <div className="prevImageButton" onClick={() => {updateImage("previous")}} >
                    <svg viewBox="0 0 64 64" ><path d="M35.5,60.5a6,6,0,0,1-5.73-4.22l-2.64-8.5A2,2,0,1,1,31,46.6l2.64,8.49a2,2,0,1,0,3.82-1.18L30.78,32.59a2,2,0,0,1,0-1.18l6.63-21.32a2,2,0,1,0-3.82-1.18l-7,22.5a2,2,0,0,0,0,1.18l1.25,4A2,2,0,0,1,24,37.79l-1.25-4a6,6,0,0,1,0-3.56l7-22.5a6,6,0,1,1,11.46,3.56L34.78,32l6.45,20.72A6,6,0,0,1,35.5,60.5Z"/></svg>
                </div>
                <div className="row imageViewerDisplay">
                    <img src={images[activeImage]} alt="Example of the Noah's Election Machine website"/>
                </div>
                <div className="nextImageButton" onClick={() => {updateImage("next")}} >
                    <svg viewBox="0 0 64 64" ><path d="M28.5,60.5a6,6,0,0,1-5.73-7.78l2.94-9.45a2,2,0,0,1,3.82,1.19l-2.94,9.45a2,2,0,0,0,3.82,1.18l7-22.5a2,2,0,0,0,0-1.18l-7-22.5a2,2,0,0,0-3.82,1.18l6.63,21.32a2,2,0,0,1,0,1.18l-.88,2.85a2,2,0,0,1-3.82-1.19l.7-2.25L22.77,11.28A6,6,0,0,1,34.23,7.72l7,22.5a6,6,0,0,1,0,3.56l-7,22.5A6,6,0,0,1,28.5,60.5Z"/></svg>
                </div>
            </div>
            <div className="row imageSelector">
                {images.map((image, index) => {
                    return <div className={index === activeImage ? 'row imageContainer selected' : 'row imageContainer unselected'} onClick={() => {setActiveImage(index)}}><img src={image} /></div>
                })}
            </div>
            <svg width="100%" height="100%" viewbox="0 0 100 100" style={{position: "absolute", top: "-15%", left: "25%"}} fill="#30475D" >
                <circle cx="250" cy="250" r="250" />
            </svg>
            <svg width="100%" height="100%" viewbox="0 0 100 100" style={{position: "absolute", top: "-10%", left: "0%"}} fill="#232831" >
                <circle cx="250" cy="250" r="250" />
            </svg>
            <svg width="100%" height="100%" viewbox="0 0 100 100" style={{position: "absolute", top: "-10%", left: "45%"}} fill="#F15455" >
                <circle cx="300" cy="300" r="300" />
            </svg>
            <svg width="100%" height="100%" viewbox="0 0 100 100" style={{position: "absolute", top: "25%", left: "20%"}} fill="#d9d9d9" >
                <circle cx="250" cy="250" r="250" />
            </svg>
            <svg width="100%" height="100%" viewbox="0 0 100 100" style={{position: "absolute", bottom: "-90%", left: "60%"}} fill="#30475D" >
                <circle cx="250" cy="250" r="250" />
            </svg>
            <svg width="100%" height="100%" viewbox="0 0 100 100" style={{position: "absolute", bottom: "-35%", left: "110%"}} fill="#232831" >
                <circle cx="250" cy="250" r="250" />
            </svg>
        </div>
    )
}

export default ImageViewer;