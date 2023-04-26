import "../css/ReactJS.css"
import React from 'react'
import SectionHeader from '../components/SectionHeader';
import ProjectDescription from '../components/ProjectDescription';
import ElectionBanner from '../components/ElectionBanner';
import ImageViewer from '../components/ImageViewer';

const ReactJS = ({ setShowImage }) => {
    const electionText = ["My first major React.js application was definitely a passion project for me. I wanted to build an election tracking website where I could post my thoughts, predictions, and be able to view all available election data for the 2022 US Midterm elections, all from a single spot.", "For the election updates/data, I created a network of web-scrapers using Python to collect as much election data as possible, and hooked it up to a personal MongoDB database.", "When I finished the website, you could view past election results, play out your own scenarios for election night, and view incoming election data for all U.S. Senate, House, and gubernatorial elections. Since then, I’ve spent several months learning and working more with React, including building the website you’re reading this on!"];
    const reactDescription = "React.js is an open-source Javascript library originally built by Facebook. It's used to build fast, flexible web applications using a component-based structure.";

    return (
        <div className='column reactJSContainer pageSection'>
                <SectionHeader title={"React.js"} description={reactDescription} identifier="REACT" />
                <div className="row react">
                    <div className="column reactLeft">
                        <ImageViewer setShowImage={setShowImage} />
                    </div>
                    <div className="column reactRight">
                        <ElectionBanner />
                        <ProjectDescription title="Noah's Election Machine" text={electionText} link="noahs-election-machine" />
                    </div>
                </div>
        </div>  
    );
}

export default ReactJS;