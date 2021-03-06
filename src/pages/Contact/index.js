import React from 'react';
import emailjs from "emailjs-com";
import '../../styles/index.css';

const Contact = () => {
    
    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_en75l99', 'template_a6hja9d', e.target, 'user_nX5XYN6ZvmO3qWaCMXj8O')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <div className="contact-main-container">
            <div className="container contact-container-two">
                <div className="form-text">
                    <h2>Get in touch!</h2>
                    <br/>
                    <p>Please feel free to get in touch about ways to improve my projects and any other suggestions below.</p>
                    <br/>
                </div>
                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">

                        <div className="form-parameters">
                            <div className="col-8 form-group mx-auto">
                                <input type="text" className="form-control" placeholder="Name" name="name"/>
                            </div>

                            <div className="col-8 form-group pt-2 mx-auto">
                                <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                            </div>

                            <div className="col-8 form-group pt-2 mx-auto">
                                <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                            </div>
                        </div>

                            <div className="message">
                                <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                            </div>

                        <div className="col-8 button-contact">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Contact; 