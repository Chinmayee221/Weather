import React from 'react';
import division2Image from '../assets/Source/1.png';

import division3Image from '../assets/Source/2.jpeg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function About() {
    const containerStyle = {
        backgroundColor: '#F7E6C4',
        display: 'flex',
        justifyContent: 'space-around',

    };

    const iconContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        textAlign:'center',
    };

    const iconStyle = {
        fontSize: '25px',
        marginRight: '8px',
        
    };

    return (
        <>
            <div className="background" style={containerStyle}>
                <div className="container4">
                    <h1>Weather Today</h1>
                    <p>Here is the team, representing you the weather forecast "Weather Today".</p>
                </div>

                <div className="image">
                    <img src={division2Image} alt="Division 2 Image" />
                    <h2>Developer</h2>
                    <p>Chinmayee Sahoo</p>
                    <div style={iconContainerStyle}>
                        <a href="https://github.com/Chinmayee221" target="_blank" rel="noopener noreferrer">
                            <FaGithub style={iconStyle} />
                        </a>
                        <a href="https://www.linkedin.com/in/chinmayee-sahoo-028b4125a" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin style={iconStyle} />
                        </a>
                    </div>
                </div>

                <div className="image">
                    <img src={division3Image} alt="Division 2 Image" />
                    <h2>Developer</h2>
                    <p>Purnima Sahoo</p>
                    <div style={iconContainerStyle}>
                        <a href="https://github.com/Chinmayee221" target="_blank" rel="noopener noreferrer">
                            <FaGithub style={iconStyle} />
                        </a>
                        <a href="https://www.linkedin.com/in/chinmayee-sahoo-028b4125a" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin style={iconStyle} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default About;
