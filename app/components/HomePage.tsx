import site from "../../content/site.json";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function HomePage() {
  return (
    <main>
      <SiteHeader home />
      <section className="section about" id="about" aria-labelledby="about-title">
        <div className="section-index">01 / About</div>
        <div className="section-body about-grid">
          <div>
            <h2 id="about-title">{site.about.headline}</h2>
            <dl className="about-facts">
              <div><dt>Based in</dt><dd>{site.about.basedIn}</dd></div>
              <div><dt>Education</dt><dd>{site.about.education.map((degree, i) => <span className="degree-line" key={i}>{degree}</span>)}</dd></div>
              <div><dt>Focus</dt><dd>{site.about.focus}</dd></div>
              <div><dt>Methods</dt><dd>{site.about.methods}</dd></div>
            </dl>
          </div>
          <div className="prose about-copy">{site.about.paragraphs.map((paragraph, i) => <p key={i}>{paragraph}</p>)}</div>
        </div>
      </section>
      <section className="section" id="research" aria-labelledby="research-title">
        <div className="section-index" id="writing">02 / Research</div>
        <div className="section-body">
          <div className="section-heading">
            <h2 id="research-title">Research &amp; Writing</h2>
            <p>{site.researchDescription}</p>
          </div>
          <article className="featured-research" aria-labelledby="thesis-title">
            <p className="eyebrow">{site.thesis.meta}</p>
            <h3 id="thesis-title">{site.thesis.title}<span>{site.thesis.subtitle}</span></h3>
            <p className="thesis-advisor">Advisor: {site.thesis.advisor}</p>
            <div className="prose"><p>{site.thesis.description}</p></div>
            <dl className="thesis-methods"><div><dt>Methods</dt><dd>{site.thesis.methods}</dd></div></dl>
            {site.thesis.href && <a className="writing-card-link thesis-link" href={site.thesis.href} target="_blank" rel="noreferrer">View thesis <span aria-hidden="true">→</span></a>}
          </article>
          <div className="writing-grid">
            {site.writing.map((item, i) => (
              <a className="writing-card" href={item.href} key={i} aria-label={`${item.action}: ${item.title}`} target={item.pdf || item.href.startsWith("http") ? "_blank" : undefined} rel={item.pdf || item.href.startsWith("http") ? "noreferrer" : undefined}>
                <div className="writing-card-image">
                  <img src={item.image} alt={item.alt} style={{ objectPosition: item.imagePosition }} />
                  <span className="writing-card-type">{item.meta}</span>
                </div>
                <div className="writing-card-copy">
                  <h3>{item.title}</h3><p>{item.description}</p>
                  <span className="writing-card-link">{item.action} <span aria-hidden="true">→</span></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="section" id="projects" aria-labelledby="projects-title">
        <div className="section-index">03 / Projects</div>
        <div className="section-body">
          <div className="section-heading"><h2 id="projects-title">Projects</h2><p>{site.projectsDescription}</p></div>
          {site.projects.map((item, i) => (
            <article className="project-card" key={i} aria-label={`${item.title} project`}>
              <a className="project-visual" href={item.href} target="_blank" rel="noreferrer" aria-label={`View ${item.title}`}><img src={item.image} alt={item.alt} /></a>
              <div className="project-copy">
                <span className="project-type">{item.meta}</span>
                <h3>{item.title}</h3><p className="project-subtitle">{item.subtitle}</p>
                <div className="project-credits">{item.credits.map((credit, index) => <p key={index} lang={/[가-힣]/.test(credit) ? "ko" : undefined}>{credit}</p>)}</div>
                <p>{item.description}</p>
                <div className="project-actions"><a className="project-action" href={item.href} target="_blank" rel="noreferrer"><span>{item.linkLabel}</span><span>{item.action} →</span></a></div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section" id="photography" aria-labelledby="photography-title">
        <div className="section-index">04 / Photography</div>
        <div className="section-body">
          <div className="section-heading"><h2 id="photography-title">Photography</h2><p>{site.photographyDescription}</p></div>
          <div className="photography-grid">
            {site.photography.map((item, i) => (
              <article className="photography-card" key={i}>
                <a className="photography-image" href={item.href} target="_blank" rel="noreferrer" aria-label={`View the ${item.title} architectural photography PDF`}><img src={item.image} alt={item.alt} /></a>
                <div className="photography-copy">
                  <div className="photography-meta"><span>{item.meta}</span><span>{item.date}</span></div>
                  <h3>{item.title}</h3><p className="photography-location">{item.location}</p>
                  <a className="photography-link" href={item.href} target="_blank" rel="noreferrer">View photographs <span aria-hidden="true">→</span></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
