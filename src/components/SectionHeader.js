import React, { useState } from 'react';
import '../css/SectionHeader.css';

const SectionHeader = ({ title, description, identifier }) => {

    const [expandInfo, setExpandInfo] = useState(false);

    return (
        <div className="row sectionTitleContainer">
            <div className="column sectionTitle">
                <hr style={{margin: "0px 0 10px 0"}}/>
                <h1 className="tab" id={identifier} >{title}</h1>
                <hr style={{margin: "10px 0 0px 0"}}/>
                {description &&
                    <svg onMouseEnter={() => {if (!expandInfo) {setExpandInfo(true)}}} onMouseLeave={() => {if (expandInfo) {setExpandInfo(false)}}} viewBox="0 0 24 24" fill="none" >
                        <path d="M12.4545 7.5C12.4545 8.1778 11.905 8.72727 11.2272 8.72727C10.5494 8.72727 9.99996 8.1778 9.99996 7.5C9.99996 6.82219 10.5494 6.27273 11.2272 6.27273C11.905 6.27273 12.4545 6.82219 12.4545 7.5Z" fill="white"/>
                        <path d="M10 11L12 11L12 16L14 16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" stroke="white" stroke-width="2"/>
                    </svg>
                }
                {description &&
                    <p className={expandInfo ? "showInfo" : "hideInfo"} >{description}</p>
                }
            </div>
            
        </div>
    )
}

export default SectionHeader;