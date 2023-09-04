import React from "react";
import "./Home.css";
import Card from "react-bootstrap/Card";
import Carousel from 'react-bootstrap/Carousel';
import resume from "./Files/IanSnyderResumecopy.pdf";
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

function Home(){
    const headshot = require('./static/Snyder_Ian-42431CC.jpg'); 
    const family = require('./static/IMG_4828.jpeg');
    const dataA = require('./static/db1.jpeg');
    const softA = require('./static/web1.png');
    const otherA = require('./static/dj.jpeg');
    const cats = require('./static/cats.jpg');
    const Bday = require('./static/MandyBday.jpg');
    const Fball = require('./static/PittFball.jpg');
    


    return(
        <div className="home-container">
      <h1 className="text-center my-4">About Me</h1>
      <div className="about-me">
        <div className="about-me-image-container">
          <img src={headshot} alt="Your Name" className="about-me-image" />
        </div>
        <div className="about-me-content">
          <h2>Ian Snyder</h2>
          <h4>Versatile Machine Learning Engineer committed to providing robust autonomous solutions.</h4>
          <p>
            Blending my passions for natural science and computer science growing up, I found my calling in the field of Computational Biology. As a Spring 2023 graduate from the University of Pittsburgh, I specialized in this field, with a minor in Applied Statistics.
            
          </p>
          <p>
            My undergraduate studies led me to discover how machine learning, especially neural networks, dominates modern bioinformatics. Traditional methods often falter when dealing with the complex and vast datasets in this field.
            During undergraduate research in drug design with UPMC, I quickly realized how investing in deep learning can save hundreds of millions in downstream costs. This eye-opening experience along with my ability to be a key contributor in meaningful research projects shaped and sparked my genuine passion for data science and deep learning, and motivated my minor in applied statistics.
          </p>
          <p>
             Post-graduation, I've expanded my understanding through Stanford University's Machine Learning Specialization and DeepLearning AI's Deep Learning Specialization. While still considering higher degrees, I am fully equipped and thrilled to start my career.
            I'm now eager to take the next step, joining a team that shares my vision for leveraging data to drive innovative solutions. With my unique blend of scientific curiosity and technical expertise, I look forward to providing robust, autonomous, and data-driven contributions to real-world challenges.

          </p>
           
          <Button variant="outline-primary" href={resume} download="IanSnyderResumecopy.pdf">Download My Resume</Button>
        </div>
      </div>
      <div>
        <h3 className="text-black text-uppercase my-4">Technical Competencies</h3>
        <div className="row">
            <div className="col-md-4 mb-4">
            <Card className="project-card h-100">
                <Card.Img variant="top" src={dataA} />
              <Card.Header as="h5">Database/Cloud</Card.Header>
              <Card.Body>
                <Card.Text>
                  <Button variant="info" type='null'>
                  Relational Databases <Badge bg="secondary">2 Years</Badge>
                </Button>{' '}
                  <ul>
                    <li>SQL</li>
                    <li>MySQL</li>
                    <li>SQLite</li>
                  </ul>
                  <Button variant="info" type='null'>
                  Graph Databases <Badge bg="secondary">2 Years</Badge>
                </Button>{' '}
                  <ul>
                    <li>Neo4j</li>
                    <li>Cypher</li>
                  </ul>
                  <Button variant="info" type='null'>
                  AWS <Badge bg="secondary">2 Years</Badge>
                </Button>{' '}
                  <ul>
                    <li>EC2</li>
                    <li>Elastic Beanstalk</li>
                    <li>Accidental $50,000 charges</li>
                  </ul>
                  <Button variant="primary" type='null'>
                  Python <Badge bg="secondary">6 Years</Badge>
                </Button>{' '}
                  <ul>
                    <li>sqllite3</li>
                    <li>sqlalchemy</li>
                    <li>Pandas</li>
                    <li>NumPy</li>
                    <li>Matplotlib</li>
                    <li>Scikit-learn</li>
                    <li>Transformers</li>
                  </ul>
                  <Button variant="success" type='null'>
                  R <Badge bg="secondary">3 Years</Badge>
                </Button>{' '}
                  <ul>
                    <li>R-studio</li>
                    <li>Cran</li>
                    <li>sqldf</li>
                    <li>ggplot2</li>
                  </ul>
                  </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 mb-4">
            <Card className="project-card h-100">
                <Card.Img variant="top" src={softA} />
              <Card.Header as="h5">Programming skills</Card.Header>
              <Card.Body>
                <Card.Text>
                  <Button variant="primary" type='null'>
                  Python <Badge bg="secondary">6 Years</Badge>
                </Button>{' '}
                  <ul>
                    <li>Data Science</li>
                    <li>Data Analysis</li>
                    <li>Machine Learning</li>
                    <li>Deep Learning</li>
                    <li>Web Development</li>
                  </ul>
                  <Button variant="primary" type='null'>
                  Java <Badge bg="secondary">4 Years</Badge>
                </Button>{' '}
                  <ul>
                    <li>Object Oriented Programming</li>
                    <li>Algorithm Development</li>
                    <li>Data Structures</li>
                  </ul>
                  <Button variant="success" type='null'>
                  R <Badge bg="secondary">3 Years</Badge>
                </Button>{' '}
                  <ul>
                    <li>Statistical Analysis</li>
                    <li>Unstructured Data</li>
                    <li>Data Visualization</li>
                  </ul>
                  <Button variant="success" type='null'>
                  Shell Scripting <Badge bg="secondary">3 Years</Badge>
                </Button>{' '}
                  <ul> 
                    <li>Unix Environment</li>
                    <li>Bash</li>
          
                  </ul>
                  
                  <Button variant="warning" type='null'>
                  C++ <Badge bg="secondary">1 Year</Badge>
                </Button>{' '}
                  <ul>
                    <li>Object Oriented Programming</li>
                    <li>Game Development</li>
                    
                  </ul>
                  
                  <Button variant="warning" type='null'>
                  JavaScript <Badge bg="secondary">1 Year</Badge>
                </Button>{' '}
                  <ul>
                    <li>Web Development</li>
                    <li>React</li>
                    <li>Node.js</li>
                  </ul>
                  
                  
                  
                  
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 mb-4">
            <Card className="project-card h-100">
                <Card.Img variant="top" src={otherA} />
              <Card.Header as="h5">Technologies</Card.Header>
              <Card.Body>
                <Card.Text>
                  <Button variant="primary" type='null'>
                  Machine Learning <Badge bg="secondary">5 Years</Badge>
                </Button>{' '}
                  <ul>
                    <li>Pytorch</li>
                    <li>Tensorflow</li>
                    <li>Scikit-learn</li>
                    <li>Transformers</li>
                    <li>Accelerate</li>
                    <li>Huggingface</li>
                    <li>PEFT</li>
                    <li>PySpark</li>
                  </ul>
                  <Button variant="primary" type='null'>
                  Web Development <Badge bg="secondary">4 Years</Badge>
                </Button>{' '}
                  <ul>
                    <li>Django</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>RESTful</li>
                    <li>Bootstrap</li>
                    <li>HTML</li>
                    <li>CSS</li>
                  </ul>
                  <Button variant="danger" type='null'>
                  Enviroments <Badge bg="secondary">4 Years</Badge>
                </Button>{' '}
                  <ul>
                    <li>VSCode</li>
                    <li>Jupyter Notebooks</li>
                    <li>Google Collab</li>
                    <li>Keras</li>
                    <li>Huggingface</li>
                  </ul>
                  <Button variant="danger" type='null'>
                  Version Control <Badge bg="secondary">4 Years</Badge>
                </Button>{' '}
                  <ul>
                    <li>Git</li>
                    <li>Gitkraken</li>
                    <li>Gitlens</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        </div>
        <div>
            <h3 className="text-black text-center my-4">Outside of work</h3>
        <div className="row">
          <div className="col-md-6 mb-6">
        <Carousel slide={false}  indicators={false}>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={cats}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={Bday}
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={Fball}
          alt="Third slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={family}
          alt="Fourth slide"
        />

        
      </Carousel.Item>
    </Carousel>
    </div>
    <div className="col-md-6 mb-6 styled-div">
      <p>
         Outside of work, there are many things I enjoy! I love to exercise and 
                        have been bodybuilding as a hobby for over 7 years. While bodybuilding does 
                        require a strict diet, I still love to go out to new restaurants and experience 
                        dining with my friends and family. I also love to travel, and have been to many different
                        countries and experienced many different cultures! I love animals, and 
                        in my spare time, I love going to places like the zoo with my girlfriend, and going on a 
                        real safari to experience real wildlife is definitely on my bucket list! I also have three cats! Nora, Lilly, and Fergus who are the 
                        most spoiled cats ever! My family and I are big football fans, and we love to go to watch our teams play; my teams are the Philadelphia Eagles and of course the Pitt Panthers!
                        In general, 
                        I love to try new things and always like to keep an optimistic mindset. I strongly value 
                        keeping positive relationships with people outside of work, along with maintaining a positive 
                        standing with prior employers and colleagues. 
      </p>
    </div>
    </div>
    </div>
    </div>

    );


}
export default Home;