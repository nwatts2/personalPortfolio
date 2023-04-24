import React, { useState, useEffect } from "react"
import NavBar from "./components/NavBar"
import MobileNavBar from './components/MobileNavBar'
import Home from "./pages/Home"
import About from "./pages/About"
import Swift from "./pages/Swift"
import ReactJS from "./pages/ReactJS"
import Python from './pages/Python'
import Contact from './pages/Contact'
import BackgroundGraphic from './components/BackgroundGraphic'
import Social from './components/Social';
import ReactPythonBackground from './components/ReactPythonBackground';
import ImageModal from './components/ImageModal';

const App = () => {
    const [page, setPage] = useState("HOME");
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [showImage, setShowImage] = useState(null);
    const [showScrollPrompt, setShowScrollPrompt] = useState(true);

    var sizer = {
        isMobile: screenWidth <= 740,
        width: screenWidth
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        const observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setPage(entry.target.id);

                    if (entry.target.id !== 'HOME') {
                        setShowScrollPrompt(false);
                    } else if (!showScrollPrompt) {
                        setShowScrollPrompt(true);
                    }
                }
            });
        });

        const tabList = document.querySelectorAll(".tab");
        tabList.forEach((element) => {
            observer.observe(element);
        })

        return () => {
            window.removeEventListener('resize', handleResize);
        }

    }, []);

    function handleResize () {
        setScreenWidth(window.innerWidth);
    }


    return (
        <div className="column pageContainer">
            <div className="pageBackground">
                <BackgroundGraphic />
            </div>
            <div className="column pageWrapper">
                <div className="column page">
                    {sizer.width >= 1150 &&
                        <NavBar page={page} setPage={setPage} sizer={sizer} />
                    }
                    {sizer.width < 1150 &&
                        <MobileNavBar setPage={setPage} sizer={sizer} />
                    }
                    <div className={sizer.width >= 1150 ? "navBarBackground" : "mobileNavBarBackground"} />
                    <hr className="divider" id="home" style={{margin: "0px 0px 60px 0px"}} />
                    <Home showScrollPrompt={showScrollPrompt} />
                    <hr className="divider" id="about" style={{margin: '0'}} />
                    <About />
                    <hr className="divider" id="swift" />
                    <Swift sizer={sizer} />
                    <hr className="divider" id="react" />
                    <div className='reactPythonContent'>
                        <div className='reactPythonWrapper'>
                            <ReactJS setShowImage={setShowImage} />
                            <hr className="divider" id="python" />
                            <Python />
                        </div>
                        <ReactPythonBackground />
                    </div>
                    <hr className="divider" id="contact" />
                    <Contact />
                    <Social sizer={sizer} />
                </div>
            </div>
            <div className='pageEnd' />
            {showImage !== null &&
                <ImageModal image={showImage} setShowImage={setShowImage} />
            }
        </div>
        
    )
}

export default App;