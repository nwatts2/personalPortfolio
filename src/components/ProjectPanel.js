import { useState, useEffect } from 'react';
import React from 'react';
import IOS from '../components/IOS';
import ColorPicker from '../components/ColorPicker';
import CoverLetterGenerator from '../components/CoverLetterGenerator';
import PaintBackground from '../components/PaintBackground';
import '../css/ProjectPanel.css';

const ProjectPanel = ({ mode, numProjects }) => {
    const [activePanel, setActivePanel] = useState(0)
    const [panels, setPanels] = useState([])

    const [panelAnimation, setPanelAnimation] = useState({animation: "none"});

    useEffect(() => {
        const tempPanels = []

        for (let i = 0; i < numProjects; i++) {
            tempPanels.push(i);
        }

        setPanels(tempPanels)

    }, [numProjects])

    function updatePanel(method) {
        if (method === "previous") {
            if (activePanel > 0) {
                setActivePanel(activePanel - 1);
            } else {
                setActivePanel(numProjects - 1);
            }

            setPanelAnimation({
                animation: "floatInRight .3s ease-out"
            })

        } else if (method === "next") {
            if (activePanel < numProjects - 1) {
                setActivePanel(activePanel + 1);
            } else {
                setActivePanel(0);
            }

            setPanelAnimation({
                animation: "floatInLeft .3s ease-out"
            })
        }
    }

    function handleNext () {
        setPanelAnimation({
            animation: "floatOutLeft .2s ease-out"
        });

        setTimeout(() => {
            updatePanel("next")
        }, 200)
    }

    function handlePrev () {
        setPanelAnimation({
            animation: "floatOutRight .2s ease-out"
        });

        setTimeout(() => {
            updatePanel("previous")
        }, 200)
    }

    return (
        <div className="column projectPanel">
            <div className="row projectPanelDisplayContainer">
                <div className="prevPanelButton" onClick={ handlePrev } >
                    <svg viewBox="0 0 64 64" ><path d="M35.5,60.5a6,6,0,0,1-5.73-4.22l-2.64-8.5A2,2,0,1,1,31,46.6l2.64,8.49a2,2,0,1,0,3.82-1.18L30.78,32.59a2,2,0,0,1,0-1.18l6.63-21.32a2,2,0,1,0-3.82-1.18l-7,22.5a2,2,0,0,0,0,1.18l1.25,4A2,2,0,0,1,24,37.79l-1.25-4a6,6,0,0,1,0-3.56l7-22.5a6,6,0,1,1,11.46,3.56L34.78,32l6.45,20.72A6,6,0,0,1,35.5,60.5Z"/></svg>
                </div>
                { mode === "SWIFT" &&
                <div className="row projectPanelDisplay">
                    <div className={activePanel === 0 ? "panel activePanel" : "panel inactivePanel"} style={panelAnimation} >
                        <IOS />
                    </div>
                    <div className={activePanel === 1 ? "panel activePanel" : "panel inactivePanel"} style={panelAnimation} >
                        <ColorPicker />
                    </div>
                    <div className={activePanel === 2 ? "panel activePanel" : "panel inactivePanel"} style={panelAnimation} >
                        <CoverLetterGenerator />
                    </div>
                </div>
                }
                <div className="nextPanelButton" onClick={ handleNext } >
                    <svg viewBox="0 0 64 64" ><path d="M28.5,60.5a6,6,0,0,1-5.73-7.78l2.94-9.45a2,2,0,0,1,3.82,1.19l-2.94,9.45a2,2,0,0,0,3.82,1.18l7-22.5a2,2,0,0,0,0-1.18l-7-22.5a2,2,0,0,0-3.82,1.18l6.63,21.32a2,2,0,0,1,0,1.18l-.88,2.85a2,2,0,0,1-3.82-1.19l.7-2.25L22.77,11.28A6,6,0,0,1,34.23,7.72l7,22.5a6,6,0,0,1,0,3.56l-7,22.5A6,6,0,0,1,28.5,60.5Z"/></svg>
                </div>
            </div>
            <div className="row projectPanelSelector">
                {panels.map((panelNumber) => {
                    return <hr className={panelNumber === activePanel ? "selected" : ""} onClick={() => {setActivePanel(panelNumber)}} />
                })}
            </div>
            <PaintBackground />
        </div>
    )
}

export default ProjectPanel;