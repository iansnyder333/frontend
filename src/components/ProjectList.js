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
      <h1 className="text-black text-center my-4">Featured</h1>
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

    
    
      <h1 className="text-black text-center my-4">Full Portfolio</h1>
      <div className="row">
        <div className="col-md-4 mb-4">
            <Card className="project-card h-100">
              <Card.Header as="h5">My Portfolio Website</Card.Header>
              <Card.Body>
                <Card.Text>
                  <li>Successfully developed and deployed a comprehensive portfolio website that showcases my technical expertise and creativity.</li>
                  <li>Implemented Django RESTful API for efficient back-end management, ensuring fast, reliable, and scalable web services.</li>
                  <li>Utilized React for front-end development, leveraging its component-based architecture for improved maintainability and an enhanced user experience.</li>
                  <li>Deployed the website on AWS, optimizing cloud-based hosting for superior performance, flexibility, and cost-efficiency.</li>
                  <li>Integrated responsive web design to ensure optimal display and usability across various devices and screen sizes.</li>
                </Card.Text>
              
                  <Badge pill bg="danger" className="me-2">
                    Python
                  </Badge>
                  <Badge pill bg="danger" className="me-2">
                    Javascript
                  </Badge>
                  <Badge pill bg="danger" className="me-2">
                    HTML
                  </Badge>
                  <Badge pill bg="danger" className="me-2">
                    CSS
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    Django
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    REST API
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    React
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    Bootstrap
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    AWS
                  </Badge>
              </Card.Body>
              <Button variant="outline-primary" href='https://iansnyder333.github.io/frontend/'>Source Code</Button>
            </Card>
          </div>
          <div className="col-md-4 mb-4">
            <Card className="project-card h-100">
              <Card.Header as="h5">Snake Game Intelligent Agent</Card.Header>
              <Card.Body>
                <Card.Text>
                  <li>Engineered an advanced Snake Game Application utilizing Pygame, featuring a sophisticated Intelligent Agent powered by Deep Q-Learning through the PyTorch framework. </li>
                  <li>Crafted an engaging and interactive experience for users, offering multiple difficulty levels, AI gameplay demonstrations, and the opportunity to train and visualize their own models, enhancing user engagement and understanding.</li>
                  <li>Seamlessly integrated the application's full suite of features within an intuitive, custom-built GUI, ensuring effortless accessibility and an exceptional user experience for clients</li>                </Card.Text>
              
                  <Badge pill bg="danger" className="me-2">
                    Python
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    PyTorch
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    PyGame
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    GUI
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    Object Oriented Programming
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    Machine Learning
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    Neural Networks
                  </Badge>
              </Card.Body>
              <Button variant="outline-primary" href='https://github.com/iansnyder333/ai-game'>Source Code</Button>
            </Card>
          </div>
          <div className="col-md-4 mb-4">
            <Card className="project-card h-100">
              <Card.Header as="h5">NLP News Classifier</Card.Header>
              <Card.Body>
                <Card.Text>
                  <li>Engineered a News Classification NLP Model, featuring a sophisticated Natural Language Processor powered by BERT through the PyTorch framework. </li>
                  <li>NLP to classify news articles into catagories. Model inputs a news article as raw text and outputs one of the following categories: "business", "entertainment", "sport", "tech", or "politics".</li>
                  <li>Model was trained with 5 EPOCHS using bbc-text csv file from kaggle. Model has 97% accuracy on testing data but is still in development for accuratley classifying new articles.</li>
                                  </Card.Text>
              
                  <Badge pill bg="danger" className="me-2">
                    Python
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    PyTorch
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    NLP
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    BERT Classification
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    Object Oriented Programming
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    Machine Learning
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    Neural Networks
                  </Badge>
              </Card.Body>
              <Button variant="outline-primary" href='https://github.com/iansnyder333/ai-game'>Source Code</Button>
            </Card>
          </div>
          <div className="col-md-4 mb-4">
            <Card className="project-card h-100">
              <Card.Header as="h5">Drug Design Machine Learning Research</Card.Header>
              <Card.Body>
                <Card.Text>
                  <li>Employed Tensorflow and GNINA open-source frameworks to develop advanced deep learning structure-based drug design techniques, resulting in the fine-tuning and optimization of state-of-the-art convolutional neural network models for accurately predicting low RMSD poses.</li>
                  <li>Conducted comprehensive research to validate the superior efficacy of deep learning models by strategically training an ensemble of models, demonstrating a scalable performance boost with up to ~20 models</li>
                </Card.Text>
              
                  <Badge pill bg="danger" className="me-2">
                    Python
                  </Badge>
                  <Badge pill bg="danger" className="me-2">
                    R
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    Tensorflow
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    GNINA
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    Machine Learning
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    Convolutional Neural Network
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    Drug Design
                  </Badge>
              </Card.Body>
              <Button variant="outline-primary" href='https://pubs.acs.org/doi/10.1021/acs.jcim.0c00411'>Publication</Button>
            </Card>
          </div>
            <div className="col-md-4 mb-4">
            <Card className="project-card h-100">
              <Card.Header as="h5">Bike Rental Analysis</Card.Header>
              <Card.Body>
                <Card.Text>
                  <li>Developed a Python Jupyter notebook and a Python script to analyze and visualize historical bike rental data from HealthyRidePGH in 2021.</li>
                  <li>Utilized Python, Pandas, NumPy, Scikit-learn, and Matplotlib to process, analyze, and visualize data for a comprehensive understanding of bike rental trends and challenges.</li>
                  <li>Generated visualizations to showcase the popularity of different rental stations, incorporating filter conditions for tailored analysis.</li>
                  <li>Identified and visualized rebalancing issues through data-driven graphs, highlighting areas for improvement in bike availability management.</li>
                  <li>Applied a variety of clustering algorithms using Scikit-learn to group similar stations together, uncovering patterns and relationships among rental stations.</li>
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
                    Scikit-Learn
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    Statistical Analysis
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    Machine Learning
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    Matplotlib
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    Seaborne
                  </Badge>
              </Card.Body>
              <Button variant="outline-primary" href='https://github.com/iansnyder333/Bike_Analysis'>Source Code</Button>
            </Card>
          </div>
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
              <Card.Header as="h5">Java Autocomplete Engine</Card.Header>
              <Card.Body>
                <Card.Text>
                  <li>An implemented engine to try to guess what word a user wishes to type before they are finished.</li>
                  <li>Utilizes extensive search engines and symbol tables.</li>
                  <li>Custom Trie Data Structure employed to store dictionary with minimal memory while still maintaining fast retrieval.</li>
                  <li>Project is build from scratch without the help of JCL classes</li>
                  </Card.Text>
              
                  <Badge pill bg="danger" className="me-2">
                    Java
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    Search Engine
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    Symbol Table
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    API
                  </Badge>
                   <Badge pill bg="info" className="me-2">
                    Data Structures
                  </Badge>
                  <Badge pill bg="info" className="me-2">
                    Algorithims
                  </Badge>
              </Card.Body>
              <Button variant="outline-primary" href='https://github.com/iansnyder333/Autocompleter'>Source Code</Button>
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
              <Button variant="outline-primary" href='https://github.com/iansnyder333/Cars'>Source Code</Button>
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
