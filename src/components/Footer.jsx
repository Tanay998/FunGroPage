// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-auto py-5">
      <Container>
        <Row>
          <Col md={3}>
            <div className="d-flex align-items-center mb-3">
              <div className="bg-light rounded-circle d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}}>
                <span className="text-dark fw-bold">TP</span>
              </div>
              <span className="ms-2 h5 mb-0">TeenPath</span>
            </div>
            <p className="text-white-50">
              Empowering teens to build skills and discover opportunities
            </p>
          </Col>
          
          <Col md={3}>
            <h5 className="mb-3">Explore</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/" className="text-white-50">Home</Link></li>
              <li className="mb-2"><Link to="/opportunities" className="text-white-50">Opportunities</Link></li>
              <li className="mb-2"><Link to="/success-stories" className="text-white-50">Success Stories</Link></li>
              <li className="mb-2"><a href="#" className="text-white-50">Blog</a></li>
            </ul>
          </Col>
          
          <Col md={3}>
            <h5 className="mb-3">Support</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white-50">FAQ</a></li>
              <li className="mb-2"><a href="#" className="text-white-50">Contact Us</a></li>
              <li className="mb-2"><a href="#" className="text-white-50">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="text-white-50">Terms of Service</a></li>
            </ul>
          </Col>
          
          <Col md={3}>
            <h5 className="mb-3">Connect</h5>
            <div className="d-flex gap-3 mb-3">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a key={social} href="#" className="text-white-50 fs-5">
                  <i className={`bi bi-${social}`}></i>
                </a>
              ))}
            </div>
            <p className="text-white-50 mb-1">contact@teenpath.com</p>
            <p className="text-white-50">+1 (234) 567-8910</p>
          </Col>
        </Row>
        
        <Row className="mt-5 pt-3 border-top border-secondary">
          <Col className="text-center text-white-50">
            <p>&copy; {new Date().getFullYear()} TeenPath. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;