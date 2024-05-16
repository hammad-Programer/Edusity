import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"
import white_arrow from "../../assets/white-arrow.png"
const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9a1612e1-33fb-4557-8720-73bbf2c137dd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email send Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send Us Message <img src={msg_icon} alt="" /></h3>
        <p>
          Feel free to reach out through contact from or find our contact
          information below. Your feedback questions and suggestions are
          important to us we strive to provide exceptional services to our
          university cummunity.
        </p>
        <ul>
            <li> <img src={mail_icon} alt="" />Contact@GreatStack.dev</li>
            <li> <img src={phone_icon} alt="" />+123-5443-567</li>
            <li> <img src={location_icon} alt="" />Ghor rehman boys hostel near university of wah</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name="name" placeholder="Enter Your Name " required />
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder="Enter Your Phone Number" required/>
            <label>Write Your Message</label>
            <textarea name="message" rows="6" placeholder="Enter Your Message" required></textarea>
            <button type="submit" className="btn dark-btn">Submit <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
