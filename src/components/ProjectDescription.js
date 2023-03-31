import React from 'react';
import '../css/ProjectDescription.css';

const ProjectDescription = ({ title, text, link }) => {
    return (
        <div className="projectDescription">
            <h3>{title}</h3>
            {text.map((thisText) => {
                return <p>{thisText}</p>
            })}
            {link &&
                <h4><a href={`https://github.com/nwatts2/${link}`} target='_blank' rel="noopener noreferrer" >Check out the code</a></h4>
            }
        </div>
    )
}

export default ProjectDescription;