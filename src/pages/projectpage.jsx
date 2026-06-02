import digiPartner from "../assets/digi-partner.png";
import celoura from "../assets/celoura.png";
import velora from "../assets/velora.png";

const projects = [
  {
    title: "Digi Partner",
    category: "Digital Marketing",
    image: digiPartner,
    link: "https://www.digipartner.co.in/",
    desc: "A performance-focused digital marketing website built to create trust, present services clearly, and convert visitors into quality leads.",
  },
  {
    title: "Celoura",
    category: "Beauty Ecommerce",
    image: celoura,
    link: "https://celouracosmetic.in/",
    desc: "A premium ecommerce experience designed for a beauty brand with elegant product presentation and smooth customer journey.",
  },
  {
    title: "Velora Blinds",
    category: "Interior & Decor",
    image: velora,
    link: "https://velorablinds.au/",
    desc: "A refined interiors website crafted for blinds and curtains with clean visuals, premium spacing, and conversion-focused structure.",
  },
];

export default function ProjectsPage() {
  return (
    <section className="projects-page">
      <div className="projects-page-bg"></div>

      <div className="projects-hero">
        <span>Selected Work</span>
        <h1>
          Crafted Digital
          <br />
          Experiences
        </h1>
        <p>
          A curated portfolio of premium websites built with strategy, detail,
          and modern digital execution.
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <div
            className={`project-page-row ${
              index % 2 !== 0 ? "reverse" : ""
            }`}
            key={index}
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-page-image"
            >
              <img src={project.image} alt={project.title} />
            </a>

            <div className="project-page-content">
              <span>{project.category}</span>
              <h2>{project.title}</h2>
              <p>{project.desc}</p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-page-link"
              >
                View Project
              </a>
            </div>
          </div>
          
        ))}
      </div>
      <div className="project-cta">
  <span>LET'S BUILD YOUR NEXT PROJECT</span>

  <h2>
    Transform Your Idea
    <br />
    <strong>Into a Premium Website.</strong>
  </h2>

  <p>
    Whether you need a Shopify store, WordPress website, frontend experience,
    or complete digital solution — Evara Solution can help you turn your vision
    into a high-performing online presence.
  </p>

  <a href="/#contact" className="project-cta-btn">
    Contact Our Team
  </a>
</div>
    </section>
  );
}