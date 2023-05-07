import React, { Component } from "react";
import "./Home.css";
import Card from "react-bootstrap/Card";
import Carousel from 'react-bootstrap/Carousel';

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
          <h3>Software/Data Engineer</h3>
          <p>
            Spring 2023 graduate from the University of Pittsburgh with a 
            Bachelors of Science in Computational Biology and a minor in Applied
            Statistics. Through my studies I have developed a passion for programming
            and data analysis. Upon graduating I aspire to become a Software Engineer or a Data Engineer!
          </p>
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
                <Card.Text>My University studies as an undergraduate has given me extensive exposure to 
                                object-oriented programming in Python and Java; both in algorithms and data structures.
                                Some of my projects include: creating an autocomplete engine based on current user character stream
                                that recommends words based on user history, designing a data crawler to return relevant cars for 
                                sale based on filters specified by the user, creating a network analysis to find optimal paths between access
                                points in a network based on cable type along with adding,updating,and deleting access points from previous 
                                network. All these projects were done from scratch without any JCL classes and are on my github. </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 mb-4">
            <Card className="project-card h-100">
                <Card.Img variant="top" src={otherA} />
              <Card.Header as="h5">Other Developer Tools</Card.Header>
              <Card.Body>
                <Card.Text>In all four years of undergraduate, I have used BASH commands in a UNIX environment to 
                                handle all shell related operations. I have also used Git, Jupyter, and Visual Studio Online to collaborate,
                                share, and deploy my software related applications.
                                In my own personal time I learned how to write HTML, CSS, and Javascript both from 
                                scratch along with utilizing Bootstrap. I have also used Django,REST,and React to create multiple websites including this one 
                                completely independently, developing web applications that feature user profiles with username and passwords with a password recovery system,
                                user blog posts displayed in a feed based on its category with a working comment feature, and several other basic features for a blog style social media 
                                web application.</Card.Text>
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