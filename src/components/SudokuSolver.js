import React from 'react';
import ProjectDescription from '../components/ProjectDescription';
import '../css/SudokuSolver.css';

const SudokuSolver = () => {
    const sudokuText = ["Another application I made was an automatic sudoku solver. There are plenty of these online, but I wanted to challenge myself to create the algorithm without any outside help. The app allows you to import text files with sudoku puzzles in them, and solve them instantly. You can also manually type your puzzles in and solve them from there.", "Overall, my early Python apps are filled with bugs and are in dire need of optimization, but I like to keep them as is to remind myself how much I’ve learned since then. And so, you can see them now, too."];

    return (
        <div className='row sudokuSolver' >
            <div className='column sudokuSolverLeft'>
                <h2>Python Projects</h2>
                <ProjectDescription title="Sudoku Solver" text={sudokuText} />
            </div>
            <div className='row sudokuSolverRight'>
                <iframe src="https://www.youtube.com/embed/sayP1QlUo9A" title="Sudoku Solver" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default SudokuSolver;