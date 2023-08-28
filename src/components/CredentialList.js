import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";
import "./ProjectList.css";
import Button from 'react-bootstrap/Button';


function CredentialList(){
    const MLC = require('./static/MLC.png');
    const DLC = require('./static/DLC.png');
    const Diploma = require('./static/Diploma.png');
    return(
        
        <Container>
            <h3 className="text-black text-uppercase my-4">Education</h3>
            <Row>
                <Col sm={8}><Card className="project-card h-100">
                    <Card.Img variant="top" src={Diploma} />
                

              <Card.Body>
                        <Card.Title>Bachelor of Science, Computational Biology, University of Pittsburgh, April 2023</Card.Title>

                
              </Card.Body>

            </Card></Col>
            </Row>
            <h3 className="text-black text-uppercase my-4">Certifications</h3>
            <Row>
                <Col>
                <Card className="project-card h-100">
                    <Card.Img variant="top" src={MLC} />
                
              <Card.Header as="h5">
                            <Button variant="outline-primary" href='https://www.coursera.org/account/accomplishments/specialization/7MH939EVGC4Z'>Verify</Button>
</Card.Header>

              <Card.Body>
                        <Card.Title>Machine Learning Specialization, Stanford University, July 2023</Card.Title>

                
              </Card.Body>

            </Card>
                </Col>
                <Col>
                <Card className="project-card h-100">
                    <Card.Img variant="top" src={DLC} />
                
              <Card.Header as="h5">            <Button variant="outline-primary" href='https://www.coursera.org/account/accomplishments/specialization/K4MN22KHLSXB'>Verify</Button>
</Card.Header>

              <Card.Body>
                        <Card.Title>Deep Learning Specialization, DeepLearning.AI, July 2023</Card.Title>

              </Card.Body>

            </Card>
                </Col>
            </Row>
            
            
        </Container>
        
    );
}
export default CredentialList;