import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import './Contact.css'; // Import a separate CSS file for styling

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_hm54626', 'template_c76zjvd', form.current, '8h7LvdypgsovMOWyP')
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('Form submitted successfully!'); // Show success toast
          form.current.reset(); // Clear form fields
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Failed to submit the form. Please try again.'); // Show error toast
        }
      );
  };

  return (
    <div id="contact">
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <div className="section-header">Contact Us</div>
      <div className="contact-wrapper">
        {/* Left side - Contact Form */}
        <div className="form-horizontal">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" className="form-control" name="user_name" placeholder="Name" required />
            <input type="email" className="form-control" name="user_email" placeholder="Email" required />
            <textarea className="form-control" name="message" placeholder="Message" required></textarea>
            <div className="send-button">
              <button type="submit" className="alt-send-button">
                <span className="send-text">SEND</span>
              </button>
            </div>
          </form>
        </div>

        {/* Right side - Contact Information */}
        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place"> Kolkata, India</span></i></li>
            <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone">+91 9830971684</span></i></li>
            <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:rdsales.kol@gmail.com" title="Send me an email">  rdsales.kol@gmail.com</a></span></i></li>
          </ul>

          {/* Social Media Icons */}
          <ul className="social-media-list">
            <li><a href="#" className="contact-icon"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
            <li><a href="#" className="contact-icon"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
            <li><a href="#" className="contact-icon"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
            <li><a href="#" className="contact-icon"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
          </ul>
        </div>
      </div>
      {/* <div className="copyright">&copy; 2024 by Your Company. All Rights Reserved.</div> */}
    </div>
  );
};

export default Contact;
