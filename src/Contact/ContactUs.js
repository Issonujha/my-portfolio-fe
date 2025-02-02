import React, { useState } from 'react';
import './ContactUs.css';

function ContactUs({ isDarkMode }) {
    const [name, setName] = useState('');
    const [response, setResponse] = useState({});
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sending, setSending] = useState(false);

    const sendEmail = async () => {
        setSending(true);
        const data = {
            to: "sjha9563@gmail.com",
            subject: "Form Web Portal: Contact Message",
            body: `<p>This mail is send from: ${name}</p>
                <p>His email to response the feedback : ${email}</p>
                <p>Message : ${message}</p>
            </> `
        };
        try {
            const res = await fetch("https://api.sonujha.in/mail/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const result = await res.text();
            setResponse(result);
        } catch (error) {
            console.error("Error:", error);
        }
        console.log(response)
        setSending(false);
    }

    return (
        <>
            <h1 className={`heading ${isDarkMode ? 'dark-mode' : ''}`}>Contact Us</h1>
            <div className={`inner-container ${isDarkMode ? 'dark-mode' : ''}`}>
                <div className={`tile1 ${isDarkMode ? 'dark-mode' : ''}`}>
                    <div className={`tile1-heading ${isDarkMode ? 'dark-mode' : ''}`}>Get in touch</div>
                    <form action="#" method="post">
                        <div className="form-row">
                            <input
                                type="text"
                                id="name"
                                className="form-field"
                                placeholder="Enter your name"
                                required
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-row">
                            <input
                                type="email"
                                id="email"
                                className="form-field"
                                placeholder="Enter your email"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-row">
                            <textarea
                                id="message"
                                className="form-field"
                                placeholder="Go ahead we are listening..."
                                required
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="form-row">
                            <input
                                type="button"
                                id="submitForm"
                                className="form-field btn"
                                onClick={sendEmail}
                                value="Submit"
                                disabled={sending}
                            />
                        </div>
                    </form>
                    <div id="response"></div>
                </div>
                <div className="tile2" style={{ margin: '30px' }}>
                    <div className="tile2-image">
                        <img src="https://media.licdn.com/dms/image/v2/D4D03AQF01zztSQcV-A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1688377578139?e=1744243200&v=beta&t=JemEpDQQ42k70PxSGIJp5YnNddm4QUOoSP8RpDQVbo4" style={{ borderRadius: '10px', width: '30%' }} alt="Profile" />
                    </div>
                    <div>
                        <div className="form-row">
                            <svg className={isDarkMode ? 'dark-mode' : ''} xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512">
                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path>
                            </svg>
                            <span>Sector 59, Noida</span>
                        </div>
                        <div className="form-row">
                            <svg className={isDarkMode ? 'dark-mode' : ''} xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path>
                            </svg>
                            <span>+91 754697XXXX</span>
                        </div>
                        <div className="form-row">
                            <i className="fas fa-envelope mr-3"></i>
                            <span>sjha9563@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactUs;