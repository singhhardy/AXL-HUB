import React from 'react';
import './About.css';

function About() {
    return (
        <div>
            <div className='about'>
                <div className="about-img">
                    <img src='about.jpg' />
                </div>
                <div className="about-content">
                    <h1>ABOUT US</h1>
                    <p>At AXL Hub we use cutting edge technology built using Artificial Intelligence and Machine Learning. AXL is all in one console and your own personalized virtual assistant. The console is made in two configurations, Mirrors and Tables. Different accessories will be offered to help transform
                        your house or your office into a smart space</p>
                        <button className='mybtn'>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default About