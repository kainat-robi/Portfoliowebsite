import React from "react";
import Image from '../imges/Frame 404377.png'
import './style.css'

function Projects(){

    return(
        <div className="project">
            <img src={Image} alt="bg"/>
            <div className="projectsec">
                <h3>Explore my</h3>
                <h1>Projects</h1>
               <div className="btns">
                <button type="submit" >Web development</button>
                <button type="submit" className="btnr">Devops</button>
               </div>
               <div class="services-list">
               <div class="contentservices">
                   <h2>Custom Web App</h2>
                   <p>My emphasis lies in crafting a contemporary, adaptable, and secure web application that is user-friendly and works seamlessly across various platforms. This ensures it can effectively handle surges in demand and navigate intricate scenarios.</p>

                   <a href="/contact"><button type="button">Hire me</button></a>
                </div>
               <div class="contentservices">
                   <h2>Landing Pages</h2>
                   <p>We meticulously craft captivating landing pages designed to persuade your users to take the desired action. Employing a blend of striking backgrounds and imagery, we ensure each section stands out, effectively capturing attention and driving engagement.</p>
                   <a href="/contact"><button type="button">Hire me</button></a>
               </div>
               <div class="contentservices">
                   <h2>Full Stack Web Apps</h2>
                   <p>I specialize in developing full-stack Web Apps, covering both front-end and back-end project directories. In addition to HTML and CSS, we harness the power of JavaScript, ReactJs, and Firebase to build comprehensive web applications that seamlessly integrate both client and server-side functionalities.</p>
                   <a href="/contact"><button type="button">Hire me</button></a>
               </div>
               <div class="contentservices">
                   <h2>DevOps Services</h2>
                   <p>We provide Azure DevOps services for Continuous Integration, Continuous Deployment, and Infrastructure Automation, ensuring streamlined development and deployment processes on Microsoft Azure cloud platform and AWS platform.</p>
                   <a href="/contact"><button type="button">Hire me</button></a>
               </div>
               <div class="contentservices">
                   <h2>Full Stack Web Apps</h2>
                   <p>I specialize in developing full-stack Web Apps, covering both front-end and back-end project directories. In addition to HTML and CSS, we harness the power of JavaScript, ReactJs, and Firebase to build comprehensive web applications that seamlessly integrate both client and server-side functionalities.</p>
                   <a href="/contact"><button type="button">Hire me</button></a>
               </div>
                <div class="contentservices">
                   <h2>Full Stack Web Apps</h2>
                   <p>I specialize in developing full-stack Web Apps, covering both front-end and back-end project directories. In addition to HTML and CSS, we harness the power of JavaScript, ReactJs, and Firebase to build comprehensive web applications that seamlessly integrate both client and server-side functionalities.</p>
                   <a href="/contact"><button type="button">Hire me</button></a>
               </div>
           </div>
            </div>
        </div>
    );
}
export default Projects;