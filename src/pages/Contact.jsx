import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import contact from "../assets/contact.jpg";
import "../styles/Contact.css";



const Contact = () =>{
  const form = useRef();
  const sendEmail = (e) => {
    
    emailjs.sendForm('service_etg6jmg', 'template_gs2d3c8', form.current, 'SulkjltfmH5Vp4tIM')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${contact})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" ref={form} onSubmit={sendEmail}>
          <label htmlFor="name"></label>
          <input
            name="name"
            placeholder="Enter full name"
            type="text"
            required
          />
          <label htmlFor="email"></label>
          <input
            name="email"
            placeholder="Enter email..."
            type="email"
            required
          />
          <label htmlFor="message"></label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );

}
export default Contact;
