import "../css/ReactJS.css"
import React from 'react'
import ProjectDescription from '../components/ProjectDescription';
import ImageViewer from '../components/ImageViewer';

const ReactJS = () => {
    const electionText = ["My first major React.js application was definitely a passion project for me. I wanted to build an election tracking website where I could post my thoughts, predictions, and be able to view all available election data for the 2022 US Midterm elections, all from a single spot. It was two months until the midterms, and I had only just learned the basics of React, so I had a lot on my plate.", "For the election updates/data, I decided to go with web-scrapers instead of calling from an API because there weren’t any cheaply available options that would offer what I was needing. So, I created a network of web-scrapers using Python to collect as much election data as possible, and hooked it up to a personal MongoDB database.", "When I finished the website, you could view past election results, play out your own scenarios for election night, and view incoming election data for all Senate, House, and Gubernatorial elections. Since then, I’ve spent several months learning and working more with React, including building the website you’re reading this on!"];

    return (
        <div className='column reactJSContainer' id='react'>
            <div className="sectionTitleContainer">
                <div className="sectionTitle">
                    <hr style={{margin: "0px 0 10px 0"}}/>
                    <h1 className="tab" id="REACT">React.js</h1>
                    <hr style={{margin: "10px 0 0px 0"}}/>
                </div>
            </div>
            <div className="row react">
                <div className="reactLeft">
                    <ImageViewer mode={'REACT'} />
                </div>
                <div className="reactRight">
                    <ProjectDescription title="Noah's Election Machine" text={electionText} link="noahs-election-machine" />
                </div>
            </div>  
        </div>      
    );
}

export default ReactJS;