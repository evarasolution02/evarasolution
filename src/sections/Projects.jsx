import digiPartner from "../assets/digi-partner.png";
import celoura from "../assets/celoura.png";
import velora from "../assets/velora.png";
import { Link } from "react-router-dom";

function Projects() {
  const projects = [
    {
      title: "Digi Partner",
      category: "Digital Marketing",
      image: digiPartner,
      link: "https://www.digipartner.co.in/",
      desc: "A modern digital marketing website designed to build trust, showcase services, and convert visitors into qualified business leads.",
    },
    {
      title: "Celoura",
      category: "Ecommerce",
      image: celoura,
      link: "https://celouracosmetic.in/",
      desc: "A premium beauty ecommerce experience focused on elegant product presentation, smooth shopping flow, and brand credibility.",
    },
    {
      title: "Velora Blinds",
      category: "Blinds & Curtains",
      image: velora,
      link: "https://velorablinds.au/",
      desc: "A clean interior-focused website crafted for premium blinds and curtains with strong visuals and a conversion-friendly layout.",
    },
  ];

  return (
    <section className="luxury-projects" id="work">
      <div className="luxury-bg"></div>

      <div className="project-heading">
        <span>SELECTED WORK</span>
        <h2>Featured Projects</h2>
      </div>

      <div className="projects-showcase">
        {projects.map((project, index) => (
          <div key={index} className={`project-row ${index % 2 === 0 ? "left" : "right"}`}>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card">
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
            </a>

            <div className="project-info">
              <span>{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-view-link">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="view-projects-wrapper">
        <Link to="/projects" className="luxury-btn">
          <span>View All Projects</span>
        </Link>
      </div>
    </section>
  );
}

export default Projects;