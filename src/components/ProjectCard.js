import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt={title} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <br />
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: "inline-block",
                            marginTop: "10px",
                            padding: "6px 12px",
                            backgroundColor: "#00b894",   // teal green button
                            color: "#fff",
                            borderRadius: "6px",
                            fontSize: "14px",
                            fontWeight: "bold",
                            textDecoration: "none",
                            transition: "0.3s ease"
                        }}
                        onMouseOver={(e) => (e.target.style.backgroundColor = "#019875")}
                        onMouseOut={(e) => (e.target.style.backgroundColor = "#00b894")}
                    >
                        View Project →
                    </a>
                </div>
            </div>
        </Col>
    );
};
