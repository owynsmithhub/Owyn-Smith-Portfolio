const experiments = [
  {
    code: 'OVJS-LAB-001',
    title: 'Ripple System',
    description: 'Layered pointer ripples and soft spatial feedback for calm interface moments.',
  },
  {
    code: 'OVJS-LAB-002',
    title: 'Cursor Heat Signature',
    description: 'A visual trail concept that turns movement into a fading atmospheric map.',
  },
  {
    code: 'OVJS-LAB-003',
    title: 'Font Cycling Name Animation',
    description: 'A restrained type animation exploring rhythm, identity, and editorial texture.',
  },
  {
    code: 'OVJS-LAB-004',
    title: 'Flashlight Scavenger Hunt',
    description: 'A playful hidden-object interaction for a future portfolio experiment.',
    status: 'Planned',
  },
];

export default function Lab() {
  return (
    <section className="section-shell content-section lab-section" id="lab">
      <div className="lab-panel">
        <div className="section-heading">
          <div className="section-label">
            <span>03 / Lab</span>
            <span>Experimental / Digital Instrument Panel</span>
          </div>
          <h2>Lab</h2>
        </div>
        <div className="lab-grid">
          {experiments.map((experiment) => (
            <article className="lab-card" key={experiment.title}>
              <div className="lab-orbit" aria-hidden="true" />
              <div>
                <div className="lab-title-row">
                  <p className="card-code">{experiment.code}</p>
                  {experiment.status ? <span>{experiment.status}</span> : null}
                </div>
                <h3>
                  {experiment.title}
                  {experiment.status ? <span className="planned-copy"> / Planned</span> : null}
                </h3>
                <p>{experiment.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
