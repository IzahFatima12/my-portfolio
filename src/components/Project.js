import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard.js";

import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/g.png";
import projImg6 from "../assets/img/HomePage.png";
import projImg7 from "../assets/img/frizio.png";
import projImg8 from "../assets/img/f.png";
import projImg9 from "../assets/img/M.png";
import projImg10 from "../assets/img/b.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Project = () => {
  const projects = [
    {
      title: "food ordering app",
      description: "Design and Development",
      imgUrl: projImg1,
      category: "Apps",
      url: "https://your-https://www.figma.com/design/BggaIbjcuu8viM2ZEn2RJa/LattoFatto-app?node-id=0-1&p=f&t=LVUx4vKuN4xchnXa-0emo-link.com"   // 🔗 add your link here
    },
    {
      title: "brew-hub coffe app",
      description: "Design and Development",
      imgUrl: projImg2,
      category: "Apps",
      url: "https://github.com/IzahFatima12/brew-hub"
    },
    {
      title: "Glow-up Website",
      description: "Design and Development",
      imgUrl: projImg4,
      category: "Websites",
      url: "https://your-demo-link.com"
    },
    {
      title: "gym-fitness homepage",
      description: "Design ",
      imgUrl: projImg5,
      category: "Graphic Designs",
      url: "https://your-demo-link.com"
    },
    {
      title: "RedConnect-Blood Dnation Website",
      description: "Design ",
      imgUrl: projImg10,
      category: "Graphic Designs",
      url: "https://www.figma.com/design/sbmoTCyqfy2obCT0C7gHyL/Untitled?node-id=0-1&p=f&t=b32DBzUwohD8wulP-0"
    },

    {
      title: "Marvel Cinematic Universe-Website",
      description: "Design ",
      imgUrl: projImg9,
      category: "Graphic Designs",
      url: "https://www.figma.com/design/QPG7yz07zQtPc8zBdxkWcR/OTT-sTREAMING-wEBSITE?node-id=0-1&p=f&t=yvpZb20SsXuY8jN1-0"
    },
    {
      title: "Royal Ruffles clothing shop",
      description: "Design ",
      imgUrl: projImg6,
      category: "Graphic Designs",
      url: "https://www.figma.com/proto/U9rFe3c3wybaPBMqM9JTNN/Royal-Ruffles-clothing-shop?node-id=1-2&t=AQnfMJKILo1HRa0p-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1"
    },
    {
      title: "food-odering app",
      description: "Design ",
      imgUrl: projImg8,
      category: "Graphic Designs",
      url: "https://www.figma.com/proto/BggaIbjcuu8viM2ZEn2RJa/LattoFatto-app?node-id=1-2&p=f&t=60sMtgf52ZeZ9YFB-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2"
    },
    {
      title: "Frizio-Softdrink Company Website",
      description: "Design ",
      imgUrl: projImg7,
      category: "Graphic Designs",
      url: "https://www.figma.com/design/Zs1CRpYlhXdlVXUTnhAPfe/Frizio?node-id=1-2&t=Ti5k5VIctysU3bhR-0"
    },




  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  <h2>Projects</h2>
                  <p>
                    Here are some of the projects I've worked on, showcasing my skills in website and app development, as well as graphic design.
                  </p>
                </div>
              }
            </TrackVisibility>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Apps</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Graphic Designs</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Websites</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects
                      .filter((project) => project.category === "Apps")
                      .map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects
                      .filter((project) => project.category === "Graphic Designs")
                      .map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
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
