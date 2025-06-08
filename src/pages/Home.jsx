// pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      {/* Hero Section */}
      <Row className="justify-content-center my-5">
        <Col md={10} className="text-center bg-primary text-white p-5 rounded-3">
          <h1 className="display-4 fw-bold mb-4">Unlock Your Potential</h1>
          <p className="lead mb-5">
            Discover opportunities to learn, grow, and build your future
          </p>
          <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
            <Link to="/opportunities">
              <Button variant="warning" size="lg" className="fw-bold px-4 py-3">
                Explore Opportunities
              </Button>
            </Link>
            <Button variant="light" size="lg" className="fw-bold px-4 py-3">
              Join Community
            </Button>
          </div>
        </Col>
      </Row>

      {/* Features Section */}
      <Row className="my-5">
        <Col className="text-center mb-5">
          <h2 className="display-5 fw-bold">How TeenPath Works</h2>
        </Col>
      </Row>
      <Row className="g-4">
        {[
          { title: 'Discover', desc: 'Find opportunities matched to your interests' },
          { title: 'Learn', desc: 'Develop skills with expert-led workshops' },
          { title: 'Grow', desc: 'Build your portfolio with real-world projects' }
        ].map((item, index) => (
          <Col md={4} key={index}>
            <Card className="h-100 shadow">
              <Card.Body className="text-center p-4">
                <div className="bg-light rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" style={{width: '100px', height: '100px'}}>
                  <span className="text-primary fs-1 fw-bold">{index + 1}</span>
                </div>
                <Card.Title className="fw-bold">{item.title}</Card.Title>
                <Card.Text>{item.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Testimonials */}
      <Row className="my-5 py-5 bg-light rounded-3">
        <Col className="text-center mb-5">
          <h2 className="display-5 fw-bold">Success Stories</h2>
        </Col>
        <Row className="justify-content-center g-4">
          {[
            { name: 'Aisha', role: 'Graphic Design Intern', quote: 'TeenPath helped me land my first internship!' },
            { name: 'Rohan', role: 'App Developer', quote: 'The coding workshops gave me real-world skills' }
          ].map((story, index) => (
            <Col md={6} key={index}>
              <Card className="h-100">
                <Card.Body>
                  <blockquote className="blockquote mb-4">
                    <p className="fs-4 fst-italic">"{story.quote}"</p>
                  </blockquote>
                  <div className="d-flex align-items-center">
                    <div className="bg-light rounded-circle d-flex align-items-center justify-content-center" style={{width: '60px', height: '60px'}}>
                      <span className="text-primary fw-bold">{story.name.charAt(0)}</span>
                    </div>
                    <div className="ms-3">
                      <p className="fw-bold mb-0">{story.name}</p>
                      <p className="text-primary mb-0">{story.role}</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Row>
    </Container>
  );
};

export default Home;