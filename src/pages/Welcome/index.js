import React from 'react';
import '../../styles/index.css';

const Welcome = () => {
    return (
        <>
            <div className="home-background">
                <div className="intro-ryan">
                    Hi, I'm Ryan
                </div>
                <div className="intro-desc">
                    <em>
                        Welcome to my things website and that
                    </em>
                </div>
                <div className="welcome-container">
                    <div className="welcome-top">
                        <img className="image__img" src="./../images/ldn.png" alt=""/>
                        <div className="image__overlay image__overlay--blur">
                            <div className="image__title">bricks</div>
                            <p className="image__description">
                                I am a brick
                            </p>
                        </div>
                    </div>
                    <div className="welcome-middle">
                        <img src="'../../images/IMG_ryan.png" alt=""/>
                        <div className="image__overlay image__overlay--blur second-overlay">
                            <div className="image__title">bricks</div>
                            <p className="image__description">
                                I am a brick
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Welcome; 