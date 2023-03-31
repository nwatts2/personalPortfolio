import React from 'react';
import ProjectPanel from '../components/ProjectPanel';
import "../css/Python.css";

const Python = () => {
    const ticTacToeText = ["Python served as my reintroduction to coding, and while I typically use it for scripting/automation, I built a couple of projects with user interfaces using tkinter. The first of those projects was a simple Tic-Tac-Toe game that would allow you to choose your color and save your score.", "This app mostly helped me to get familiar with creating user interfaces for the first time, and it allowed me to practice newly-learned python skills."];
    const sudokuText = ["Another application I made was an automatic sudoku solver. There are plenty of these online, but I wanted to challenge myself to create the algorithm without any outside help. The app allows you to import text files with sudoku puzzles in them, and solve them instantly. You can also manually type your puzzles in and solve them from there.", "Overall, my early Python apps are filled with bugs and are in dire need of optimization, but I like to keep them as is to remind myself how much I’ve learned since then. And so, you can see them now, too."];

    return (
        <div className="column pythonContainer">
            <div className="sectionTitleContainer">
                <div className="sectionTitle">
                    <hr style={{margin: "0px 0 10px 0"}}/>
                    <h1 className="tab" id="PYTHON">Python</h1>
                    <hr style={{margin: "10px 0 0 0"}}/>
                </div>
            </div>
            <div className="row python" id="python">
                <ProjectPanel mode="PYTHON" numProjects={2} />
            </div>
        </div>
                
    );
}

export default Python;