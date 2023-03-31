import React, { useEffect, useState } from 'react'
import ProjectPanel from '../components/ProjectPanel'
import "../css/Swift.css"

const Swift = () => {
    return (
        <div className="column swiftContainer" id="swift">
            <div className="sectionTitleContainer">
                <div className="sectionTitle">
                    <hr style={{margin: "0px 0 10px 0"}}/>
                    <h1 className="tab" id="SWIFT">Swift</h1>
                    <hr style={{margin: "10px 0 0px 0"}}/>
                </div>
            </div>
            <div className="swift">
                <ProjectPanel mode={"SWIFT"} numProjects={3} />
            </div>
        </div>
                
    );
}

export default Swift;