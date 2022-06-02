import React from 'react'
import "./contact.css";
import { useContext, useRef, useState } from "react";
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'
// import emailjs from "emailjs-com";

export const Contact = () => {
    const formRef = useRef();
    const [onSubmit, setOnSubmit] = useState(false);
    const [nameWasTouched, setNameWasTouched] = useState(false);
    const [subjectWasTouched, setSubjectWasTouched] = useState(false);
    const [emailWasTouched, setEmailWasTouched] = useState(false);
    const [messageWasTouched, setMessageWasTouched] = useState(false);
    const [enteredName, setEnteredName] = useState("");
    const [enteredSubject, setEnteredSubject] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredMessage, setEnteredMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setOnSubmit(true);
        console.log("Submitted");

    };

    const nameChangeHandler = (e) => {
        setEnteredName(e.target.value)

    };

    const subjectChangeHandler = (e) => {
        setEnteredSubject(e.target.value)
    };
    const emailChangeHandler = (e) => {
        setEnteredEmail(e.target.value)
    };
    const messageChangeHandler = (e) => {
        setEnteredMessage(e.target.value)
    };
    // const nameLostFocusHandler = () => {
    //     if (enteredName == "") {
    //         setNameWasTouched(true);
    //     }
    // }
    // const subjectLostFocusHandler = () => {
    //     if (enteredName == "") {
    //         setSubjectWasTouched(true);
    //     }
    // }
    // const emailLostFocusHandler = () => {
    //     if (enteredName == "") {
    //         setEmailWasTouched(true);
    //     }
    // }
    // const messageLostFocusHandler = () => {
    //     if (enteredName == "") {
    //         setMessageWasTouched(true);
    //     }
    // }



    let content = <div className="c">
        <div className="c-bg-1"></div>
        <div className="c-bg-2"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Let's discuss your project</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={Phone} alt="" className="c-icon" />
                        +91 8954859939
                    </div>
                    <div className="c-info-item">
                        <img className="c-icon" src={Email} alt="" />
                        abhi.barbiyal@cogoport.com
                    </div>
                    <div className="c-info-item">
                        <img className="c-icon" src={Address} alt="" />
                        Akruti Trade Center, MIDC, Mumbai
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                    <b>What’s your story?</b> Get in touch. Always available for
                    freelancing if the right project comes along. me.
                </p>
                <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                    {/* {(enteredName === "" && nameWasTouched) && <p className="c-desc-ui">Please Enter Your Name</p>} */}
                    <input type="text" placeholder="Name" name="user_name" value={enteredName} onChange={nameChangeHandler} />
                    {/* {(enteredSubject === "" && subjectWasTouched) && <p className="c-desc-ui">Please Enter Subject</p>} */}

                    <input type="text" placeholder="Subject" name="user_subject" value={enteredSubject} onChange={subjectChangeHandler} />
                    {/* {(enteredEmail === "" && emailWasTouched) && <p className="c-desc-ui">Please Enter Your Email</p>} */}

                    <input type="text" placeholder="Email" name="user_email" value={enteredEmail} onChange={emailChangeHandler} />
                    {/* {(enteredMessage === "" && messageWasTouched) && <p className="c-desc-ui">Please Enter Message</p>} */}

                    <textarea rows="5" placeholder="Message" name="message" value={enteredMessage} onChange={messageChangeHandler} />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    </div>

    if (onSubmit) {
        content = <h1 className="c-thankyou">Thank you for contacting</h1>
    }

    return (
        <div>{content}</div>
    )
}
export default Contact