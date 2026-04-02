import { useState } from "react";
import "../css/contact.css";

const Contact = () => {
const initialState = {
  name: "",
  email: "",
  message: ""
};

const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // teach this first
    alert("Message sent!");

     setFormData(initialState);
  };

  return (
    <section className="contact">

      <h1 className="section-title">Contact Us</h1>

      <div className="contact-container">

        <form className="contact-form" onSubmit={handleSubmit}>

          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Message</label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>

        </form>

      </div>

    </section>
  );
};

export default Contact;
