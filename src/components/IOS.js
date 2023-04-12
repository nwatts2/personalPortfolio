import React from 'react';
import ProjectDescription from '../components/ProjectDescription';
//import ToDoExplainer from '../videos/ToDo.mov';
//import CalculatorExplainer from '../videos/Calculator.mov';
import '../css/IOS.css';

const IOS = () => {
    const todoText = ["For my first Swift project, I went with a simple ToDo/Notes app designed for iOS. This allowed me to get a feel for the language and play around with SwiftUI for the first time.", "In the app, you can create, save, and edit notes, and you can also keep a running list of ToDo items."];
    const calculatorText = ["The next iOS app I built was a simple calculator app. It is a standard calculator with addition, subtraction, multiplication, and division. There is also a percentage and a negate operation.", "Overall, these two apps helped me to build a basic understanding of Swift that allowed me to create more complex projects with the language."];

    return (
        <div className='row ios' >
            <div className='column iosLeft'>
                <h2>iOS Projects</h2>
                <ProjectDescription title="ToDo App" text={todoText} link={"ToDo_Notes_iOS_16"} />
                <ProjectDescription title="Calculator App" text={calculatorText} link={"Calculator"} />
            </div>
            <div className='row iosRight'>
            <iframe src="https://www.youtube.com/embed/u5T3g9q_L88?mute=1&autoplay=1&controls=0&fs=0" title="ToDo App Demonstration" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        {/*<video autoPlay loop muted>
                    <source src={ToDoExplainer} type="video/mp4" />
</video>*/}
                <iframe src="https://www.youtube.com/embed/jrtW_00D46U?mute=1&autoplay=1&controls=0&fs=0" title="Calculator App Demonstration" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                {/*<video autoPlay loop muted>
                    <source src={CalculatorExplainer} type="video/mp4" />
</video>*/}
            </div>
        </div>
    )
}

export default IOS;