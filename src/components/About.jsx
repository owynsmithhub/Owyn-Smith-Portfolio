export default function About() {
  return (
    <section className="about-band" id="about">
      <div className="section-shell about-section content-section">
        <div className="section-heading" data-reveal>
          <div className="section-label">
            <span>02 / About</span>
            <span>Human-centered design / Front-end</span>
          </div>
          <h2>About</h2>
        </div>
        <div className="about-editorial" data-reveal>
          <p className="about-kicker">Informatics major / HCI minor / Indiana University</p>
          <p className="about-copy">
            I&apos;m an Informatics major with a minor in Human-Computer Interaction
            at Indiana University Bloomington. I design and build user-centered
            digital products that bring together clear interaction, accessible
            interfaces, and thoughtful front-end implementation.
          </p>
          <p className="about-detail">
            My experience as a caregiver has made empathy, listening, and
            translating individual needs into practical action central to how I
            approach design. I&apos;m especially interested in UX/UI, product design,
            and interactive web work where technical systems still feel human.
          </p>
          <dl className="about-facts">
            <div>
              <dt>Education</dt>
              <dd>B.S. Informatics / HCI minor / Expected May 2027</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>UX/UI, interaction design, accessibility, and front-end development</dd>
            </div>
            <div>
              <dt>Tools</dt>
              <dd>Figma, HTML, CSS, JavaScript, Python, SQL, and Adobe Creative Cloud</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
