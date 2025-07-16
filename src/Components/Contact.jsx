import React from "react";
import emailjs from "@emailjs/browser";
import "../Styles/contact.css";

const Contact = () => {
  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID, // Use environment variable
        process.env.REACT_APP_EMAIL_TEMPLATE_ID, // Use environment variable
        form.current, // Form reference
        process.env.REACT_APP_EMAIL_PUBLIC_KEY // Use environment variable
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          alert("Your message has been sent successfully!");
        },
        (error) => {
          console.error("Failed to send message:", error.text);
          alert("Failed to send message. Please try again later.");
        }
      );

    // Reset form fields
    form.current.reset();
  };

  return (
    <>
      <div className="contact-header">
        <h1>CONTACT</h1>
        <p>If you&rsquo;re working on something exciting and need a developer, have a question about my work, or just want to connect and talk tech (or life), I’d love to hear from you. Don’t hesitate to drop a message!</p>

      </div>

      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <div className="contact-input">
          <label>Name *</label>
          <input
            type="text"
            name="from_name"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="contact-input">
          <label>Email *</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="contact-input">
          <label>Subject</label>
          <input type="text" placeholder="Subject" name="subject" />
        </div>

        <div className="contact-input">
          <label>Message *</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>

        <div className="contact-button">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </>
  );
};

export default Contact;
