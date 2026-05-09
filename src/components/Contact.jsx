import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Web3Forms Access Key
    formData.append("access_key", "b90f0969-3271-4ffa-b7ea-ce505fd41a51");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully! 🧡");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setResult("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2 className="section-title">Ready to build something great?</h2>
            <p className="text-secondary mb-4">Let's discuss how we can help your business grow with a powerful digital presence.</p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon"><Phone /></div>
                <div>
                  <h4>WhatsApp / Call</h4>
                  <p>+91 8608442802</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><Mail /></div>
                <div>
                  <h4>Email Us</h4>
                  <p>shateen.co@gmail.com</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><MapPin /></div>
                <div>
                  <h4>Location</h4>
                  <p>Chidambaram Cuddalore 6008001<br />Tamil Nadu</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" placeholder="John Doe" required />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="email" placeholder="john@example.com" required />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="tel" name="phone" placeholder="+91 000000000" />
                </div>
              </div>
              <div className="form-group">
                <label>Service interested in</label>
                <select name="service" className="form-select">
                  <option>Website Design</option>
                  <option>E-Commerce</option>
                  <option>Web Application</option>
                  <option>SEO & Maintenance</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" rows="4" placeholder="Tell us about your project..." required></textarea>
              </div>
              <button type="submit" disabled={isSubmitting} className="btn btn-primary submit-btn">
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {result && (
                <p className={`form-status ${result.includes('Success') ? 'status-success' : 'status-error'}`}>
                  {result}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
