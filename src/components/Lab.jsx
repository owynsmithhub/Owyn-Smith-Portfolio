const experiments = [
  {
    title: 'Ripple System',
    description: 'Layered pointer ripples and soft spatial feedback for calm interface moments.',
  },
  {
    title: 'Cursor Heat Signature',
    description: 'A visual trail concept that turns movement into a fading atmospheric map.',
  },
  {
    title: 'Font Cycling Name Animation',
    description: 'A restrained type animation exploring rhythm, identity, and editorial texture.',
  },
  {
    title: 'Flashlight Scavenger Hunt',
    description: 'A playful hidden-object interaction for a future portfolio experiment.',
    status: 'Planned',
  },
];

export default function Lab() {
  return (
    <section className="section-shell content-section" id="lab">
      <div className="section-heading">
        <p className="eyebrow">Experiments</p>
        <h2>Lab</h2>
      </div>
      <div className="lab-grid">
        {experiments.map((experiment) => (
          <article className="lab-card" key={experiment.title}>
            <div className="lab-orbit" aria-hidden="true" />
            <div>
              <div className="lab-title-row">
                <h3>{experiment.title}</h3>
                {experiment.status ? <span>{experiment.status}</span> : null}
              </div>
              <p>{experiment.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
