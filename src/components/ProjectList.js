import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import "./ProjectList.css";
import Button from 'react-bootstrap/Button';
function ProjectsList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  function fetchProjects() {
    axios.get(`/api/projects/`)
      .then(response => setProjects(response.data))
      .catch(error => console.error(error));
  }

  // Render the list of projects
const colors = ["blue", "green", "orange", "red"];

  return (
    <div className="container">
      <h1 className="text-black text-uppercase text-center my-4">Projects</h1>
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
