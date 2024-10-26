import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaMoneyCheckAlt, FaPiggyBank } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMapMarkerAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faTelegram, faInstagram } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Homepage.css';
import 'animate.css';
import heroImage from '../assets/images/hero-image.png';


function Homepage() {
  useEffect(() => {
    // Check if the screen width is greater than 768px
    const isLargeScreen = window.innerWidth > 768;
  
    if (isLargeScreen) {
      const textElements = document.querySelectorAll('.text-animate:not(.about-section .text-animate)');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', entry.target.dataset.animation || 'animate__fadeIn');
            entry.target.style.opacity = '1';
          } else {
            entry.target.classList.remove('animate__animated', entry.target.dataset.animation || 'animate__fadeIn');
            entry.target.style.opacity = '0';
          }
        });
      }, { threshold: 0.1 });
  
      textElements.forEach((element) => observer.observe(element));
  
      return () => observer.disconnect();
    }
  }, []);
  

  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">SMU Credit & Savings</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="#about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section text-center" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="container">
          <h1 className="display-4 text-animate" data-animation="animate__fadeInDown">SMU Employee’s Credit and Saving System</h1>
          <h2 className="lead text-animate" data-animation="animate__fadeIn">Empowering employees to manage their savings and loans efficiently.</h2>
          <Link to="/register" className="btn btn-light btn-lg get-started-btn text-animate" data-animation="animate__fadeInUp">
            <span className="button-text">Get Started</span>
            <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
          </Link>
        </div>
      </header>


{/* About Section */}
      <section id="about" className="about-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 about-text">
              <h2>About Our System</h2>
              <p>Saint Mary's University Employee’s Credit and Saving System is designed to automate and streamline the management of employee financial services. Employees can easily manage their savings, apply for loans, and view their financial history.</p>
              <button className="btn btn-primary learn-more-btn">Learn More</button>
            </div>
            <div className="col-md-6 about-image">
              <img src="credit-saving.jpg" className="img-fluid zoom-effect" alt="Credit and Saving" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="features" className="features-section py-5">
        <div className="container text-center">
          <h2 className="mb-5 text-animate" data-animation="animate__fadeInUp">Why Choose Us?</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="feature-item text-animate" data-animation="animate__fadeInUp">
                <FaUserCircle size={50} className="text-primary mb-3" />
                <h4>Personalized Member Profiles</h4>
                <p>Manage your profile and access your savings and loan details anytime.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-item text-animate" data-animation="animate__fadeInUp">
                <FaMoneyCheckAlt size={50} className="text-primary mb-3" />
                <h4>Comprehensive Credit Management</h4>
                <p>Apply for loans, manage repayments, and track interest easily.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-item text-animate" data-animation="animate__fadeInUp">
                <FaPiggyBank size={50} className="text-primary mb-3" />
                <h4>Secure Savings Management</h4>
                <p>Securely manage your savings with up-to-date account information.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


{/* Contact Us Section */}
      <section id="contact" className="contact-section text-center py-5">
        <div className="container">
          <h2 className="text-animate" data-animation="animate__fadeInUp">Contact Us</h2>
          <p className="text-animate" data-animation="animate__fadeIn">Reach out to us via the following methods:</p>
          <div className="row contact-info justify-content-center">
            <div className="col-md-4">
              <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
              <p><strong>Address:</strong> Mexico, SMU Main Campus, Addis Ababa, Ethiopia</p>
            </div>
            <div className="col-md-4">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
              <p><strong>Email:</strong> <a href="mailto:info@smucreditandsaving.com">info@smucreditandsaving.com</a></p>
            </div>
            <div className="col-md-4">
              <FontAwesomeIcon icon={faPhoneAlt} size="2x" />
              <p><strong>Phone:</strong> <a href="tel:+1234567890">+123 456 7890</a></p>
            </div>
          </div>
          <div className="social-media mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://telegram.me/yourtelegramhandle" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FontAwesomeIcon icon={faTelegram} size="2x" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <p>&copy; 2024 SMU Employee Credit & Savings System. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Homepage;