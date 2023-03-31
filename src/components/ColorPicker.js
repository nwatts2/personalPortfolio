import React from 'react';
import ProjectDescription from '../components/ProjectDescription';
import '../css/ColorPicker.css';

const ColorPicker = () => {
    const colorText = ["For my first MacOS project with Swift, I wanted to create a tool that I would actually use in my daily life. I was having trouble keeping track of all the HEX and RGB values for the colors in my projects, so I built the Color Picker app.", "This app serves as a color palette management tool which allows you to create and store collections of colors to help organize projects easier. It utilizes the built-in color selector within MacOS for eye-dropper capability, and HSL, HEX, and RGBA values can be modified directly to fine tune your colors."];

    return (
        <div className='row colorPicker'>
            <div className='row colorPickerLeft'>
                <iframe src="https://www.youtube.com/embed/h_u0X6abz8E" title="Color Picker App Demonstration" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className='column colorPickerRight'>
                <h2>MacOS Projects</h2>
                <ProjectDescription title="Color Picker App" text={colorText} link={"Color-Picker"} />
            </div>
            
        </div>
    )
}

export default ColorPicker;