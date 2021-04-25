import React from 'react';
import '../../styles/index.css';

const Projects = () => {
    return (
        <div className="projects-body">
            <br/>
            <br/>
            <div className="intro-projects">
                <div className="form-text project-text">
                    <h2>My Work</h2>
                    <br/>
                    <p>Here's some of the projects that I've been working on whilst training with Futureproof.</p>
                    <br/>
                </div>
                <div className="projects-container">
                    <div className="projects-card">
                        <div className="projects-image">
                            <img src="'../../images/chirper.png" alt=""/>
                        </div>
                        <div className="projects-content">
                            <h2>Chirper</h2>
                            <br/>
                            <p>Chirper is a simple website with a server and client side, which can be used to post comments, GIPs and have conversations about sustainability and the environment.</p>
                            <br/>
                            <a href="https://chirper-uk.netlify.app/">See more...</a>
                            <br/>
                            <br/>
                            <p>Contributors: Ryan Kuppan, Adil Iqbal, Greta Ivan, Aaron Yates</p>
                        </div>
                    </div>
                    <br/>
                    <div className="projects-card">
                        <div className="projects-image">
                            <img src="../../images/eat-sleep-code-repeat.png" alt=""/>
                        </div>
                        <div className="projects-content">
                            <h2>Eat. Sleep. Code. Repeat.</h2>
                            <br/>
                            <p>An app designed to track your daily coding habits as well as promote a healthy lifestyle, using a PosgresSQL database and Docker containers.</p>
                            <br/>
                            <a href="https://drink-sleep-code-repeat.netlify.app/">See more...</a>
                            <br/>
                            <br/>
                            <p>Contributors: Ryan Kuppan, Semhar Tesfu, Pearl Hamilton, James Wheadon, Greta Ivan</p>
                        </div>
                    </div>
                </div>
                <div className="projects-container">
                    <div className="projects-card">
                        <div className="projects-image">
                            <img src="../../images/github-clone.png" alt=""/>
                        </div>
                        <div className="projects-content">
                            <h2>GitHub clone</h2>
                            <br/>
                            <p>GitHub clone using GitHub's API, giving information about the number of repos, stargazers and forks.</p>
                            <br/>
                            <a href="https://github.com/RKuppan97/lap3-coding-challenge">See more...</a>
                            <br/>
                            <br/>
                            <p>Contributors: Ryan Kuppan, Emmanuel Sobamowo, Roselyn Le</p>
                        </div>
                    </div>
                    <div className="projects-card">
                        <div className="projects-image">
                            <img src="https://img.freepik.com/free-vector/coming-soon-message-illuminated-with-light-projector_1284-3622.jpg?size=338&ext=jpg" alt=""/>
                        </div>
                        <div className="projects-content">
                            <h2>Gaming website using React</h2>
                            <br/>
                            <a href="google.com">See more...</a>
                            <br/>
                            <br/>
                            <p>Coming Soon...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects; 