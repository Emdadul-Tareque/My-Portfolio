import emailjs from "emailjs-com";
import React from 'react';
import{ init } from 'emailjs-com';
import Header from "../HomePage/Header/Header";
init("user_ANY1NIPBrTuy2PzGSKEfC");

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmail', 'portfolio', e.target, 'user_ANY1NIPBrTuy2PzGSKEfC')
        .then((result) => {
            console.log(result.text);
            window.alert("Email successfully sent, As soon as possible i will reply");
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <div className="section">
            <Header></Header>
            <div className="container">
                <h1 className="text-center">Contact with Me</h1>
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}