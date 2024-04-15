import React from "react";
import Image from '../imges/Frame 404377.png'
import './style.css'
import image from '../imges/Capture-removebg-preview 2.png'
import resumePDF from '../imges/kainat resume.pdf'
function About(){

    return(
        <div className="about">
            <img src={Image} alt="bg" />
            <div className="row">
                <div className="left">
                   <img src={image} alt="img"/>
                </div>
                <div className="right">
                    <h1>About Me</h1>
                    <p>Hello I am kainat robi a full stack web developer and devops engineer. </p>
                    <a href="/contact"><button type="submit" className="btn1">Hire me</button></a>
                    <a href={resumePDF}><button type="submit" className="btn3">Download Resume</button></a>

                </div>
            </div>

        </div>
    );
}

export default About;