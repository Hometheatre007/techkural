import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Contact.css';

const Contact = () => {
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
                  <p>pugazhenthij283@gmail.com</p>
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
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="john@example.com" required />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="tel" placeholder="+91 000000000" />
                </div>
              </div>
              <div className="form-group">
                <label>Service interested in</label>
                <select className="form-select">
                  <option>Website Design</option>
                  <option>E-Commerce</option>
                  <option>Web Application</option>
                  <option>SEO & Maintenance</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="4" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
