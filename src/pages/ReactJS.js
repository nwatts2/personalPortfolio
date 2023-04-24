import "../css/ReactJS.css"
import React from 'react'
import ProjectDescription from '../components/ProjectDescription';
import ElectionBanner from '../components/ElectionBanner';
import ImageViewer from '../components/ImageViewer';

const ReactJS = ({ setShowImage }) => {
    const electionText = ["My first major React.js application was definitely a passion project for me. I wanted to build an election tracking website where I could post my thoughts, predictions, and be able to view all available election data for the 2022 US Midterm elections, all from a single spot.", "For the election updates/data, I created a network of web-scrapers using Python to collect as much election data as possible, and hooked it up to a personal MongoDB database.", "When I finished the website, you could view past election results, play out your own scenarios for election night, and view incoming election data for all U.S. Senate, House, and gubernatorial elections. Since then, I’ve spent several months learning and working more with React, including building the website you’re reading this on!"];

    return (
        <div className='column reactJSContainer pageSection'>
                <div className="row sectionTitleContainer">
                    <div className="column sectionTitle">
                        <hr style={{margin: "0px 0 10px 0"}}/>
                        <h1 className="tab" id="REACT">React.js</h1>
                        <hr style={{margin: "10px 0 0px 0"}}/>
                    </div>
                </div>
                <div className="row react">
                    <div className="reactLeft">
                        <ImageViewer setShowImage={setShowImage} />
                    </div>
                    <div className="reactRight">
                        <ProjectDescription title="Noah's Election Machine" text={electionText} link="noahs-election-machine" />
                        <ElectionBanner />
                    </div>
                </div>
        </div>  
    );
}

export default ReactJS;