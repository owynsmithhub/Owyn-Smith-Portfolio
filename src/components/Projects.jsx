import { prototypeUrl, campusPrototypeUrl } from '../data/caseStudies.js';
import campusTransitImage from '../assets/projects/campus-transit/exports/transit-screen-1.png';
import h2goImage from '../assets/projects/h2go/exports/h2go-home-final.png';

const projects = [
  {
    visual: 'hydration',
    image: h2goImage,
    imageAlt:
      'H2Go hydration dashboard showing bottle progress, points, and check-in.',
    layout: 'lead',
    type: 'UX/UI case study',
    status: 'Prototype',
    year: '2025',
    title: 'H2Go',
    description:
      'A reminder-to-reward hydration system shaped through peer research, usability testing, and interface iteration.',
    role: 'UI design + prototyping',
    tags: ['Figma', 'User Testing', 'Interaction Design'],
    primaryHref: '#/projects/h2go',
    actions: [
      { label: 'View case study', href: '#/projects/h2go' },
      { label: 'Open prototype', href: prototypeUrl, external: true },
    ],
  },
  {
    visual: 'transit',
    image: campusTransitImage,
    imageAlt:
      'Campus Transit mobile app showing favorite bus routes and arrival times.',
    layout: 'secondary',
    type: 'UX/UI case study',
    status: 'Prototype',
    year: '2025',
    title: 'Campus Transit',
    description:
      'A focused route-planning concept refined around arrival accuracy, capacity, favorites, and fast rider decisions.',
    role: 'UI design + prototyping',
    tags: ['Research', 'Usability Testing', 'Mobile UI'],
    primaryHref: '#/projects/campus-transit',
    actions: [
      { label: 'View case study', href: '#/projects/campus-transit' },
      { label: 'Open prototype', href: campusPrototypeUrl, external: true },
    ],
  },
  // Upcoming project drafts - uncomment when ready to publish:
  // {
  //   visual: 'comics',
  //   layout: 'upcoming',
  //   type: 'Front-end project',
  //   year: 'In progress',
  //   title: 'Comic Book Collection',
  //   description:
  //     'A visual collection interface for browsing, organizing, and displaying a personal comic book library.',
  //   role: 'Front-end design + development',
  //   tags: ['Front-end', 'Collection Design', 'Visual UI'],
  //   status: 'Details coming soon',
  // },
];

function ProjectVisual({ project }) {
  return (
    <div
      className={`project-image-panel visual-${project.visual}`}
      aria-hidden={project.image ? undefined : true}
    >
      {project.image ? (
        <div className="project-phone-crop">
          <img
            className="project-card-image"
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : (
        <>
          <div className="visual-shape visual-shape-one" />
          <div className="visual-shape visual-shape-two" />
        </>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-shell content-section">
        <div className="section-heading projects-heading" data-reveal>
          <div className="section-label">
            <span>01 / Selected Work</span>
            <span>Web / Design / Creative Development</span>
          </div>
          <h2>My work</h2>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article
              className={`project-card project-card-${project.layout}`}
              key={project.title}
              style={{ '--stagger': `${index * 90}ms` }}
              data-reveal
            >
              {project.primaryHref ? (
                <a
                  className="project-visual-link"
                  href={project.primaryHref}
                  aria-label={`View ${project.title} case study`}
                >
                  <ProjectVisual project={project} />
                </a>
              ) : (
                <ProjectVisual project={project} />
              )}
              <div className="project-card-meta">
                <div className="project-meta-left">
                  <span>{project.type}</span>
                  {project.status && (
                    <span className={`status-badge status-${project.status.toLowerCase().replace(/\s+/g, '-')}`}>
                      <span className="status-dot" aria-hidden="true" />
                      {project.status}
                    </span>
                  )}
                </div>
                <span>{project.year}</span>
              </div>
              <div className="project-card-body">
                <h3>
                  {project.primaryHref ? (
                    <a href={project.primaryHref}>{project.title}</a>
                  ) : (
                    project.title
                  )}
                </h3>
                <p>{project.description}</p>
              </div>
              <p className="project-role">
                <span>Role</span>
                {project.role}
              </p>
              <ul className="tag-list" aria-label={`${project.title} tags`}>
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <div className="card-actions">
                {project.actions?.map((action) => (
                  <a
                    href={action.href}
                    key={action.label}
                    target={action.external ? '_blank' : undefined}
                    rel={action.external ? 'noreferrer' : undefined}
                  >
                    {action.label}
                  </a>
                ))}
                {!project.actions?.length && project.status && (
                  <span className="project-status">{project.status}</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
