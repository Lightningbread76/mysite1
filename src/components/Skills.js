import React from "react";
import Card from "react-bootstrap/Card";
import Skillcard from './Skillcard';
import './Cards.css';
const Skills = () => {
  return (
    <div className = 'cards'>
        <Card className="category-title">
              <Card.Body>
                {/* Frontend */}
                <Card.Title className="card-title">Programming Languages</Card.Title>
                <hr />
                <Card.Text className="card-text">
                <Skillcard
                  src = 'images/skills/java.svg'
                  text = "Java"
                  path = "https://www.djangoproject.com/"
                  />
                  <Skillcard
                  src = 'images/skills/python.svg'
                  text = "Python"
                  path = "https://www.djangoproject.com/"
                  />
                  <Skillcard
                  src = 'images/skills/R.png'
                  text = "R"
                  path = "https://www.djangoproject.com/"
                  />
                  <Skillcard
                  src = 'images/skills/typescript.svg'
                  text = "Typescript"
                  path = "https://www.djangoproject.com/"
                  />
                  <Skillcard
                  src = 'images/skills/javascript.svg'
                  text = "Javascript"
                  path = "https://www.djangoproject.com/"
                  />
                  </Card.Text>
              </Card.Body>
            </Card>
        <Card className="category-title">
              <Card.Body>
                {/* Frontend */}
                <Card.Title className="card-title">Frontend</Card.Title>
                <hr />
                <Card.Text className="card-text">
                
                  <Skillcard
                  src = 'images/skills/html-5.svg'
                  text = "HTML5"
                  path = "https://www.djangoproject.com/"
                  />
                  <Skillcard
                  src = 'images/skills/css3.svg'
                  text = "CSS3"
                  path = "https://www.djangoproject.com/"
                  />
                  <Skillcard
                  src = 'images/skills/react.svg'
                  text = "React JS"
                  path = "https://www.djangoproject.com/"
                  />
                  <Skillcard
                  src = 'images/skills/material-ui-1.svg'
                  text = "Material-UI"
                  path = "https://www.djangoproject.com/"
                  />
                  <Skillcard
                  src = 'images/skills/bootstrap-4.svg'
                  text = "Bootstrap"
                  path = "https://www.djangoproject.com/"
                  />
                  
                  </Card.Text>
              </Card.Body>
            </Card>
            <Card className="category-title">
              <Card.Body>
                {/* Frontend */}
                <Card.Title className="card-title">Backend</Card.Title>
                <hr />
                <Card.Text className="card-text">
                <Skillcard
                  src = 'images/skills/nodejs.svg'
                  text = "Node JS"
                  path = "https://www.djangoproject.com/"
                  />
                  <Skillcard
                  src = 'images/skills/Django.svg'
                  text = "Django"
                  path = "https://www.djangoproject.com/"
                  />
                  <Skillcard
                  src = 'images/skills/Springboot.png'
                  text = "Springboot"
                  path = "https://www.djangoproject.com/"
                  />
                  </Card.Text>
              </Card.Body>
            </Card>
            <Card className="category-title">
              <Card.Body>
                {/* Frontend */}
                <Card.Title className="card-title">Databases</Card.Title>
                <hr />
                <Card.Text className="card-text">
                <Skillcard
                  src = 'images/skills/mongodb.svg'
                  text = "Mongo DB"
                  path = "https://www.djangoproject.com/"
                  />
                  <Skillcard
                  src = 'images/skills/postgresql.svg'
                  text = "Postgresql"
                  path = "https://www.djangoproject.com/"
                  />
                  <Skillcard
                  src = 'images/skills/firebasefull.png'
                  text = "Firebase"
                  path = "https://www.djangoproject.com/"
                  />
                  </Card.Text>
              </Card.Body>
            </Card>
            <Card className="category-title">
              <Card.Body>
                {/* Frontend */}
                <Card.Title className="card-title">Hosting Platforms</Card.Title>
                <hr />
                <Card.Text className="card-text">
                <Skillcard
                  src = 'images/skills/heroku.svg'
                  text = "Heroku"
                  path = "https://www.djangoproject.com/"
                  />
                  <Skillcard
                  src = 'images/skills/github.svg'
                  text = "Github Pages"
                  path = "https://www.djangoproject.com/"
                  />
                  </Card.Text>
              </Card.Body>
            </Card>
    </div>
    
  );
};

export default Skills;