import React from 'react';
import '../css/ProjectDescription.css';

const ProjectDescription = ({ title, text, link }) => {
    return (
        <div className="projectDescription">
            <h3>{title}</h3>
            {text.map((thisText, index) => {
                if (index !== 0) {
                    return (
                        <div key={`${thisText}-container`} className='column' style={{width: '100%', margin: '0', justifyContent: 'flex-start', alignItems: 'flex-start'}}  >
                            <span key={`${thisText}-child${index}-1`}>{"//"}</span>
                            <p key={`${thisText}-child${index}-2`}><span key={`${thisText}-child${index}-3`}>{"<p>"}</span> {thisText} <span key={`${thisText}-child${index}-4`}>{"</p>"}</span></p>
                        </div>
                    )
                } else {
                    return <p key={`${thisText}-child${index}-1`}><span key={`${thisText}-child${index}-2`}>{"<p>"}</span> {thisText} <span key={`${thisText}-child${index}-3`}>{"</p>"}</span></p>
                }
            })}
            {link &&
                <h4><a href={`https://github.com/nwatts2/${link}`} target='_blank' rel="noopener noreferrer" >Check out the code</a></h4>
            }
        </div>
    )
}

export default ProjectDescription;