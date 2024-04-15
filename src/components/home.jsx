import React from "react";
import Image from "../imges/Frame 404377.png"
import './style.css'
import { FiCode, FiMonitor, FiLayout } from 'react-icons/fi'; 
import image from '../imges/Capture-removebg-preview 2.png'

function Home(){

    return(
        <div className="home">
           <img src={Image} alt="bg" className="image"/>
            <div className="header"> 
            <div className="herosection">
                <h3>HELLO I'M A </h3><br/>
                <h1>WEB DEVELOPER & <br/>DEVOPS ENGINEER</h1>
                <p>I am kainat robi a professional web developer <br/>& devops engineer</p>
                <button type="submit"><a href="/contact">Hire me</a></button>

            </div>
                <div className="heroimage">
                </div>     
            </div>
           
            <div className="row">
                <div className="left">
                   <img src={image} alt="img"/>
                </div>
                <div className="right">
                    <h1>About Me</h1>
                    <p>Hello I am kainat robi a full stack web developer and devops engineer. </p>
                    <div className="atag">
                       <a href="/about"><p>View More</p></a>
                     </div>
                </div>
            </div>



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
             
           </div>
           <div className="atag">
                       <a href="/about"><p>View More</p></a>
                     </div>
            </div>
            <div className="servicessec">
            <h3>Services I </h3>
            <h1>Offered</h1>
            <p>Responsive Websites & Web Apps, and Full Stack Web Apps Development.</p>
            <ul>
                <li>Custom Web Development ( HTML, CSS, JS ReactJs, Firebase)</li>
                <li>Full Stack Web Apps Development (Mern, Mean)</li>
                <li>Backend web Development (Nodejs, Nestjs, Django)</li>
            </ul>
            <div class="services-list">
               <div class="contentservices">
               <FiCode size={70} className="icon code"/> {/* Icon */}
                   <h2>Custom Web App</h2>
                   <p>My emphasis lies in crafting a contemporary, adaptable, and secure web application that is user-friendly and works seamlessly across various platforms. This ensures it can effectively handle surges in demand and navigate intricate scenarios.</p>

                   <a href="/contact"><button type="button">Hire me</button></a>
                </div>
               <div class="contentservices">
               <FiLayout size={70} className="icon layout"/> {/* Icon */}
                   <h2>Landing Pages</h2>
                  <p>We intricately create compelling landing pages, employing an array of striking backgrounds and imagery to entice users into taking desired actions. Each section is meticulously crafted to stand out, ensuring maximum attention and engagement.</p>                  
                    <a href="/contact"><button type="button">Hire me</button></a>
               </div>
               <div class="contentservices">
               <FiMonitor size={70} className="icon monitor"/> {/* Icon */}
                   <h2>Full Stack Web Apps</h2>
                   <p>I specialize in developing full-stack Web Apps, covering both front-end and back-end project directories. In addition to HTML and CSS, we harness the power of JavaScript, ReactJs, and Firebase to build web applications that integrate both client and server-side functionalities.</p>
                   <a href="/contact"><button type="button">Hire me</button></a>
               </div>

               
           </div>
           <div className="atag">
            <a href="/services"><p>View More</p></a>
            </div>
        </div>
     </div>
            

       
    );
}

export default Home;