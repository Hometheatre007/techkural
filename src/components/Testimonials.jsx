import React from 'react';
import { Star } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      name: "Karthik R.",
      business: "Aaranya Silks",
      city: "T. Nagar, Chennai",
      text: "TechKural transformed our online boutique. The attention to detail and understanding of our heritage brand aesthetic was spot on. Sales have doubled since the launch.",
      rating: 5
    },
    {
      name: "Priya S.",
      business: "Madras Cloud Kitchen",
      city: "Velachery, Chennai",
      text: "We needed a fast, reliable ordering system. The web app they built is incredibly smooth. The team's communication throughout the process was highly professional.",
      rating: 5
    },
    {
      name: "Dr. Venkatesh",
      business: "Aura Dental Care",
      city: "Adyar, Chennai",
      text: "Our old website was slow and outdated. TechKural gave us a modern, SEO-optimized site. We are now ranking on the first page for local searches.",
      rating: 5
    }
  ];

  return (
    <section className="section-padding testimonials-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Client Stories</h2>
          <p className="text-secondary">What our partners in Chennai and beyond say about us.</p>
        </div>
        
        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <div key={index} className="testimonial-card">
              <div className="stars">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="star-icon" fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-text">"{review.text}"</p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>{review.name}</h4>
                  <p>{review.business} • {review.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
