import React from "react";
import "./contact.css";
import callDarkIcon from "../../assets/call-dark.png";
import callLightIcon from "../../assets/call-light.png";
import emailDarkIcon from "../../assets/mail-dark.png";
import emailLightIcon from "../../assets/mail-light.png";
import locationDarkIcon from "../../assets/location-dark.png";
import locationLightkIcon from "../../assets/location-light.png";
import { useTheme } from "../../common/useTheme";

const Contact = () => {
  const { theme } = useTheme();
  const callIcon = theme === "light" ? callLightIcon : callDarkIcon;
  const mailIcon = theme === "light" ? emailLightIcon : emailDarkIcon;
  const locIcon = theme === "light" ? locationLightkIcon : locationDarkIcon;

  return (
    <section id="contact" className="Contact_container">
      <h1 className="sectionTitle">Contact</h1>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on you can
            contact any time
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mailIcon} alt="" /> <p> seblewongelrcd@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img className="call" src={callIcon} alt="" />{" "}
              <p>+251913903529</p>
            </div>
            <div className="contact-detail">
              <img src={locIcon} alt="" /> <p>Addis Ababa, Ethiopia</p>
            </div>
          </div>
        </div>
       
        <form action="" className="contac-right">
          {/* <div className="formGroup"> */}
            <label htmlFor="" >
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              required
            />
          {/* </div> */}
          {/* <div className="formGroup"> */}
            <label htmlFor="" >
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          {/* </div> */}
          {/* <div className="formGroup"> */}
            <label htmlFor="message" >
              Write your Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder=" Enter your message"
              required
            ></textarea>
          {/* </div> */}
          <input className="hover btn" type="submit" value="Submit" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
