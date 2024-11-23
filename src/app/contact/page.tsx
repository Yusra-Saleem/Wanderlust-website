import Image from 'next/image'

export default function Contact() {
  return (
    <div>
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <Image
          src="/contact-hero.jpg"
          alt="Contact Us"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="container contact-hero-content">
          <h1 className="contact-hero-title">Contact Us</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <p>We&#39;d love to hear from you! Whether you have a question about our travel packages, need assistance with booking, or want to share your feedback, our team is here to help.</p>
              <h3>Our Office</h3>
              <p>123 Adventure Street</p>
              <p>Traveler&#39;s City, TC 12345</p>
              <p>United States</p>
              <h3>Contact Information</h3>
              <p>Email: info@wanderlustadventures.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <h3>Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
            <div className="contact-form">
              <h3>Send Us a Message</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={4} required></textarea>
                </div>
                <button type="submit" className="btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

