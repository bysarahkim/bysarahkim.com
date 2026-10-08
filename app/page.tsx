// Set this to an existing public PDF path or CV page when one is available.
const cvHref: string | null = null;

const sections = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  ...(cvHref ? [{ label: "CV", href: cvHref }] : []),
  { label: "Photography", href: "#photography" },
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
    title: "Mapping Displacement and Gentrification",
    meta: "Collaborative research · Spring 2025",
    description:
      "A mixed-methods-informed computational study of gentrification and displacement across Brooklyn, combining Marcuse’s displacement framework with ACS data, clustering, supervised machine learning, and SHAP-based interpretation to examine which neighborhood changes are most associated with displacement patterns.",
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
              <div><dt>Education</dt><dd>MS Urban Planning, Columbia GSAPP<br />BA Urban Social Management, Yokohama National University</dd></div>
              <div><dt>Focus</dt><dd>Housing · Social stratification · Housing stigma · Displacement · Urban change</dd></div>
              <div><dt>Methods</dt><dd>Qualitative interviews · Spatial analysis · Computational methods · Historical research · Digital discourse analysis</dd></div>
            </dl>
          </div>
          <div className="prose about-copy">
            <p>
              I am Sarah Kim, an urban researcher studying how housing systems shape
              social stratification, class identity, and unequal experiences of belonging.
              I earned a Master of Science in Urban Planning from Columbia University’s
              Graduate School of Architecture, Planning and Preservation.
            </p>
            <p>
              My research focuses on the relationship between housing, social hierarchy,
              and urban inequality, with South Korea as an important empirical context.
              My master’s thesis, Beyond Shelter, examined how Korean apartment complexes
              developed from a state-led housing solution into both a material infrastructure
              of middle-class formation and a symbolic marker of social status.
            </p>
            <p>
              My emerging research agenda examines housing-based stigma: how housing
              types and housing systems acquire social meanings, how these meanings
              shape class perception and everyday experience, and how symbolic and
              material inequalities are reproduced through redevelopment, housing policy,
              and urban change.
            </p>
            <p>
              Methodologically, I combine qualitative interviews and attention to lived
              experience with spatial and computational analysis, historical inquiry,
              and digital discourse analysis. I am particularly interested in approaches
              that connect macro-level patterns and institutional structures with
              experiences that cannot be reduced to quantitative indicators alone.
            </p>
            <p>
              Before and alongside my academic work, I have worked across public-sector
              capital planning, large-scale energy projects, and cultural programming.
              These experiences inform my interest in the institutions, policies, and
              everyday relationships through which cities are produced.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="research" aria-labelledby="research-title">
        <div className="section-index" id="writing">02 / Research</div>
        <div className="section-body">
          <div className="section-heading">
            <h2 id="research-title">Research &amp; Writing</h2>
            <p>Research on housing, inequality, displacement, and the social meanings of urban change.</p>
          </div>
          <article className="featured-research" aria-labelledby="thesis-title">
            <p className="eyebrow">Master’s Thesis · Columbia University · 2026</p>
            <h3 id="thesis-title">
              Beyond Shelter:
              <span>The Role of Korean Apartment Complexes in Middle-Class Identity and Social Stratification in Seoul</span>
            </h3>
            <p className="thesis-advisor">Advisor: Tom Slater</p>
            <div className="prose">
              <p>This study examines how South Korea’s apartment-centered housing system became intertwined with middle-class identity and social stratification. Connecting the history of state-led apartment development with housing financialization, spatial inequality, and the contemporary stigmatization of non-apartment housing, the research asks how a housing type can become both a material asset and a symbolic marker of class position.</p>
            </div>
            <dl className="thesis-methods">
              <div>
                <dt>Methods</dt>
                <dd>Historical analysis · Semi-structured interviews · Spatial analysis · Housing transaction data · Online search-trend analysis</dd>
              </div>
            </dl>
          </article>
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
          <article className="project-card" aria-label="Weave House Middle Housing Competition project">
            <a
              className="project-visual"
              href="/projects/middle-housing/weave-house-korean.pdf"
              target="_blank"
              rel="noreferrer"
              aria-label="View the Korean Weave House competition panel PDF"
            >
              <img
                src="/projects/middle-housing/weave-house-panel.png"
                alt="Weave House competition panel showing its housing proposal, site, programs, and unit mix"
              />
            </a>
            <div className="project-copy">
              <span className="project-type">Group project · 2026</span>
              <h3>Weave House</h3>
              <p className="project-subtitle">Mix + Connect</p>
              <div className="project-credits">
                <p>With Jun Seo Yoon and Kania Attaya Ulfa</p>
                <p lang="ko">새건축사협회 중간주택 탐색 프로젝트</p>
              </div>
              <p>
                A 70-home middle-housing proposal in Sinsa-dong, Gwanak-gu that
                connects homes, alleys, the local market, and shared spaces through
                a cooperative model for more stable and sociable urban living.
              </p>
              <div className="project-actions">
                <a
                  className="project-action"
                  href="/projects/middle-housing/weave-house-korean.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Korean version</span>
                  <span>View panel →</span>
                </a>
              </div>
            </div>
          </article>
          <article className="project-card" aria-label="Tokyo Yoyogi zoning case study project">
            <a
              className="project-visual"
              href="/projects/yoyogi-zoning/yoyogi-zoning-case-study.pdf"
              target="_blank"
              rel="noreferrer"
              aria-label="View the Tokyo Yoyogi zoning case study PDF"
            >
              <img
                src="/projects/yoyogi-zoning/yoyogi-zoning-impact.png"
                alt="Yoyogi aerial analysis comparing floor-area ratios and height limits across two residential zones"
              />
            </a>
            <div className="project-copy">
              <span className="project-type">Individual project · Fall 2025</span>
              <h3>Tokyo Yoyogi</h3>
              <p className="project-subtitle">Zoning, planning law, and neighborhood form</p>
              <div className="project-credits">
                <p>Practicum: Residential Planning (Fall 2025)</p>
                <p>Advisor: Katherine Dunham</p>
              </div>
              <p>
                How zoning and planning law in Tokyo shaped neighborhoods in Tokyo.
              </p>
              <div className="project-actions">
                <a
                  className="project-action"
                  href="/projects/yoyogi-zoning/yoyogi-zoning-case-study.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Full case study</span>
                  <span>View PDF →</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section" id="photography" aria-labelledby="photography-title">
        <div className="section-index">04 / Photography</div>
        <div className="section-body">
          <div className="section-heading">
            <h2 id="photography-title">Photography</h2>
            <p>Architectural studies through light, material, and everyday use.</p>
          </div>
          <div className="photography-grid">
            <article className="photography-card">
              <a
                className="photography-image"
                href="/photography/whitney-museum-photography.pdf"
                target="_blank"
                rel="noreferrer"
                aria-label="View the Whitney Museum architectural photography PDF"
              >
                <img
                  src="/photography/whitney-museum.png"
                  alt="Street-level view of the Whitney Museum of American Art"
                />
              </a>
              <div className="photography-copy">
                <div className="photography-meta">
                  <span>Assignment 01</span>
                  <span>Fall 2025</span>
                </div>
                <h3>Whitney Museum of American Art</h3>
                <p className="photography-location">New York City</p>
                <a
                  className="photography-link"
                  href="/photography/whitney-museum-photography.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  View photographs <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>

            <article className="photography-card">
              <a
                className="photography-image"
                href="/photography/domino-sugar-photography.pdf"
                target="_blank"
                rel="noreferrer"
                aria-label="View the Domino Sugar architectural photography PDF"
              >
                <img
                  src="/photography/domino-sugar.png"
                  alt="Historic Domino Sugar sign above the brick refinery building"
                />
              </a>
              <div className="photography-copy">
                <div className="photography-meta">
                  <span>Assignment 02</span>
                  <span>Fall 2025</span>
                </div>
                <h3>Domino Sugar Refinery</h3>
                <p className="photography-location">Brooklyn, New York</p>
                <a
                  className="photography-link"
                  href="/photography/domino-sugar-photography.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  View photographs <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <footer>
        <div>
          <p className="footer-kicker">Let’s keep the conversation open.</p>
          <p>For research, academic collaboration, and related inquiries, please feel free to get in touch.</p>
          {cvHref && <a className="footer-cv" href={cvHref}>CV</a>}
        </div>
        <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
        <p className="copyright">© {new Date().getFullYear()} Sarah Kim</p>
      </footer>
    </main>
  );
}
