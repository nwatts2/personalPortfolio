import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ProjectDescription from '../components/ProjectDescription';
import SudokuExplainer from '../videos/Sudoku Solver.mp4';
import TicTacToeExplainer from '../videos/TicTacToe.mp4';
import Arrow1 from '../components/Arrow1';
import Arrow2 from '../components/Arrow2';
import "../css/Python.css";

const Python = () => {
    const ticTacToeText = ["Python served as my reintroduction to coding, and while I typically use it for scripting/automation, I built a couple of projects with user interfaces using tkinter. The first of these projects is a simple Tic-Tac-Toe game that allows you to choose your color and save your score.", "This app mostly helped me to get familiar with creating user interfaces for the first time, and it allowed me to practice newly-learned python skills."];
    const sudokuText = ["The next of these applications is an automatic sudoku solver. The app allows you to import text files with sudoku puzzles in them and solve them instantly. You can also manually type your puzzles in and solve them from there."];
    const pythonDescription = "Python is an interpreted high-level programming language which emphasizes readability and productivity. It's mainly used for scripting and automation, but is extremely versatile.";

    return (
        <div className="column pageSection pythonContainer">
                <SectionHeader title="Python" description={pythonDescription} identifier="PYTHON" />
                <div className="column python">
                    <div className="row ticTacToe">
                        <div className="column ticTacToeText">
                            <ProjectDescription title="TicTacToe" text={ticTacToeText} link="ticTacToe" />
                            <Arrow1 />
                        </div>
                        <div className="row ticTacToeVideo">
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
                    </div>
                    <div className="row sudoku">
                        <div className="row sudokuVideo">
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
                        <div className="column sudokuText">
                            <Arrow2 />
                            <ProjectDescription title="Sudoku Solver" text={sudokuText} link="sudokuSolver" />
                        </div>
                    </div>
                </div>
        </div>      
    );
}

export default Python;