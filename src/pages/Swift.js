import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ProjectPanel from '../components/ProjectPanel';
import IOS from '../components/IOS';
import ColorPicker from '../components/ColorPicker';
import CoverLetterGenerator from '../components/CoverLetterGenerator';
import "../css/Swift.css";

const Swift = ({ sizer }) => {
    const swiftDescription = "Swift is a programming language developed by Apple and the open-source community. It's used to build applications for iPhones, MacBooks, Apple Watches, and Apple TV.";

    return (
        <div className="column swiftContainer pageSection">
            <SectionHeader title="Swift" description={swiftDescription} identifier="SWIFT" />
            {!sizer.isTablet &&
                <div className="row swift">
                        <ProjectPanel mode={"SWIFT"} numProjects={3} sizer={sizer} />
                        <div className='swiftBackground'>
                            <svg className="hex1" viewBox="0 0 184.751 184.751"><path d="M0,92.375l46.188-80h92.378l46.185,80l-46.185,80H46.188L0,92.375z"/></svg>
                            <svg className="hex4" viewBox="0 0 184.751 184.751"><path d="M0,92.375l46.188-80h92.378l46.185,80l-46.185,80H46.188L0,92.375z"/></svg>
                            <svg className="hex2" viewBox="0 0 184.751 184.751"><path d="M0,92.375l46.188-80h92.378l46.185,80l-46.185,80H46.188L0,92.375z"/></svg>
                            <svg className="hex3" viewBox="0 0 184.751 184.751"><path d="M0,92.375l46.188-80h92.378l46.185,80l-46.185,80H46.188L0,92.375z"/></svg>    
                        </div>
                </div>
            }
            {sizer.isTablet &&
                <div className="row swift">
                    <ColorPicker sizer={sizer} />
                    <CoverLetterGenerator sizer={sizer} />
                    <IOS sizer={sizer} />
                </div>
            }
        </div>
                
    );
}

export default Swift;