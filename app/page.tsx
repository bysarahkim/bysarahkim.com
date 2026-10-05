const sections = [
  { label: "Writing", href: "#writing" },
  { label: "About Sarah", href: "#about" },
  { label: "Projects", href: "#projects" },
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
            <a href="#writing">Follow the thread <span aria-hidden="true">↓</span></a>
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
            <p>Essays on housing, displacement, and the politics of urban change.</p>
          </div>
          <div className="writing-grid">
            <a
              className="writing-card"
              href="/writing/development-for-the-public/"
              aria-label="Read Development for the Public"
            >
              <div className="writing-card-image">
                <img
                  src="/writing/development-for-the-public/ahyeon-new-town-aerial.gif"
                  alt="Aerial view outlining the Ahyeon New Town redevelopment area in Seoul"
                />
                <span className="writing-card-type">Essay · 2026</span>
              </div>
              <div className="writing-card-copy">
                <h3>Development for the Public?</h3>
                <p>
                  An examination of state-led redevelopment in Seoul’s Ahyeon New
                  Town through rent-gap theory and the revanchist city, tracing
                  displacement, renter exclusion, and the multidimensional loss of home.
                </p>
                <span className="writing-card-link">Read essay <span aria-hidden="true">→</span></span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="section about" id="about" aria-labelledby="about-title">
        <div className="section-index">02 / About</div>
        <div className="section-body about-grid">
          <div>
            <h2 id="about-title">Researching how housing shapes social life.</h2>
            <dl className="about-facts">
              <div><dt>Based in</dt><dd>New York City</dd></div>
              <div><dt>Education</dt><dd>MS Urban Planning, Columbia GSAPP</dd></div>
              <div><dt>Focus</dt><dd>Housing, inequality, and urban change</dd></div>
            </dl>
          </div>
          <div className="prose about-copy">
            <p>
              I am Sarah Kim, an urban researcher whose work examines how housing
              systems produce social stratification, class identity, and unequal
              experiences of belonging. I earned a Master of Science in Urban
              Planning from Columbia University’s Graduate School of Architecture,
              Planning and Preservation.
            </p>
            <p>
              My research focuses on Seoul and brings together qualitative interviews,
              spatial analysis, and digital discourse analysis. My master’s thesis,
              <i> Beyond Shelter</i>, studied Korean apartment complexes as both
              material housing and a symbolic mechanism through which middle-class
              identity and social inequality are produced.
            </p>
            <p>
              Alongside research, I have worked across public-sector capital planning,
              cultural programming, and large-scale energy projects. These experiences
              shape my interest in the institutions, policies, and everyday relationships
              through which cities are built—and in how they might serve more people.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="projects" aria-labelledby="projects-title">
        <div className="section-index">03 / Projects</div>
        <div className="section-body">
          <div className="section-heading">
            <h2 id="projects-title">Projects</h2>
            <p>Research, design explorations, and collaborative work.</p>
          </div>
          <div className="project-card" aria-label="Middle Housing Competition project">
            <div className="project-visual" aria-hidden="true">
              <span /><span /><span /><span /><span />
            </div>
            <div className="project-copy">
              <span className="project-type">Design competition · Middle housing</span>
              <h3>Middle Housing Competition</h3>
              <p>
                A dedicated space for the proposal, drawings, research, and design
                process. Project materials will be added here.
              </p>
            </div>
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
