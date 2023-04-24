import React from 'react';
import ProjectDescription from '../components/ProjectDescription';
import CoverLetterExplainer from '../videos/Cover Letter Generator.mov';
import '../css/MacOS.css';

const CoverLetterGenerator = ({ sizer }) => {
    const letterText = ["For my next app, I noticed I was spending hours writing cover letters specific to each job I was applying to, so I made the Cover Letter Generator to alleviate this.", "This app allows you to generate a unique cover letter for each application you submit. Enter your letter content and personal information once, and the app will store it so little needs to be changed for each application. You can program variables into your letter in the text editor, and the color/template can also be customized to ensure your cover letter stands out. Overall, this app has saved me a great deal of time throughout the job hunting process."];

    if (sizer.isMobile) {
        return (
            <div className='row macOS'>
                <ProjectDescription title="Cover Letter Generator" text={letterText} link={"Cover-Letter-Generator"} />
                <video autoPlay loop muted>
                    <source src={CoverLetterExplainer} type="video/mp4" />
                </video>
            </div>
        )
    } else {
        return (
            <div className='row macOS'>
                <div className='row macOSLeft'>
                   <video autoPlay loop muted>
                        <source src={CoverLetterExplainer} type="video/mp4" />
                    </video>
                </div>
                <div className='column macOSRight'>
                    <h2>MacOS Projects</h2>
                    <p>{"After learning the basics through my iOS projects, I moved into developing for MacOS. These apps were more challenging and complex, and served as tools to help me with my daily tasks."}</p>
                    <ProjectDescription title="Cover Letter Generator" text={letterText} link={"Cover-Letter-Generator"} />
                </div>
            </div>
        )
    }
    
}

export default CoverLetterGenerator;