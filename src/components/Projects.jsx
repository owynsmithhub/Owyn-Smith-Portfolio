const projects = [
  {
    code: 'OVJS-001',
    title: 'Underwater Collection',
    description:
      'An atmospheric collection-based website exploring visual storytelling, interaction, and digital presentation.',
    tags: ['Front-end', 'Visual Design', 'Interaction'],
    projectHref: '#',
    githubHref: '#',
  },
  {
    code: 'OVJS-002',
    title: 'Straight Out the Kiln',
    description:
      'A branded landing page concept focused on layout, identity, and responsive presentation.',
    tags: ['Branding', 'Web Design', 'Responsive UI'],
    projectHref: '#',
    githubHref: '#',
  },
  {
    code: 'OVJS-003',
    title: 'Portfolio Website',
    description:
      'A personal portfolio system built around motion, atmosphere, and a flexible project/lab structure.',
    tags: ['React', 'Creative Coding', 'Portfolio'],
    projectHref: '#',
    githubHref: '#',
  },
];

export default function Projects() {
  return (
    <section className="section-shell content-section projects-section" id="projects">
      <div className="section-heading">
        <div className="section-label">
          <span>02 / Projects</span>
          <span>Gallery / Case Study Wall</span>
        </div>
        <h2>Projects</h2>
      </div>
      <div className="card-grid project-grid">
        {projects.map((project, index) => (
          <article
            className="project-card"
            key={project.title}
            style={{ '--stagger': `${index * 90}ms` }}
          >
            <div className="project-image-panel" aria-hidden="true">
              <span>{project.code}</span>
              <div />
            </div>
            <div className="project-card-body">
              <p className="card-code">{project.code}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <ul className="tag-list" aria-label={`${project.title} tags`}>
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <div className="card-actions">
              <a href={project.projectHref}>View Project</a>
              <a href={project.githubHref}>GitHub</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
