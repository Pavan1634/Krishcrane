import React from "react";
import "./Contact.css";
import TitleDark from "../Title/TitleDark";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4461b2fe-1549-45d0-a0ad-5ad2cd970446");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact-bg">
      <TitleDark subTitle="Contact Us" title="Get in Touch" />
      <div className="contact">
        <div className="contact-col">
          <h3>Send us a message</h3>
          <p>
            Feel free to reach out through our contact form or find our contact
            information below. Your inquiries, project requirements, and
            feedback are valuable to us as we strive to deliver top-quality
            crane solutions and exceptional service.
          </p>
          <ul>
            <li>Email: sales@krishcranes.com</li>
            <li>Phone: +91 95748 79646</li>
            <li>
              Plot No. A1/419/1, G.I.D.C. Estate, Vitthal Udhyognagar, <br />
              Anand, Gujarat, India.
            </li>
          </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Name</label>
            <input type="text" name="name" placeholder="Enter your name" />
            <label>Contact</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
            />
            <label>Message</label>
            <textarea
              name="message"
              rows="6"
              placeholder="Write your message here"
              required
            ></textarea>
            <button type="submit" className="btn">
              Send
            </button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
