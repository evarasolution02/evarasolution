import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiUser, FiMail, FiEdit3, FiSend, FiLock } from "react-icons/fi";

export default function Contact() {
  return (
    <section className="contact-page" id="contact">

      <div className="contact-bg-glow left"></div>
      <div className="contact-bg-glow right"></div>

      <div className="contact-header">
        <span className="contact-badge">● GET IN TOUCH</span>

        <h1>
          Let’s Build Something <span>Premium</span>
        </h1>

        <p>
          We help brands grow with Shopify, WordPress & modern frontend
          experiences. Share your idea — we will turn it into reality.
        </p>
      </div>

      <div className="contact-card">

        <div className="contact-info">
          <h2>Get in Touch</h2>
          <div className="small-line"></div>

          <p className="intro">
            Have a project in mind or want to work together?
            <br />
            We'd love to hear from you.
          </p>

          <div className="info-list">
            <div className="info-item">
              <div className="icon-con">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4>Our Location</h4>
                <p>Surat, Gujarat, India</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-con">
                <FaEnvelope />
              </div>
              <div>
                <h4>Email Us</h4>
                <p>evarasolution02@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-con">
                <FaPhoneAlt />
              </div>
              <div>
                <h4>Call Us</h4>
                <p>+91 91733 02054</p>
              </div>
            </div>
          </div>

          <div className="follow">
            <p>Follow Us</p>

            <div className="socials">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <div className="input-group">
            <FiUser />
            <input type="text" placeholder="Your Name" />
          </div>

          <div className="input-group">
            <FiMail />
            <input type="email" placeholder="Email Address" />
          </div>

          <div className="input-group textarea">
            <FiEdit3 />
            <textarea placeholder="Tell us about your project..."></textarea>
          </div>

          <button type="submit">
            <FiSend />
            Send Message
          </button>

          <div className="privacy">
            <FiLock />
            <span>We respect your privacy. Your information is safe with us.</span>
          </div>
        </form>

      </div>
    </section>
  );
}