import React from "react";
import "../Styles/contact.css";

const Contact = (props, ref) => {
  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);

    // Accessing individual form fields by name
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    form.current.reset();
  };

  //     emailjs.sendForm('service_mm6wisb', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
  //       .then((result) => {
  //           console.log(result.text);
  //       }, (error) => {
  //           console.log(error.text);
  //       });
  //   };

  return (
    <>
      <div className="contact-header">
        <h1>Contact</h1>
        <p>Feel free to reach out!</p>
      </div>

      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <div className="contact-input">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="contact-input">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="contact-input">
          <label>Subject (Optional)</label>
          <input type="text" placeholder="Subject" name="subject" />
        </div>

        <div className="contact-input">
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </>
  );
};

export default Contact;
