import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTwitter, FaGithub, FaRegEnvelope,FaNodeJs,FaBootstrap,FaReact,FaGithubSquare} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Ian Snyder
            </p>
          </Col>
          <Col md={6} className="text-md-right">
            <a href="mailto: idsnyder136@gmail.com" className="text-white mr-3">
              Contact Me
            </a>
            <a
              href="https://github.com/iansnyder333"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mr-2"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/iansnydes?s=11&t=nH0dMGEkXPcP6bshx_BZ7w"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mr-2"
            >
              <FaTwitter />
            </a>
            <a
              href="mailto: idsnyder136@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaRegEnvelope />
            </a>
          </Col>
        </Row>
        <Row>
            <Col md={6} className="text-md-left">
                <a 
                href='https://react.dev'
                target="_blank"
                rel="noopener noreferrer"
                className="text-white">
                    <FaReact />
                </a>
                <a 
                href='https://nodejs.org/en'
                target="_blank"
                rel="noopener noreferrer"
                className="text-white">
                    <FaNodeJs />
                </a>
                <a 
                href='https://getbootstrap.com'
                target="_blank"
                rel="noopener noreferrer"
                className="text-white">
                    <FaBootstrap />
                </a>
                <a 
                href='https://github.com'
                target="_blank"
                rel="noopener noreferrer"
                className="text-white">
                    <FaGithubSquare />
                </a>
                
                

            </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
