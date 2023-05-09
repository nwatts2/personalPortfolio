import React from 'react';

const ShadesBackground = () => {
    return (
        <div className="shadesBackground">
            <svg viewBox="0 0.5 20 13" preserveAspectRatio="none" >
                <path fillRule="evenodd" style={{animation: "floatUpDown 2.5s -.5s ease-in-out infinite"}} d="M19 2a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1z" />
                <path fillRule="evenodd" style={{animation: "floatUpDown 2.5s -.4s ease-in-out infinite"}} d="M19 5a0.75 0.75 0 01-0.75 0.75H1.75a0.75 0.75 0 010-1.5h16.5a0.75 0.75 0 010.75 0.75z" />
                <path fillRule="evenodd" style={{animation: "floatUpDown 2.5s -.3s ease-in-out infinite"}} d="M19 7.5a0.5 0.5 0 01-0.5 0.5H1.5a0.5 0.5 0 010-1h17a0.5 0.5 0 010.5 0.5z" />
                <path fillRule="evenodd" style={{animation: "floatUpDown 2.5s -.2s ease-in-out infinite"}} d="M19 9.5a0.25 0.25 0 01-0.25 0.25H1.25a0.25 0.25 0 010-0.5h17.5a0.25 0.25 0 010.25 0.25z" />
                <path fillRule="evenodd" style={{animation: "floatUpDown 2.5s -.1s ease-in-out infinite"}} d="M19 11a0.12 0.12 0 01-0.12 0.12H1.12a0.12 0.12 0 010-0.25h17.75a0.12 0.12 0 010.12 0.12z" />
                <path fillRule="evenodd" style={{animation: "floatUpDown 2.5s 0s ease-in-out infinite"}} d="M19 12a0.06 0.06 0 01-0.06 0.06H1.06a0.06 0.06 0 010-0.12h17.87a0.06 0.06 0 010.06 0.06z" />
            </svg>
        </div>
    )
}

export default ShadesBackground;