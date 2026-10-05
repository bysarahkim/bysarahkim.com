const sections = [
  { label: "Writing", href: "#writing" },
  { label: "About Sarah", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Notes", href: "#notes" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Sarah Kim, home">
          Sarah Kim
        </a>
        <nav aria-label="Primary navigation">
          {sections.map((section) => (
            <a key={section.href} href={section.href}>
              {section.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <p className="eyebrow">Urban research · everyday life</p>
        <div className="hero-grid">
          <h1 id="hero-title">
            We build Cities and they shape our everyday lives, relationships, and societies. 
          </h1>
          <div className="hero-note">
            <span className="note-number">01</span>
            <p>
              I follow questions about how people and cities continually make
              one another—and how we might create cities that belong to everyone.
            </p>
            <a href="#about">Follow the thread <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="city-line" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>

      <section className="section" id="writing" aria-labelledby="writing-title">
        <div className="section-index">01 / Writing</div>
        <div className="section-body">
          <div className="section-heading">
            <h2 id="writing-title">Writing</h2>
            <p>Essays and research notes will gather here.</p>
          </div>
          <div className="entry-list">
            <a
              className="entry entry-link"
              href="/writing/development-for-the-public/"
              aria-label="Read Development for the Public"
            >
              <span className="entry-type">Essay</span>
              <h3>Development for the Public?</h3>
              <span className="entry-status">Read essay <span aria-hidden="true">→</span></span>
            </a>
            <article className="entry">
              <span className="entry-type">Research note</span>
              <h3>Questions toward a city for everyone</h3>
              <span className="entry-status">Coming soon</span>
            </article>
          </div>
        </div>
      </section>

      <section className="section about" id="about" aria-labelledby="about-title">
        <div className="section-index">02 / About</div>
        <div className="section-body about-grid">
          <h2 id="about-title">A personal inquiry into collective life.</h2>
          <div className="prose">
            <p>
              I am Sarah Kim, a researcher interested in the intimate relationship
              between cities and everyday life. I look at the ordinary spaces,
              systems, and stories through which urban life becomes visible.
            </p>
            <p>
              This site is a home for writing, projects, and notes in progress—my
              own threads of questions toward understanding our cities and imagining
              more generous ones for everyone.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="projects" aria-labelledby="projects-title">
        <div className="section-index">03 / Projects</div>
        <div className="section-body">
          <div className="section-heading">
            <h2 id="projects-title">Projects</h2>
            <p>Ongoing investigations, visual stories, and collaborative work.</p>
          </div>
          <div className="project-placeholder">
            <span>Now taking shape</span>
            <p>
              A first collection of projects is on its way. In the meantime, this
              space holds the questions that connect them: who shapes the city,
              whose lives it supports, and what other futures it might hold.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="notes" aria-labelledby="notes-title">
        <div className="section-index">04 / Notes</div>
        <div className="section-body">
          <div className="section-heading">
            <h2 id="notes-title">Field notes</h2>
            <p>Small observations collected along the way.</p>
          </div>
          <div className="notes-grid">
            <article><span>On looking</span><p>What becomes visible when we slow down in familiar places?</p></article>
            <article><span>On belonging</span><p>How does a city tell us who and what it was made for?</p></article>
            <article><span>On possibility</span><p>Everyday life is where another urban future begins.</p></article>
          </div>
        </div>
      </section>

      <footer>
        <div>
          <p className="footer-kicker">Let’s keep the conversation open.</p>
          <p>Contact details and new work will be added soon.</p>
        </div>
        <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
        <p className="copyright">© {new Date().getFullYear()} Sarah Kim</p>
      </footer>
    </main>
  );
}
