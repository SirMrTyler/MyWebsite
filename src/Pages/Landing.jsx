import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Resume from "../components/Resume";
import Games from "../components/Games";

function Landing() {
    return (
        <>
            <Navbar />
            <Home />
            <AboutMe />
            <Projects />
            <Resume />
            <Games />
            <Contact />
            <Footer />
        </>
    );
}

export default Landing;