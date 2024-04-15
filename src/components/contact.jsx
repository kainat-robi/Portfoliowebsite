import React from "react";
import './style.css'
import Image from '../imges/Frame 404377.png'
import image from './images.png'
import { FaLinkedin, FaWhatsapp, FaTwitter, FaFacebook, FaEnvelope } from 'react-icons/fa';


function Contact(){

    return(
        <div class="contact">
            <img src={Image} alt="bg"/>
            <div className="contactinfo">
            <h1 >Contact Me</h1>

        <div class="row">
            <div class="contact-left">
                <img src={image} alt="img"/>
            </div>
            <div class="contact-right">
                <form>
                    <input type="text" name="Name" placeholder="your name" required /> 
                    <input type="email" name="email" placeholder="your email" required/>
                    <textarea name="message"  placeholder="your message"></textarea>
                    <button type="submit" class="btn btn2">Send message</button>
                </form>
                <div className="icons">
                <a href="https://www.linkedin.com/in/kainat-robi-173b81202/"><FaLinkedin className="icon linkedin" /></a>
                <a href="https://web.whatsapp.com/"><FaWhatsapp className="icon whatsapp" /></a>
                <a href="https://twitter.com "><FaTwitter className="icon twitter" /></a>
                <a href="https://www.facebook.com/"><FaFacebook className="icon facebook" /></a>
                <a href="mailto:kainatrobi01@gmail.com"><FaEnvelope className="icon envelope" /></a>

            </div>
            </div>
        </div>
        
        </div>
    </div>
    );
}
export default Contact;