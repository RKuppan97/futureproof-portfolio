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
                        I am a budding software engineer with a strong fascination with technology and business.
                    </em>
                    <br/>
                    <br/>
                    <em>
                        Welcome to my portfolio!
                    </em>
                </div>
                <div className="welcome-container">
                    <div className="welcome-top">
                        <img className="image__img" src="./../images/ldn.png" alt=""/>
                        <div className="image__overlay image__overlay--blur">
                            <div className="image__title"></div>
                            <p className="image__description">
                                I am based in London and I love the city! <br/><br/>
                                This image also shows my drive and entrepreneurial spirit as it was one of the many designs I made using photoshop to sell on t-shirts and mugs.
                            </p>
                        </div>
                    </div>
                    <div className="welcome-middle">
                        <img src="'../../images/IMG_ryan.png" alt=""/>
                        <div className="image__overlay image__overlay--blur second-overlay">
                            {/* <div className="image__title"></div> */}
                            <p className="image__description image__desc__two">
                                I am a confident and adaptable engineer, who is currently training at a 13-week training bootcamp with Futureproof to learn more relevant technological skills for the every-changing world of business!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Welcome; 