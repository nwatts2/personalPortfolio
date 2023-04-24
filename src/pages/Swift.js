import React from 'react';
import ProjectPanel from '../components/ProjectPanel';
import PaintBackground from '../components/PaintBackground';
import IOS from '../components/IOS';
import ColorPicker from '../components/ColorPicker';
import CoverLetterGenerator from '../components/CoverLetterGenerator';
import "../css/Swift.css";

const Swift = ({ sizer }) => {
    return (
        <div className="column swiftContainer pageSection">
            <div className="row sectionTitleContainer">
                <div className="column sectionTitle">
                    <hr style={{margin: "0px 0 10px 0"}}/>
                    <h1 className="tab" id="SWIFT">Swift</h1>
                    <hr style={{margin: "10px 0 0px 0"}}/>
                </div>
            </div>
            {!sizer.isMobile &&
                <div className="swift">
                        <ProjectPanel mode={"SWIFT"} numProjects={3} sizer={sizer} />
                </div>
            }
            {sizer.isMobile &&
                <div className="swift">
                    <IOS sizer={sizer} />
                    <ColorPicker sizer={sizer} />
                    <CoverLetterGenerator sizer={sizer} />
                </div>
            }
            <PaintBackground />
        </div>
                
    );
}

export default Swift;