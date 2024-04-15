import React from 'react';
import './resume.css';

function Resume() {
  return (
    <div className='resume'>
    <div className="container">
        <div className="card-one">
        <div className="profile"></div>
        <div className="contact-box">
          <h2>CONTACT</h2>
          <div className="text">(+92)66773214</div>
          <div className="text">Pakistan</div>
          <div className="text">www.mandankoding.com</div>
          <div className="text">kainatrobi1@gmail.com</div>
        </div>

        <div className="skills">
          <h2>Skills</h2>
            <p>Html</p>
            <p>Css</p>
            <p>Typescript</p>
            <p>Javascript</p>
            <p>React hs</p>
            <p>Node js</p>
            <p>Nest js</p>
            <p>Nest js</p>
            <p>Mongodb</p>
            <p>Sql</p>
            <p>wordpress</p>
           
       
        </div>

        <div className="personal-box">
          <h2>Languages</h2>
          <div>
            <p>English</p>
           </div> 
    <div>
        <p>Urdu</p>
        </div> 
  <div>
      <p>Arabic</p>
  </div> 
        </div>
      </div>

      <div className="card-two">
        <div className="head-title">
          <h1>KAINAT ROBI</h1>
          <h4>Computer System Engineer</h4>
        </div>
        
        <div className="group-2">
          <div className="box">
            <h2>Education</h2>
          </div>
          <div className="desc">
          <ul>
                    <li>
                        <div>
                            Since 2020 
                        </div>
                        <div>
                            BSc in computer systems engineering from UET Peshawar
                        </div>
                    </li>
                </ul>
                  <ul>
                    <li>
                        <div>
                            2018-2020 
                        </div>
                         <div>
                           FSc in pre-engineering from Islamia College peshawar
                         </div>
                    </li>
                  </ul>
                    <ul>
                        <li>
                            <div>
                                2016-2018 
                            </div>
                            <div>
                                 Matric from AIM school and college
                            </div>
                            </li>
                    </ul>
          </div>
        </div>
        
        <div className="group-2">
          <div className="box">
            <h2>Experience</h2>
          </div>
          <div className="desc">
          <ul>
                     <li>
                        <div>Dec 2023- Feb 2024</div>
                        <div>
                           work as intern in ITSKILLXPRESS
                        </div>
                     </li>
                   </ul>
                   <ul>
                     <li>
                        <div>Mar 2024- present</div>
                        <div>
                           work as Frontend intern in Smashcodes
                        </div>
                     </li>
                   </ul>
          </div>
        </div>
        
        <div className="group-4">
          <div className="box">
            <h2>Courses</h2>
          </div>
          <div className="desc">
          <ul>
                     <li>
                        <div>Aug 2023-Oct 2023</div>
                        <div>
                        Certified in mern-stack from pftp

                        </div>
                     </li>
                   </ul>
                   <ul>
                     <li>
                        <div>May 2023-Oct 2023</div>
                        <div>
                        Certified in full-stack web development <br/>from E-hunar
                        </div>
                     </li>
                   </ul>
                   <ul>
                     <li>
                        <div>Oct 2021-Dec 2021</div>
                        <div>
                        Certified in Wordpress development <br/>from Digiskills
                        </div>
                     </li>
                   </ul>
                   <ul>
                     <li>
                        <div>June 2021-Sep 2021</div>
                        <div>
                        Certified in Freelancing from Digiskills
                        </div>
                     </li>
                   </ul>
          </div>
        </div>
        
       
      </div>
    </div>
    </div>
  );
}

export default Resume;
