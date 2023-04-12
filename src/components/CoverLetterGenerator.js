import React from 'react';
import ProjectDescription from '../components/ProjectDescription';
import CoverLetterExplainer from '../videos/Cover Letter Generator.mov';
import '../css/CoverLetterGenerator.css';

const CoverLetterGenerator = () => {
    const letterText = ["After finishing up my Color Picker, I decided to create another MacOS app to help with the job hunting process. I noticed I was spending a good deal of time writing cover letters specific to each job I was applying to. So, I made the Cover Letter Generator for MacOS.", "This app allows you to generate a unique cover letter for each application you submit. Enter your letter content and personal information once, and the app will store this info so minimal information needs to be changed for each application. You can program variables into your cover letter in the text editor by typing an asterisk and enclosing the variable name in curly brackets. The color and template can also be customized to ensure your cover letter stands out. Overall, this app has saved me a great deal of time when looking for jobs, and it taught me to use Swift to make more complex applications."];

    return (
        <div className='row coverLetterGenerator'>
            <div className='column coverLetterGeneratorLeft'>
                <h2>MacOS Projects</h2>
                <ProjectDescription title="Cover Letter Generator App" text={letterText} link={"Cover-Letter-Generator"} />
            </div>
            <div className='row coverLetterGeneratorRight'>
            <iframe src="https://www.youtube.com/embed/2f9ai4mtRYI?mute=1&autoplay=1&controls=0&fs=0" title="Cover Letter Generator App Demonstration" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                {/*<video autoPlay loop muted>
                    <source src={CoverLetterExplainer} type="video/mp4" />
    </video>*/}
            </div>
        </div>
    )
}

export default CoverLetterGenerator;