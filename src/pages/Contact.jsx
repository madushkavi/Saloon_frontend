import React from "react";
import contact from "../assets/contact.jpg";
//import ContactSMS from "./components/ContactSMS";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${contact})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name"></label>
          <input name="name" placeholder="Enter full name"  type="text" />
          <label htmlFor="email"></label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message"></label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button onClick="{<ContactSMS/>}">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
