import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ProjectPanel from '../components/ProjectPanel';
import PaintBackground from '../components/PaintBackground';
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
                </div>
            }
            {sizer.isTablet &&
                <div className="row swift">
                    <ColorPicker sizer={sizer} />
                    <CoverLetterGenerator sizer={sizer} />
                    <IOS sizer={sizer} />
                </div>
            }
            <PaintBackground />
        </div>
                
    );
}

export default Swift;