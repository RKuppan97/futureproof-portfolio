import React from 'react';
import '../../styles/index.css'

const About = () => {
    return (
        <div>
            {/* <div id="intro">Hi, I'm Ryan</div>
            <br/>
            <div>
                <img className="about-picture" src="https://media-exp1.licdn.com/dms/image/C4D03AQFVZMxTq6Yh-A/profile-displayphoto-shrink_200_200/0/1534192212251?e=1622073600&v=beta&t=8fX4DvWAavpih6xVO2rHfSNlzXfFMvjVN_FuCSyAUb0" alt="linkedin"/>
            </div> */}
            <div className="container">
                <div className="card">
                    <div className="imagesshow">
                        <img src="https://www.homecareinsight.co.uk/wp-content/uploads/2020/07/connected-technology.jpg" alt=""/>
                        <h2>Background</h2>
                    </div>
                    <div className="content">
                        <p> I am a recent graduate from a Master’s programme in Chemical Engineering from the University of Birmingham.  </p>
                        <br/>
                        <p> After being introduced to MATLAB programming at university, I become obsessed with trying to learn more. I quickly enrolled in online courses, using Udemy and YouTube, and soon fell in love with the Python language as a hobby.  </p>
                        <br/>
                        <p> Whilst working in a small entrepreneurial company, I quickly developed proficiency with MySQL databases and was able to contribute to several data analysis reports for the business.  </p>
                        <br/>
                        <p> However, I felt like I wanted to learn more! </p>
                        <br/>
                        <p> Consequently, I joined Futureproof’s 13-week coding bootcamp, training to become a full-stack Software Developer. </p>
                    </div>
                </div>
                <div className="card">
                    <div className="imagesshow">
                        <img src="https://elearningindustry.com/wp-content/uploads/2019/10/7-Benefits-That-Highlight-The-Importance-Of-Soft-Skills-In-The-Workplace.png" alt=""/>
                        <h2>Skills</h2>
                    </div>
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio cum voluptates quos magnam ad dolores harum voluptatibus et a illum.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="imagesshow">
                        <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/01/29/12/istock-1135481871.jpg?width=982&height=726&auto=webp&quality=75" alt=""/>
                        <h2>Ambitions</h2>
                    </div>
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio cum voluptates quos magnam ad dolores harum voluptatibus et a illum.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;