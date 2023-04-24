import React from 'react';
import ProjectDescription from '../components/ProjectDescription';
import ColorPickerExplainer from '../videos/Color Picker.mov';
import '../css/MacOS.css';

const ColorPicker = ({ sizer }) => {
    const colorText = ["One problem I was having was trying to keep track of all the HEX and RGB values for the colors in my projects, so for my first app, I built the Color Picker.", "This app serves as a color palette management tool which allows you to create and store collections of colors to help organize projects more easily. It utilizes the built-in color selector within MacOS for eye-dropper capability, and HSL, HEX, and RGBA values can be modified directly to fine tune your colors."];

    if (sizer.isMobile) {
        return (
            <div className='row macOS'>
                <h2>MacOS Projects</h2>
                <p>{"After learning the basics through my iOS projects, I moved into developing for MacOS. These apps were more challenging and complex, and served as tools to help me with my daily tasks."}</p>
                <ProjectDescription title="Color Picker" text={colorText} link={"Color-Picker"} />
                <video autoPlay loop muted >
                    <source src={ColorPickerExplainer} type="video/mp4" />
                </video>
            </div>
        )
    } else {
        return (
            <div className='row macOS'>
                <div className='row macOSLeft'>
                    <video autoPlay loop muted >
                        <source src={ColorPickerExplainer} type="video/mp4" />
                    </video>
                </div>
                <div className='column macOSRight'>
                    <h2>MacOS Projects</h2>
                    <p>{"After learning the basics through my iOS projects, I moved into developing for MacOS. These apps were more challenging and complex, and served as tools to help me with my daily tasks."}</p>
                    <ProjectDescription title="Color Picker" text={colorText} link={"Color-Picker"} />
                </div>
            </div>
        )
    }
    
}

export default ColorPicker;