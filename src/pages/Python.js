import React from 'react';
import ProjectDescription from '../components/ProjectDescription';
import SudokuExplainer from '../videos/Sudoku Solver.mov';
import PaintBackground from '../components/PaintBackground';
import TicTacToeExplainer from '../videos/TicTacToe.mov';
import Arrows from '../components/Arrows';
import "../css/Python.css";

const Python = () => {
    const ticTacToeText = ["Python served as my reintroduction to coding, and while I typically use it for scripting/automation, I built a couple of projects with user interfaces using tkinter. The first of those projects was a simple Tic-Tac-Toe game that would allow you to choose your color and save your score.", "This app mostly helped me to get familiar with creating user interfaces for the first time, and it allowed me to practice newly-learned python skills."];
    const sudokuText = ["Another application I made was an automatic sudoku solver. There are plenty of these online, but I wanted to challenge myself to create the algorithm without any outside help. The app allows you to import text files with sudoku puzzles in them and solve them instantly. You can also manually type your puzzles in and solve them from there.", "Overall, my early Python apps are filled with bugs and are in dire need of optimization, but I like to keep them as is to remind myself how much I’ve learned since then. And so, you can see them now, too."];

    return (
        <div className="column pageSection pythonContainer">
                <div className="sectionTitleContainer">
                    <div className="sectionTitle">
                        <hr style={{margin: "0px 0 10px 0"}}/>
                        <h1 className="tab" id="PYTHON">Python</h1>
                        <hr style={{margin: "10px 0 0 0"}}/>
                    </div>
                </div>
                <div className="row python" id="python">
                    <div className="ticTacToeText">
                        <ProjectDescription title="TicTacToe" text={ticTacToeText} />
                    </div>
                    <div className="sudokuText">
                        <ProjectDescription title="Sudoku Solver" text={sudokuText} />
                    </div>
                    <div className="ticTacToeVideo">
                        <video autoPlay loop muted >
                            <source src={TicTacToeExplainer} type="video/mp4" />
                        </video>
                        <svg className="backBlock1" >
                            <rect x="0%" y="0%" width="100%" height="100%" />
                        </svg>
                        <svg className="frontBlock1" >
                            <rect x="0%" y="0%" width="100%" height="100%" />
                        </svg>
                    </div>
                    
                    <div className="sudokuVideo">
                        <video autoPlay loop muted >
                            <source src={SudokuExplainer} type="video/mp4" />
                        </video>
                        <svg className="backBlock2" >
                            <rect x="0%" y="0%" width="100%" height="100%" />
                        </svg>
                        <svg className="frontBlock2" >
                            <rect x="0%" y="0%" width="100%" height="100%" />
                        </svg>
                    </div>
                    
                </div>
            <Arrows />
        </div>
        
                
    );
}

export default Python;