import React from 'react';
import ProjectDescription from '../components/ProjectDescription';
import ToDoExplainer from '../videos/ToDo.mp4';
import CalculatorExplainer from '../videos/Calculator.mp4';
import '../css/IOS.css';

const IOS = ({ sizer }) => {
    const todoText = ["For my first Swift project, I went with a modern ToDo/Notes app designed for iOS. In the app, you can create, save, and edit notes, and you can also keep a running list of ToDo items."];
    const calculatorText = ["The next iOS app I built was a simple calculator with addition, subtraction, multiplication, and division. There are also percentage and negate operations."];

    if (sizer.isMobile) {
        return (
            <div className='row ios' >
                        <h2>iOS Projects</h2>
                        <p>{"My first Swift projects allowed me to get a feel for the language and play around with SwiftUI for the first time. Overall, they helped me to build a foundational understanding of Swift that awarded me the ability to create more complex programs with it."}</p>
                        <ProjectDescription title="ToDo App" text={todoText} link={"ToDo_Notes_iOS_16"} />
                        <video autoPlay loop muted>
                            <source src={ToDoExplainer} type="video/mp4" />
                        </video>
                        <ProjectDescription title="Calculator App" text={calculatorText} link={"Calculator"} />
                        <video autoPlay loop muted>
                            <source src={CalculatorExplainer} type="video/mp4" />
                        </video>
            </div>
        )
    } else {
        return (
            <div className='row ios' >
                <div className='column iosLeft'>
                    <h2>iOS Projects</h2>
                    <p>{"My first Swift projects allowed me to get a feel for the language and play around with SwiftUI for the first time. Overall, they helped me to build a foundational understanding of Swift that awarded me the ability to create more complex programs with it."}</p>
                    <ProjectDescription title="ToDo App" text={todoText} link={"ToDo_Notes_iOS_16"} />
                    <ProjectDescription title="Calculator App" text={calculatorText} link={"Calculator"} />
                </div>
                
                <div className='row iosRight'>
                    <video autoPlay loop muted>
                        <source src={ToDoExplainer} type="video/mp4" />
                    </video>
                    <video autoPlay loop muted>
                        <source src={CalculatorExplainer} type="video/mp4" />
                    </video>
                </div>
            </div>
        )
    }
}

export default IOS;