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

    var sizer = {
        isMobile: screenWidth <= 740,
        isTablet: (screenWidth <= 1200 && screenWidth > 740),
        width: screenWidth
    };

    const color1 = "hsla(0,0%,100%,1)";
    const color2 = "hsla(258.5,59.4%,59.4%,1)";
    const color3 = "hsla(339.6,82.2%,51.6%,1)";
    const color4 = "hsla(198.7,97.6%,48.4%,1)";
    const color5 = "black";

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        const observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setPage(entry.target.id);
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
            <div className="column page">
                {sizer.width >= 1150 &&
                    <NavBar page={page} setPage={setPage} sizer={sizer} />
                }
                {sizer.width < 1150 &&
                    <MobileNavBar setPage={setPage} sizer={sizer} />
                }
                <div className={sizer.width >= 1150 ? "navBarBackground" : "mobileNavBarBackground"} />
                <Home />
                <About />
                <Swift sizer={sizer} />
                <div className='reactPythonContent'>
                    <div className='reactPythonWrapper'>
                        <ReactJS setShowImage={setShowImage} />
                        <Python />
                    </div>
                    <ReactPythonBackground />
                </div>
                <Contact />
                <Social sizer={sizer} />
            </div>
            <div className='pageEnd' />
            {showImage !== null &&
                <ImageModal image={showImage} setShowImage={setShowImage} />
            }
        </div>
        
    )
}

export default App;