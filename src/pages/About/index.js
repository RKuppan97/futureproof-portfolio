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
                        <p>Below is a list of the skills that I have been learning in the past year.</p>
                        <img src="https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png" alt=""/>
                        <img src="https://pngimg.com/uploads/mysql/mysql_PNG23.png" alt=""/>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png" alt=""/>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt=""/>
                        <img src="https://www.docker.com/sites/default/files/d8/2019-07/vertical-logo-monochromatic.png" alt=""/>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt=""/>
                    </div>
                </div>
                <div className="card">
                    <div className="imagesshow">
                        <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/01/29/12/istock-1135481871.jpg?width=982&height=726&auto=webp&quality=75" alt=""/>
                        <h2>Ambitions</h2>
                    </div>
                    <div className="content">
                        <p>In general, I am a highly curious individual with an open mind when it comes to learning new skills both in my personal and professional life.</p>
                        <br/>
                        <p>My main ambition is to work with a company that aligns with my goals for improving the world around me through business/technology and continous development/learning.</p>
                        <br/>
                        <ul>Some key fields of interest include: </ul>
                        <li>finance/investments/economics</li>
                        <li>science/healthcare</li>
                        <li>renewable energy</li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;