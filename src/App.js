import React, { useState, useEffect } from "react"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import About from "./pages/About"
import Swift from "./pages/Swift"
import ReactJS from "./pages/ReactJS"
import Python from './pages/Python'

const App = () => {
    const [page, setPage] = useState("HOME");

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
        <div className="page">
            <NavBar page={page} setPage={setPage} />
            <Home />
            <About />
            <Swift />
            <ReactJS />
            <Python />
        </div>
    )
}

export default App;