import React from "react";
import "./Home.css";
import Card from "react-bootstrap/Card";
import Carousel from 'react-bootstrap/Carousel';
import resume from "./Files/IanSnyderResumecopy.pdf";
import Button from 'react-bootstrap/Button';
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
        <h3 className="text-black text-uppercase my-4">Technical Skills</h3>
        <div className="row">
            <div className="col-md-4 mb-4">
            <Card className="project-card h-100">
                <Card.Img variant="top" src={dataA} />
              <Card.Header as="h5">Data Analysis</Card.Header>
              <Card.Body>
                <Card.Text>I have extensive experience in working with Graph databases like Neo4j with cypher, along with relational databases such as SQL for 
                                both data retrieval and data analysis. I am extremely familiar with using packages such as 
                                sqllite3 and sqlalchemy to implement queries in Python, along with analyzing large data with Python packages such as 
                                Pandas, numPy and R packages such as ggplot2. I also have significant exposure to using both machine learning 
                                and deep learning for data analysis using Scikit-learn, PyTorch, Tensorflow and GNINA. 
                                My minor in Applied Statistics has given me ample knowledge in high level statistics, including 
                                linear regression, categorical data analysis, nonparametric statistics, and applied sampling. I 
                                have experience using all of these tools using R, Python, Minitab, and Microsoft Excel.</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 mb-4">
            <Card className="project-card h-100">
                <Card.Img variant="top" src={softA} />
              <Card.Header as="h5">Software Development</Card.Header>
              <Card.Body>
                <Card.Text>My University studies have given me extensive exposure to the end to end software development process.
                   Many of my assigned projects were open ended, requiring me to analyze and determine the correct architecture for
                    development. I can then confidently program a solution using Python, Java, C++, or Javascript depending on the nature
                     of the problem. Since Java was the first language I learned, I naturally solve problems in an object-oriented
                      environment, and understand the importance of developing scalable and reusable code. In my high level CS course
                       projects, it was very often for no test cases or files to be provided, which required me to learn how to develop
                        adequate testing before deploying my programs. Many of these projects are available in the portfolio section 
                        of my website, which I am consistently updating as I continue progressing as a software developer! 
                                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 mb-4">
            <Card className="project-card h-100">
                <Card.Img variant="top" src={otherA} />
              <Card.Header as="h5">Other Developer Tools</Card.Header>
              <Card.Body>
                <Card.Text>Throughout my studies, I have learned many different tools and frameworks to improve upon my skills.
                   I have always developed in a Unix environment, and have experience with shell scripting using Bash.
                    I use tools such as Git, Jupyter Notebooks, and VScode to aid in my deployment and collaboration.
                     As someone who was always interested in web development, I have taken it upon myself to learn Django 
                     for backend development, and React front end. I have learned to implement both together using Restful
                      apis to create scalable and high performance websites such as this one. I have also used AWS and Docker 
                      to help me develop and deploy applications in an efficient and highly controllable manner. I greatly enjoy 
                      styling websites using Javascript, HTML, CSS, and bootstrap libraries to create visually appealing web pages 
                      and am constantly keeping up to date with new technologies to learn that can help me as a developer.</Card.Text>
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
          alt="Third slide"
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