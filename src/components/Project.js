import { Container,Row, Col,Tab,Nav  } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard.js";

import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/gym-homepage.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';



export const Project = ( )=>
{
    const projects =[

    {
        title: "food ordering app",
        description: "Design and Development",
        imgUrl: projImg1,
        category:"Apps"
    },
    
    {
        title: "book reding app",
        description: "Design and Development",
        imgUrl: projImg2,
        category: "Apps"
    },
    {
        title: "Glow-up Website",
        description: "Design and Development",
        imgUrl: projImg4,
        category: "Websites"
    },
    {
        title: "gym-fitness homepage",
        description: "Design ",
        imgUrl: projImg5,
        category: "Graphic Designs"
    },
    
    
    
    
   
    ];

return (
    <section className="project" id ="projects">
        <Container>
            <Row>
                
                <Col>
                <TrackVisibility>
    {({isVisible}) =>
        <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
            <h2>Projects</h2>
            <p>
            "Here are some of the projects I've worked on, showcasing my skills in website and app development, as well as graphic design. These projects demonstrate my ability to create dynamic and responsive applications, efficient user interfaces using React, and visually appealing graphic designs."
            </p>
        </div>
    }
</TrackVisibility>

  <Tab.Container id= "projects-tabs" defaultActiveKey = "first">
          <Nav variant="pills" className="nav-pills nb 5 justify-content-center align-item-center" id = "pills-tab">
            <Nav.Item>
              <Nav.Link eventKey="first">Apps</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">graphic designs</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">websites</Nav.Link>
            </Nav.Item>
          </Nav>
       <Tab.Content>
         <Tab.Pane eventKey = "first">
            <Row>
            {projects
        .filter((project) => project.category === "Apps")
        .map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
            </Row>
         </Tab.Pane>
         <Tab.Pane  eventKey = "second">
         <Row>
         {projects
        .filter((project) => project.category === "Graphic Designs")
        .map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
            </Row>
         </Tab.Pane>
         <Tab.Pane  eventKey="third" >
         <Row>
         {projects
        .filter((project) => project.category === "Websites")
        .map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      
            </Row>
         </Tab.Pane>

       </Tab.Content>
       
    </Tab.Container>
 
                </Col>
            </Row>
        </Container>
      

    </section>

)



    
}