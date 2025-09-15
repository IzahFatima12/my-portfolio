import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard.js";

import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/gym-homepage.png";
import projImg6 from "../assets/img/HomePage.png";
import projImg7 from "../assets/img/song.png";
import projImg8 from "../assets/img/food.png";
import projImg9 from "../assets/img/food.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Project = () => {
  const projects = [
    {
      title: "food ordering app",
      description: "Design and Development",
      imgUrl: projImg1,
      category: "Apps",
      url: "https://your-demo-link.com"   // 🔗 add your link here
    },
    {
      title: "book reading app",
      description: "Design and Development",
      imgUrl: projImg2,
      category: "Apps",
      url: "https://your-demo-link.com"
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
      title: "song-sync",
      description: "Design ",
      imgUrl: projImg7,
      category: "Graphic Designs",
      url: "https://www.figma.com/proto/iXQFAsds3bjcfj8LXt8IZH/SongSync-App?node-id=1-40&t=AYllQF2blod3rFAt-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"
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
      title: "frizio-softdrinks company",
      description: "Design ",
      imgUrl: projImg9,
      category: "Graphic Designs",
      url: "https://www.figma.com/proto/Zs1CRpYlhXdlVXUTnhAPfe/Frizio?node-id=1-2&t=8k2rjRGj7KCJCPTR-0&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1"
    }
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
