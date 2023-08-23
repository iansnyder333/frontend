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
          <h4>Problem-focused thinker committed to providing robust autonomous solutions.</h4>
          <p>
            I am a Spring 2023 graduate from the University of Pittsburgh  where I got a bachelor of science in Computational Biology
             and a minor in Applied Statistics. Since High School I have developed a passion for natural 
             sciences but really found my methods of problem solving coincided extremely well with programming.
            
          </p>
          <p>
            I decided to study Computational Biology as a means to pursue both but quickly realized I loved developing programs end to end, along with using computers as a means to draw meaningful conclusions from otherwise useless data. The datasets we deal with in bioinformatics are almost always exceptionally large and extremely unreadable without the aid of computers, 
            specifically, machine learning.
            I quickly found this out when I was doing research in drug design with UPMC where everything our team did was really centered around machine learning. The need to get good at machine learning helped guide me to a minor in applied statistics which has greatly improved my ability to deal with data analysis and employ machine learning. 
            Through my studies I found my passion in Deep Learning and the power of neural networks, and have spent the last several months working on projects and earning certifications to expand my understanding beyond my degree.
          </p>
          <p>
            Following my completion of Stanford University`s three course Machine Learning Specialization, along with DeepLearning AI`s five course Deep Learning Specialization, I believe I am fully equipped to begin helping my clients plan, design, engineer, and test robust autonomous solutions to get ahead and stay ahead of the rapidly developing field.
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