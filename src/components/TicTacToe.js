import React from 'react';
import ProjectDescription from '../components/ProjectDescription';
import GameStart from '../images/Start Game.png';
import GamePlay from '../images/Game.png';
import GameEnd from '../images/Scoreboard.png';
import '../css/TicTacToe.css';

const TicTacToe = () => {
    const ticTacToeText = ["Python served as my reintroduction to coding, and while I typically use it for scripting/automation, I built a couple of projects with user interfaces using tkinter. The first of those projects was a simple Tic-Tac-Toe game that would allow you to choose your color and save your score.", "This app mostly helped me to get familiar with creating user interfaces for the first time, and it allowed me to practice newly-learned python skills."];

    return (
        <div className='row ticTacToe' >
            <div className='column ticTacToeLeft'>
                <h2>Python Projects</h2>
                <ProjectDescription title="TicTacToe" text={ticTacToeText} />
            </div>
            <div className='row ticTacToeRight'>
            </div>
        </div>
    )
}

export default TicTacToe;