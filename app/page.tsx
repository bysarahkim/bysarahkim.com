const sections = [
  { label: "About Sarah", href: "#about" },
  { label: "Writing", href: "#writing" },
  { label: "Projects", href: "#projects" },
];

const writingItems = [
  {
    title: "Development for the Public?",
    meta: "Essay · Spring 2026",
    description:
      "An examination of state-led redevelopment in Seoul’s Ahyeon New Town through rent-gap theory and the revanchist city, tracing displacement, renter exclusion, and the multidimensional loss of home.",
    image: "/writing/development-for-the-public/ahyeon-new-town-aerial.gif",
    imagePosition: "center",
    alt: "Aerial view outlining the Ahyeon New Town redevelopment area in Seoul",
    href: "/writing/development-for-the-public/",
    action: "Read essay",
    pdf: false,
  },
  {
    title: "Closed Conversation: Woven City — Is It a City?",
    meta: "Research essay · Fall 2025",
    description:
      "A critical reading of Toyota Woven City as a corporate-led smart-city testbed, examining data solutionism, AI urbanism, private governance, and its separation from the civic life around it.",
    image: "/writing/library/closed-conversation-woven-city.png",
    imagePosition: "center 31%",
    alt: "First page of Closed Conversation featuring Toyota Woven City beneath Mount Fuji",
    href: "/writing/library/closed-conversation-woven-city.pdf",
    action: "View PDF",
    pdf: true,
  },
  {
    title: "Mapping Displacement and Gentrification",
    meta: "Collaborative research · Spring 2025",
    description:
      "A machine-learning approach to classifying displacement patterns across Brooklyn, combining clustering and predictive models with Peter Marcuse’s typology of urban displacement.",
    image: "/writing/library/mapping-displacement-and-gentrification-feature.png",
    imagePosition: "center 78%",
    alt: "K-means clustering map showing displacement patterns across Brooklyn",
    href: "/writing/library/mapping-displacement-and-gentrification.pdf",
    action: "View PDF",
    pdf: true,
  },
  {
    title: "Public Rental Housing in South Korea",
    meta: "Essay · May 2025",
    description:
      "A personal and critical examination of how public rental housing is stigmatized in South Korea, and why social-mix policies struggle to undo housing-based status hierarchies.",
    image: "/writing/library/public-rental-housing-social-mix.png",
    imagePosition: "center",
    alt: "Dense landscape of apartment complexes in South Korea",
    href: "https://blog.naver.com/insight9411/223857710652",
    action: "Read essay",
    pdf: false,
  },
  {
    title: "Gentrification in Williamsburg",
    meta: "GIS research · Fall 2024",
    description:
      "A longitudinal GIS analysis of how the 2005 Greenpoint–Williamsburg rezoning reshaped land use, housing, population, income, and employment across the neighborhood.",
    image: "/writing/library/rezoning-in-williamsburg.png",
    imagePosition: "center 62%",
    alt: "Cover of Gentrification in Williamsburg featuring the Williamsburg Bridge",
    href: "/writing/library/rezoning-in-williamsburg.pdf",
    action: "View PDF",
    pdf: true,
  },
  {
    title: "Privatopia and Local Government",
    meta: "Comparative research · Fall 2024",
    description:
      "A comparison of homeowners associations in the United States and apartment-complex communities in South Korea, focusing on private governance and relationships with local government.",
    image: "/writing/library/privatopia-and-local-government-feature.png",
    imagePosition: "center 35%",
    alt: "Historic aerial view of the Mapo Apartment complex in Seoul",
    href: "/writing/library/privatopia-and-local-government.pdf",
    action: "View PDF",
    pdf: true,
  },
  {
    title: "Reconstructing the Nation and Modernizing Society",
    meta: "Historical research · 2024",
    description:
      "A study of government-led housing during South Korea’s first Five-Year Economic Development Plan and its lasting effects on modernization, middle-class identity, and Seoul’s urban form.",
    image: "/writing/library/reconstructing-the-nation-feature.png",
    imagePosition: "center 67%",
    alt: "Seoul skyline filled with high-rise apartment complexes",
    href: "/writing/library/reconstructing-the-nation.pdf",
    action: "View PDF",
    pdf: true,
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header" id="top">
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

      <section className="section about" id="about" aria-labelledby="about-title">
        <div className="section-index">01 / About</div>
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

      <section className="section" id="writing" aria-labelledby="writing-title">
        <div className="section-index">02 / Writing</div>
        <div className="section-body">
          <div className="section-heading">
            <h2 id="writing-title">Writing</h2>
            <p>Essays on housing, displacement, and the politics of urban change.</p>
          </div>
          <div className="writing-grid">
            {writingItems.map((item) => (
              <a
                className="writing-card"
                href={item.href}
                key={item.href}
                aria-label={`${item.action}: ${item.title}`}
                target={item.pdf || item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.pdf || item.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <div className="writing-card-image">
                  <img
                    src={item.image}
                    alt={item.alt}
                    style={{ objectPosition: item.imagePosition }}
                  />
                  <span className="writing-card-type">{item.meta}</span>
                </div>
                <div className="writing-card-copy">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="writing-card-link">
                    {item.action} <span aria-hidden="true">→</span>
                  </span>
                </div>
              </a>
            ))}
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
