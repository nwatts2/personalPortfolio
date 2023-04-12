import React, { useState, useEffect } from "react"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import About from "./pages/About"
import Swift from "./pages/Swift"
import ReactJS from "./pages/ReactJS"
import Python from './pages/Python'
import Contact from './pages/Contact'
import BackgroundGraphic from './components/BackgroundGraphic'

const App = () => {
    const [page, setPage] = useState("HOME");

    const color1 = "hsla(0,0%,100%,1)";
    const color2 = "hsla(258.5,59.4%,59.4%,1)";
    const color3 = "hsla(339.6,82.2%,51.6%,1)";
    const color4 = "hsla(198.7,97.6%,48.4%,1)";
    const color5 = "black";

    useEffect(() => {
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

    }, []);


    return (
        <div className="column pageContainer">
            <div className="pageBackground">
                {//<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='100' height='82' patternTransform='scale(2) rotate(140)'><rect x='0' y='0' width='100%' height='100%' fill={color1}/><path d='M74.4-14.6l-24 41.1h48l-24-41.1zm0 82l-24 41.1h48l-24-41.1z'  stroke-width='1' stroke='none' fill={color2}/><path d='M0 0l24 41.1L48 0H0zm-1.6 26.5l-24 41.1h48l-24-41.1zm100 0l-24 41.1h48l-24-41.1z'  stroke-width='1' stroke='none' fill={color3}/><path d='M24 41.1l24 41.1 24-41.1H24z'  stroke-width='1' stroke='none' fill={color4}/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(#a)'/></svg>
}
            <BackgroundGraphic />
        </div>
            <div className="column page">
                <NavBar page={page} setPage={setPage} />
                <div className="navBarBackground" />
                <Home />
                <About />
                <Swift />
                <ReactJS />
                <Python />
                <Contact />
            </div>
            <div className='pageEnd' />
        </div>
        
    )
}

export default App;