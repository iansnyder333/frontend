import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import "./ProjectList.css";
import "./Carousel.css";
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
function ProjectsList() {
  const [projects, setProjects] = useState([]);
   const [activeIndex, setActiveIndex] = useState(0);
  const slide1 = require('./static/lake.jpg');
  const slide2 = require('./static/sunset.jpg');
  const slide3 = require('./static/landscape.jpg');


  useEffect(() => {
    fetchProjects();
  }, []);

  function fetchProjects() {
    axios.get(`/api/projects/`)
      .then(response => setProjects(response.data))
      .catch(error => console.error(error));
  }
  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  // Render the list of projects


  return (
    <div className="container">
      <h1 className="text-black text-uppercase text-center my-4">Featured Projects</h1>
        <Carousel activeIndex={activeIndex} onSelect={handleSelect} indicators={false} fade>
        <Carousel.Item>
          <img className="d-block w-100 carousel-image" src={slide1} alt="First slide" />
          <Carousel.Caption className="carousel-caption">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 carousel-image" src={slide2} alt="Second slide" />
          <Carousel.Caption className="carousel-caption">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 carousel-image" src={slide3} alt="Third slide" />
          <Carousel.Caption className="carousel-caption">
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <ol className="carousel-indicators">
        <li
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className={activeIndex === 0 ? "active" : ""}
          onClick={() => handleSelect(0)}
        ></li>
        <li
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          className={activeIndex === 1 ? "active" : ""}
          onClick={() => handleSelect(1)}
        ></li>
        <li
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          className={activeIndex === 2 ? "active" : ""}
          onClick={() => handleSelect(2)}
        ></li>
      </ol>

    
    
      <h1 className="text-black text-uppercase text-center my-4">Full Portfolio</h1>
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-md-4 mb-4">
            <Card className="project-card h-100">
              <Card.Header as="h5">{project.title}</Card.Header>
              <Card.Body>
                <Card.Text>{project.description}</Card.Text>
                {project.skills.split(",").map((skill, index) => (
                  <Badge key={index} pill bg="info" className="me-2">
                    {skill.trim()}
                  </Badge>
                ))}
              </Card.Body>
              <Button variant="outline-primary" href={project.source}>Source Code</Button>
            </Card>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default ProjectsList;
