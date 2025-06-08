// pages/Opportunities.js
import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';

const Opportunities = () => {
  const [filter, setFilter] = useState('all');
  
  const categories = [
    'all', 'internships', 'workshops', 'competitions', 'volunteering'
  ];
  
  const opportunities = [
    {
      id: 1,
      title: 'Web Design Internship',
      category: 'internships',
      company: 'TechStart Inc.',
      duration: '2 months',
      deadline: 'Jun 30, 2023'
    },
    {
      id: 2,
      title: 'Digital Marketing Workshop',
      category: 'workshops',
      company: 'Growth Academy',
      duration: '4 weeks',
      deadline: 'Ongoing'
    },
    {
      id: 3,
      title: 'App Development Challenge',
      category: 'competitions',
      company: 'CodeNation',
      duration: '1 month',
      deadline: 'Jul 15, 2023'
    },
    {
      id: 4,
      title: 'Community Outreach Program',
      category: 'volunteering',
      company: 'Helping Hands NGO',
      duration: 'Flexible',
      deadline: 'Rolling'
    }
  ];
  
  const filteredOpportunities = filter === 'all' 
    ? opportunities 
    : opportunities.filter(opp => opp.category === filter);

  return (
    <Container className="py-5">
      <Row>
        <Col>
          <h1 className="display-4 fw-bold mb-4">Explore Opportunities</h1>
        </Col>
      </Row>
      
      {/* Category Filter */}
      <Row className="mb-5">
        <Col>
          <div className="d-flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? 'primary' : 'outline-primary'}
                onClick={() => setFilter(category)}
                className="text-capitalize"
              >
                {category}
              </Button>
            ))}
          </div>
        </Col>
      </Row>
      
      {/* Opportunities Grid */}
      <Row xs={1} md={2} lg={3} className="g-4 mb-5">
        {filteredOpportunities.map((opportunity) => (
          <Col key={opportunity.id}>
            <Card className="h-100 shadow">
              <Card.Body>
                <div className="d-flex justify-content-between mb-3">
                  <div>
                    <Card.Title>{opportunity.title}</Card.Title>
                    <Card.Subtitle className="text-primary">{opportunity.company}</Card.Subtitle>
                  </div>
                  <div className="bg-light rounded-circle d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px'}}>
                    <span className="text-primary fw-bold">{opportunity.company.charAt(0)}</span>
                  </div>
                </div>
                
                <Card.Text>
                  <div className="d-flex justify-content-between py-2 border-bottom">
                    <span>Duration</span>
                    <span className="fw-bold">{opportunity.duration}</span>
                  </div>
                  <div className="d-flex justify-content-between py-2">
                    <span>Apply by</span>
                    <span className="fw-bold">{opportunity.deadline}</span>
                  </div>
                </Card.Text>
                
                <div className="d-flex gap-2">
                  <Button variant="primary" className="flex-grow-1">Apply Now</Button>
                  <Button variant="outline-primary">
                    <i className="bi bi-bookmark"></i>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      
      {/* Newsletter */}
      <Row>
        <Col>
          <div className="bg-primary text-white p-5 rounded-3">
            <Row className="justify-content-center">
              <Col md={8} className="text-center">
                <h2 className="fw-bold mb-4">Never Miss an Opportunity</h2>
                <p className="mb-4">Get curated opportunities delivered to your inbox weekly</p>
                
                <Form>
                  <Row className="g-2">
                    <Col md>
                      <Form.Control 
                        type="email" 
                        placeholder="Enter your email" 
                        size="lg"
                      />
                    </Col>
                    <Col md="auto">
                      <Button variant="warning" size="lg" className="fw-bold">
                        Subscribe
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Opportunities;