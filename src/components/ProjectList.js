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
            <h3>Machine Learning Research Publication</h3>
            <p>“Three-Dimensional Convolutional Neural Networks and a Cross-Docked Data Set for Structure-Based Drug Design,”
               Journal of Chemical Information and Modeling, 2020</p>
               <Button variant="outline-primary" href="https://pubs.acs.org/doi/10.1021/acs.jcim.0c00411">View Article</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 carousel-image" src={slide2} alt="Second slide" />
          <Carousel.Caption className="carousel-caption">
            <h3>Snake Game with Intelligent Agent</h3>
            <p>Engineered an advanced Snake Game Application utilizing Pygame,
               featuring a sophisticated Intelligent Agent powered by Deep Q-Learning through the PyTorch framework</p>
               <Button variant="outline-primary" href="https://github.com/iansnyder333/ai-game">View Code</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 carousel-image" src={slide3} alt="Third slide" />
          <Carousel.Caption className="carousel-caption">
            <h3>Pittsburgh Bike Rental Data Analysis</h3>
            <p>A comprehensive data analysis on on quarterly bike rental data, demonstrating end-to-end pipeline of data science</p>
            <Button variant="outline-primary" href="https://github.com/iansnyder333/Bike_Analysis">View Code</Button>
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
         <div className="col-md-4 mb-4">
            <Card className="project-card h-100">
              <Card.Header as="h5">Clinical Cancer Genomics Data Analysis</Card.Header>
              <Card.Body>
                <Card.Text>
                  <li>Data analysis to discover any mutations that are associated with treatment response.</li>
                  <li>Raw genomics data is transformed using Python and Pandas.</li>
                  <li>Multiple dataframes using multiple angles of data analysis deployed for optimal conclusion.</li>
                  <li>Analysis findings are displayed using Seaborne for seamless user visability.</li>
                </Card.Text>
              
                  <Badge pill bg="danger" className="me-2">
                    Python
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    Pandas
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    Real World Data Analysis
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    Statistical Analysis
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    Machine Learning
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    Seaborne
                  </Badge>
              </Card.Body>
              <Button variant="outline-primary" href='https://github.com/iansnyder333/IS_CancerProj'>Source Code</Button>
            </Card>
          </div>
          <div className="col-md-4 mb-4">
            <Card className="project-card h-100">
              <Card.Header as="h5">Java Crossword Solver</Card.Header>
              <Card.Body>
                <Card.Text>
                  <li>Java application to read in a crossword text file and attempt to find a valid solution.</li>
                  <li>Uses a dictionary stored as a DLB Trie for efficient memory and performance</li>
                  <li>Solver uses recursion to find solutions</li>
                </Card.Text>
                <Badge pill bg="danger" className="me-2">
                    Java
                  </Badge>
                <Badge pill bg="info" className="me-2">
                    Tries
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    Data Structures
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    Algorithims
                  </Badge>
              </Card.Body>
              <Button variant="outline-primary" href='https://github.com/iansnyder333/CrossWord-Solver'>Source Code</Button>
            </Card>
          </div>
          <div className="col-md-4 mb-4">
            <Card className="project-card h-100">
              <Card.Header as="h5">Java LZW Compression</Card.Header>
              <Card.Body>
                <Card.Text>
                  <li>Application that can compress files using an LZW Compression algorithim.</li>
                  <li>Files are encoded and decoded in an efficient mannor.</li>
                  <li>Supports multiple different file types.</li>
                </Card.Text>
              
                  <Badge pill bg="danger" className="me-2">
                    Java
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    LZW Compression
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    File Encoder
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    File Decoder
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    Data Structures
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    Algorithims
                  </Badge>
              </Card.Body>
              <Button variant="outline-primary" href='https://github.com/iansnyder333/LZW'>Source Code</Button>
            </Card>
          </div>
          <div className="col-md-4 mb-4">
            <Card className="project-card h-100">
              <Card.Header as="h5">Java Network Analyzer</Card.Header>
              <Card.Body>
                <Card.Text>
                  <li>A system application to build, update and analyze a graph representation of a network based on cable types.</li>
                  <li>Supports both directed and undirected graphs with efficient algorithims for each.</li>
                  <li>Project is build from scratch without the help of JCL classes</li>
                  </Card.Text>
              
                  <Badge pill bg="danger" className="me-2">
                    Java
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    Networks
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    Graph Theory
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    Graph algorithims
                  </Badge>
                   <Badge pill bg="info" className="me-2">
                    Data Structures
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    Algorithims
                  </Badge>
              </Card.Body>
              <Button variant="outline-primary" href='https://github.com/iansnyder333/NetworkAnalysis'>Source Code</Button>
            </Card>
          </div>
          <div className="col-md-4 mb-4">
            <Card className="project-card h-100">
              <Card.Header as="h5">Client Car Buying Tool</Card.Header>
              <Card.Body>
                <Card.Text>
                  <li>Basic application to help a user select a car to buy.</li>
                  <li>Using a PQ-based data structure that stores objects according to the
                  relative priorities of two of their attributes, making it efficient to retrieve
                  objects with the minimum value of either attribute.</li>
                  <li>The Data structure is indexable to allow for efficient updates of entered items.</li>
                  <li>The user is able to efficiently retrieve the car with the
                  lowest mileage or lowest price.  These retrievals are possible on the set
                  of all entered cars or on the set of all cars of a specific make and model.</li>
    </Card.Text>
              
                  <Badge pill bg="danger" className="me-2">
                    Java
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    Priority Queue
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    Information retrieval system
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    Data Structures
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    Algorithims
                  </Badge>
              </Card.Body>
              <Button variant="outline-primary" href='#'>Source Code</Button>
            </Card>
          </div>
          <div className="col-md-4 mb-4">
            <Card className="project-card h-100">
              <Card.Header as="h5">Wine Quality Prediction App</Card.Header>
              <Card.Body>
                <Card.Text>
                  <li>Meta analysis on various machine learning models to predict wine quality based on various parameters.</li>
                  <li>Wine database is transformed from csv to pandas dataframe for modeling</li>
                  <li>Various models are trained and evaluating using Scikit-Learn Library</li>
                </Card.Text>
              
                  <Badge pill bg="danger" className="me-2">
                    Python
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    Pandas
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    Scikit-Learn
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    Seaborne
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    Data Analysis
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    Machine Learning
                  </Badge>
              </Card.Body>
              <Button variant="outline-primary" href='https://github.com/iansnyder333/LZW'>Source Code</Button>
            </Card>
          </div>
      </div>
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
