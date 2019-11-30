import React from 'react';
// import '../../style/email/Email.css';
import emailjs from 'emailjs-com';

export default function SendEmail() {
  function sendEmail(e) {
    e.preventDefault();
    const mess = document.querySelector('#user_name');
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input
        type="hidden"
        name="contact_number"
        value={(Math.random() * 100000) | 0}
      />
      <label>Name</label>
      <input type="text" id="user_name" name="user_name" />
      <br />
      <br />
      <label>Email</label>
      <input type="email" name="user_email" />
      <br />
      <br />
      <label>Message</label>
      <textarea name="message"></textarea>
      <br />
      <br />
      <input type="submit" value="Send" />
    </form>
  );
}
