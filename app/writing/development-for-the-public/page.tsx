import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Development for the Public? Gentrification and Displacement as the End of the World for Some — Sarah Kim",
  description:
    "An essay on redevelopment-led gentrification, displacement, and the meaning of home in Seoul’s Ahyeon New Town.",
  alternates: {
    canonical: "/writing/development-for-the-public/",
  },
};

type FigureProps = {
  number: number;
  images: Array<{ src: string; alt: string }>;
  caption: ReactNode;
  layout?: "single" | "pair" | "mosaic";
};

function Figure({ number, images, caption, layout = "single" }: FigureProps) {
  return (
    <figure className={`essay-figure figure-${layout}`}>
      <div className="figure-images">
        {images.map((image) => (
          <img key={image.src} src={image.src} alt={image.alt} />
        ))}
      </div>
      <figcaption>
        <span>Figure {number}</span>
        {caption}
      </figcaption>
    </figure>
  );
}

export default function DevelopmentForThePublic() {
  return (
    <main className="essay-page">
      <header className="site-header essay-site-header">
        <a className="wordmark" href="/" aria-label="Sarah Kim, home">
          Sarah Kim
        </a>
        <nav aria-label="Essay navigation">
          <a href="/#research">Research</a>
          <a href="#references">References</a>
        </nav>
      </header>

      <article>
        <header className="essay-hero">
          <a className="back-link" href="/#research">
            <span aria-hidden="true">←</span> All research &amp; writing
          </a>
          <p className="eyebrow">Essay · Gentrification and displacement · 2026</p>
          <h1>Development for the Public?</h1>
          <p className="essay-subtitle">
            Gentrification and Displacement as the End of the World for Some
          </p>
          <div className="essay-byline">
            <span>Sarah Kim</span>
            <span>Seoul, South Korea</span>
          </div>
        </header>

        <div className="essay-layout">
          <aside className="essay-aside" aria-label="Essay summary">
            <p className="aside-label">In this essay</p>
            <p>
              The Ahyeon New Town project reveals how state-led redevelopment
              can produce displacement, violence, and the loss of home for
              renters excluded from ownership-centered planning.
            </p>
            <ol>
              <li><a href="#death">The Death of a Young Man</a></li>
              <li><a href="#state-led">State-led Gentrification</a></li>
              <li><a href="#class-struggle">Class Struggle</a></li>
              <li><a href="#losing-home">Losing Home</a></li>
              <li><a href="#renters">Exclusion of Renters</a></li>
            </ol>
          </aside>

          <div className="essay-content">
            <section id="death">
              <h2>The Death of a Young Man</h2>
              <p>
                On November 30th of 2018, Joon-Kyung Park, a 37-year-old man,
                was evicted from his home with his mother. Three days later, he
                was found as a cold body in the Han River (Media Today, 2018).
                As a low-income worker relying on short-term construction jobs,
                he had nowhere to go after his last home was demolished. He was
                evicted three times during the government-led reconstruction of
                his neighborhood, which involved forced demolition.
              </p>
              <p>
                Park had lived in what is now designated as “Ahyeon
                Reconstruction District 2,” part of the broader Ahyeon New Town
                project, covering 1,088,094 m² (269 acres) and developed from
                2003 to 2022 (Namuwiki, n.d.).
                <sup><a href="#note-1" aria-label="Footnote 1">1</a></sup>
              </p>
              <blockquote>
                <p>
                  “I have no place to eat or sleep because I am forced out in
                  the cold winter. I am afraid of facing tomorrow, so I decided
                  to leave this world. I am worried about my mother even if I
                  die like this. Please let her have one long-term public rental
                  housing.”
                </p>
                <cite>Joon-Kyung Park’s final note, quoted in Kyunghyang News, 2018</cite>
              </blockquote>

              <Figure
                number={1}
                images={[
                  {
                    src: "/writing/development-for-the-public/park-funeral.jpeg",
                    alt: "Mourners carrying a portrait of Joon-Kyung Park at his funeral",
                  },
                ]}
                caption={<>Funeral of Park from Ahyeon Reconstruction District 2, 2018. Source: Kyunghyang Shinmun.</>}
              />

              <Figure
                number={2}
                layout="pair"
                images={[
                  {
                    src: "/writing/development-for-the-public/ahyeon-new-town-aerial.gif",
                    alt: "Aerial view showing the boundary of Ahyeon New Town in Seoul",
                  },
                  {
                    src: "/writing/development-for-the-public/ahyeon-district-map.png",
                    alt: "Planning map showing districts within Ahyeon New Town",
                  },
                ]}
                caption={<>Ahyeon New Town boundary and the location of District 2. Sources: Neonet and Namuwiki.</>}
              />

              <p>
                This case illustrates how gentrification in Seoul produces not
                only displacement but also violence that leads to social and
                physical death. The news of Park’s death brought significant
                attention citywide, and many people mourned. Others rejoiced
                that the final obstacle had been eliminated and reconstruction
                could begin after all residents were cleared.
              </p>

              <Figure
                number={3}
                images={[
                  {
                    src: "/writing/development-for-the-public/solidarity-demonstration.jpeg",
                    alt: "Housing rights demonstrators gathered outside Mapo District Office",
                  },
                ]}
                caption={<>Solidarity for the Liberation of the Poor demonstrating in front of Mapo District Office, December 12, 2018. Source: Global News.</>}
              />

              <p>
                In South Korea, redevelopment and reconstruction (
                <i>jaegaebal</i> and <i>jaegeonchuk</i>) have often been
                understood as locally specific mechanisms of urban development.
                However, drawing on <i>Planetary Gentrification</i> (2016),
                redevelopment can also be understood as a form of gentrification
                because it produces displacement.
                <sup><a href="#note-2" aria-label="Footnote 2">2</a></sup>
              </p>
              <p>
                This essay examines the struggles of renters and tenants during
                state-led gentrification in Seoul. It highlights a critical blind
                spot in discussions of gentrification and displacement through
                the cases of the Ahyeon New Town project (2003–2022) and
                District 2, where the tragedy occurred in 2018.
              </p>
              <p>
                Drawing on rent gap theory, the concept of the revanchist city,
                and Marcuse’s typology of displacement, this essay analyzes
                Korean redevelopment as a state-led, mega-scale process of urban
                transformation that generates violence and displacement. It
                argues that these consequences must be understood as the loss of
                “home,” not only as physical shelter but also as a social and
                psychological condition.
              </p>
            </section>

            <section id="state-led">
              <h2>State-led, Mega-scale Gentrification in Seoul</h2>
              <p>
                In South Korea, government-led, mega-scale gentrification can be
                understood through the interaction between a neoliberalizing
                state and the rise of a speculative middle class. Financial
                crises—particularly those of 1997–1998 and 2008—played a critical
                role in reshaping this relationship, intensifying aspirations
                for capital accumulation through real estate and triggering a
                redevelopment craze in Seoul.
              </p>
              <p>
                As scholars such as Kim (2022) and Jung (2023) note, these crises
                marked turning points in the state’s active intervention in urban
                redevelopment while simultaneously fostering speculative behavior
                among the middle class. Facing the risk of downward mobility, the
                middle class increasingly turned to property as a means of
                securing and accumulating wealth, reinforcing demand for
                redevelopment.
              </p>
              <p>
                In this context, redevelopment and reconstruction became closely
                tied to property-based wealth accumulation (Lees et al., 2016),
                reflected in widening rent gaps and sharp increases in property
                values. At the same time, neoliberalizing governments reoriented
                urban policy toward revenue generation, expanding redevelopment
                projects from small-scale interventions to large-scale
                transformations. The Korean government, as a developmental state,
                has operated centralized power in planning and execution,
                prioritizing national economic development. This power established
                a structure of centralized, top-down urban planning that
                streamlines large-scale land acquisition and execution at the
                mega-scale.
              </p>
              <p>
                The developmental state mindset was translated into a narrative
                of urban redevelopment, with slogans of “development for the
                public interest” and “national economic development” (Hongdae
                News, 2019). In Ahyeon New Town, the government framed the area
                as outdated infrastructure that should be replaced with modern
                infrastructure. This is a typical narrative for large-scale urban
                renewal that transforms organically developed low-rise
                neighborhoods or low- to middle-class areas into high-rise
                apartment complexes under the name of public interest.
              </p>
              <p>
                What distinguishes Korean metropolitan gentrification is not only
                its spatial scale but also its temporal and geographical
                characteristics. According to Ruth Glass’s classical definition
                of gentrification (Lees, Slater, and Wyly, 2008), the process
                unfolds gradually without clearly defined boundaries. In Korea,
                it often occurs abruptly within a targeted timeframe and formally
                designated boundaries. As a result, the transformation of the
                physical and social fabric produces a stark contrast between the
                existing environment and newly built developments.
              </p>

              <Figure
                number={4}
                layout="mosaic"
                images={[
                  { src: "/writing/development-for-the-public/ahyeon-before-1.jpeg", alt: "Low-rise housing in Ahyeon-dong before redevelopment" },
                  { src: "/writing/development-for-the-public/ahyeon-before-2.jpeg", alt: "A narrow residential street and steps in Ahyeon-dong" },
                  { src: "/writing/development-for-the-public/ahyeon-demolition-1.jpeg", alt: "Ahyeon-dong buildings during demolition" },
                  { src: "/writing/development-for-the-public/ahyeon-demolition-2.jpeg", alt: "Cleared redevelopment land beside remaining housing" },
                  { src: "/writing/development-for-the-public/ahyeon-demolition-3.jpeg", alt: "Large cleared construction site in Ahyeon-dong" },
                ]}
                caption={<>Ahyeon-dong before redevelopment and after demolition. Sources: Chosun News, Seoul News, and Dong-A Ilbo.</>}
              />
            </section>

            <section id="class-struggle">
              <h2>Class Struggle: Rent Gap Theory and the Revanchist City</h2>
              <p>
                Korean gentrification demonstrates that rent gap theory is a
                primary driver of large-scale redevelopment. While classical
                gentrification often occurs through the gradual rehabilitation of
                individual housing, in Korea the realization of rent gaps takes
                place through the total demolition of existing housing and its
                replacement with high-rise apartment complexes. This process
                involves not only transforming housing types but also
                restructuring streets, infrastructure, and commercial
                environments within designated redevelopment areas.
              </p>
              <p>
                Since the announcement of redevelopment in Ahyeon-dong, the media
                have emphasized its prime location, access to multiple subway
                lines, and future transformation into modern apartment complexes.
                This narrative highlights the area’s potential value, reinforcing
                the rent gap, while simultaneously reframing existing conditions
                as inappropriate settlements for their locations. As a result,
                newly developed housing is priced far above previous levels,
                excluding former residents and reflecting a revanchist
                restructuring of urban space.
              </p>
              <p>
                For example, a detached house in Ahyeon-dong valued at
                approximately 20 million KRW (JoongAng News, 2021) was later
                redeveloped into an apartment unit in Mapo Raemian Prugio. The
                apartment became five times more expensive by 2019 and nearly ten
                times more expensive by 2026 (Naver Real Estate, 2026). This
                dramatic increase widens the rent gap, generating substantial
                profits for property owners while making it impossible for former
                low-income renters to return.
              </p>
              <p>
                This process illustrates a form of class restructuring in which
                existing working-class communities are displaced and replaced.
                As Neil Smith (1996) argues, such transformation reflects a
                revanchist urban process that reclaims urban space from
                marginalized populations and rewrites its social geography in the
                name of urban progress.
              </p>
              <p>
                In Seoul, state-led development reinforces this process through
                dominant narratives that frame low-income neighborhoods as
                obstacles to urban circulation. These areas are often stigmatized
                as outdated and lacking aesthetic value, while “modern” urban
                space is equated with high-rise apartment complexes. This
                narrative legitimizes the wholesale replacement of existing
                communities under the broader discourse of national economic
                development. Within this logic, Ahyeon District 2, where Park
                lived, was incorporated into the Ahyeon New Town project under a
                narrative of “concerns over slum formation” in 2006 (Media Today,
                2018).
              </p>

              <Figure
                number={5}
                layout="pair"
                images={[
                  { src: "/writing/development-for-the-public/ahyeon-street-2009.png", alt: "Google Street View of Ahyeon New Town during demolition in 2009" },
                  { src: "/writing/development-for-the-public/ahyeon-street-2014.png", alt: "Google Street View of completed high-rise apartments in Ahyeon New Town in 2014" },
                ]}
                caption={<>Ahyeon New Town before and after its transformation into apartment complexes. Google Street View, 2009 and 2014.</>}
              />
            </section>

            <section id="losing-home">
              <h2>Displacement and Its Consequences: The Process of Losing Home</h2>
              <p>
                This dynamic reveals the coercive and state-mediated nature of
                gentrification in the Korean context. Once an area is designated
                for redevelopment, existing tenants are not encouraged or
                incentivized to leave. Instead, enforcement agents arrive with
                court orders that legitimize redevelopment and forcibly remove
                residents from their homes, leading to the total demolition of
                the designated area. Total demolition is carried out to minimize
                construction time, but it drastically increases the housing
                insecurity faced by existing residents (Kim, 2022). The state is
                authorized to carry out eviction, demolition, and even the use of
                force, particularly against low-income residents who lack the
                economic capacity to relocate.
              </p>
              <p>
                In the Ahyeon New Town area, District 2 underwent repeated forced
                demolitions, reportedly up to 24 times, accompanied by municipal
                officials and private demolition agents (Hongdae News, 2019). The
                process is neither gentle nor peaceful; it involves physical
                violence and intimidation toward residents who resist leaving. In
                extreme cases, residents reported that their homes were
                intentionally damaged or set on fire to force eviction
                (Kyunghyang News, 2009; Media Today, 2018). These experiences show
                that displacement in this context is immediate and coercive,
                posing not only housing insecurity but also threats to physical
                safety.
              </p>
              <p>
                Reflecting on Peter Marcuse’s typology (1985), the Ahyeon New
                Town case demonstrates three forms of displacement: direct
                displacement, displacement pressure, and exclusionary
                displacement. Direct displacement occurs through forced eviction
                and demolition, resulting in the immediate loss of physical home.
                The most vulnerable renters, who lack economic and social
                resources, are disproportionately affected by this process.
              </p>
              <p>
                Beyond physical removal, redevelopment produces displacement
                pressure through the destruction of community networks. The total
                demolition of neighborhoods removes not only housing but also the
                social relationships embedded within these spaces. As Curran
                (2018) suggests, gentrification disrupts social relations,
                particularly among vulnerable populations who rely on local
                networks for everyday survival. In this sense, residents lose
                their social home alongside their physical shelter.
              </p>
              <p>
                Finally, redevelopment generates exclusionary displacement by
                preventing former residents from returning. The conversion of
                low-rise and multi-family housing into high-rise apartment
                complexes produces a sharp increase in property values and rents.
                Previous residents, especially renters, are excluded from the
                redeveloped area. Although some districts provided public rental
                housing, this accounted for only a limited portion of total units,
                reinforcing long-term socio-spatial inequality (Seoul Metropolitan
                Government, 2005).
              </p>
              <p>
                These forms of displacement extend beyond material loss and
                penetrate the meaning of home. The Ahyeon case demonstrates that
                home is not only physical but also social and psychological.
                Park’s case illustrates this most clearly. After being evicted
                three times and becoming homeless, he wrote that he was “afraid
                of facing tomorrow.” This reflects not only the loss of physical
                shelter but also the collapse of psychological home—the sense of
                stability and belonging necessary to sustain life. His experience
                suggests that, even as a renter, his home functioned as a critical
                foundation for his survival, socially and emotionally.
              </p>
              <p>
                Home has a multidimensional meaning. For vulnerable populations,
                psychological dependence on home can be as critical as physical
                shelter, shaping their ability to remain socially and mentally
                alive.
              </p>

              <Figure
                number={6}
                layout="pair"
                images={[
                  { src: "/writing/development-for-the-public/park-house.jpeg", alt: "Park’s former house blocked before demolition" },
                  { src: "/writing/development-for-the-public/forced-demolition.jpeg", alt: "Interior of a damaged building during forced demolition in Ahyeon District 3" },
                ]}
                caption={<>A house from which Park was evicted, blocked before demolition, and forced demolition in Ahyeon District 3 in 2009. Sources: Media Today and Kyunghyang News.</>}
              />
            </section>

            <section id="renters">
              <h2>Blind Spot of Gentrification: Systemic Exclusion of Renters</h2>

              <Figure
                number={7}
                images={[
                  { src: "/writing/development-for-the-public/resistance-signs.jpeg", alt: "A redevelopment resistance message painted on a wall in Ahyeon District 2" },
                ]}
                caption={<>Resistance signs in District 2 reading “Plan first, then demolish.” Source: Yonsei Chunchu.</>}
              />

              <p>
                The issue of compensation for renters reveals a critical
                structural gap in Korea’s redevelopment system, which remains
                largely centered on property ownership. While property owners
                often face difficulties returning to redeveloped areas, those who
                disappear most completely from the process are tenants. The
                eligibility criteria for tenant compensation remain excessively
                restrictive. In reconstruction projects such as Park’s District
                2, even these minimal protections are largely absent (Media Today,
                2018). While redevelopment tenants received only about USD 10,000
                per family for relocation, reconstruction provided no compensation
                for tenants.
              </p>
              <p>
                Compensation must therefore involve both physical housing and
                financial support for displaced renters. As redevelopment proceeds
                through compulsory acquisition, an estimated 320,000 people are
                displaced each year in Korea, underscoring the urgent need for
                adequate relocation and compensation measures. As one displaced
                resident expressed, “I would rather die than leave, but with this
                level of support, I cannot afford to stay in Mapo—I have to move
                far away” (TBS Seoul, 2021). Between 2000 and 2010, as areas were
                redeveloped into New Towns, the resettlement rate among renters
                fell to about 20 percent in Seoul (Kim, 2022).
              </p>
              <p>
                These conditions highlight a deeper inequality embedded within
                the redevelopment process. As rent gap theory suggests,
                redevelopment tends to concentrate in older, low-income
                neighborhoods where the gap between current and potential land
                value is greatest. The communities that have long sustained these
                neighborhoods are therefore those most severely affected.
                Tenants, in particular, are not merely temporary occupants but
                are often deeply rooted in the area, forming social networks and
                everyday practices that constitute the core of local community
                life.
              </p>
              <p>
                Despite this, tenants remain largely excluded from both
                compensation and decision-making processes. In many cases, they
                lack legal standing to negotiate or claim adequate support,
                receiving minimal or no relocation assistance while housing
                prices continue to rise.
              </p>
              <p>
                Addressing this gap requires a shift in how redevelopment is
                governed. Rather than privileging ownership alone, policies should
                recognize long-term residency and incorporate tenants into
                negotiation and decision-making processes. This could include
                granting participation rights based on years of residence and
                ensuring that hearings and compensation frameworks reflect the
                voices of those most affected. Without such changes,
                redevelopment risks continuing as a process that systematically
                excludes the very communities it claims to serve.
              </p>
            </section>

            <section id="conclusion">
              <h2>Conclusion</h2>
              <p>
                Redevelopment-led gentrification in South Korea operates not
                simply as a process of urban improvement, but as a state-led
                mechanism of class restructuring in response to aspirations for
                middle-class wealth accumulation. Framed through the discourse of
                public interest and national economic development, redevelopment
                systematically privileges capital over existing communities. It
                produces a legal, political, and administrative blind spot that
                disproportionately affects tenants and risks pushing the most
                vulnerable to the social margins.
              </p>
              <p>
                Urban space is now a battleground over good locations, higher
                rents, displacement, and gentrification. This competition creates
                a predator-and-prey relationship in urban spaces controlled by
                capital. Areas composed of low-rise housing and long-established
                communities become the next frontier for speculative
                redevelopment, forming a predatory cycle in which marginalized
                populations are repeatedly displaced.
              </p>
              <p>
                As is often said, money has cold blood; the process does not
                adequately consider the impact of displacement and its fatalities.
              </p>
              <p>
                Reflecting on Park’s death reveals that the meaning of home is not
                limited to physical shelter but is also a psychological anchor
                that sustains life. While policy discussions address compensation
                and legal rights for non-owners and tenants, numerous
                redevelopment projects continue to demolish lives without respect.
                At a minimum, structural improvements must include long-term
                residents and tenants in development and decision-making. This
                recommendation remains tangible and can mitigate violence and
                displacement. Ultimately, Park’s case highlights the significant
                influence of urban planning and exposes the fatal consequences of
                gentrification—a process that sacrifices one person’s hope for
                life for another’s wealth accumulation under the name of
                “development for the public.”
              </p>
            </section>

            <section className="footnotes" aria-labelledby="notes-title">
              <h2 id="notes-title">Notes</h2>
              <ol>
                <li id="note-1">Ahyeon-dong is a neighborhood of Mapo-gu in Seoul.</li>
                <li id="note-2">
                  Redevelopment (<i>jaegaebal</i>) and reconstruction (
                  <i>jaegeonchuk</i>) are distinguished by whether a project
                  includes infrastructure improvement. Reconstruction typically
                  rebuilds existing structures where infrastructure is already
                  adequate, while redevelopment upgrades inadequate infrastructure
                  alongside buildings (Media Today, 2018).
                </li>
              </ol>
            </section>

            <section className="references" id="references">
              <h2>References</h2>
              <div className="reference-list">
                <p>Curran, Winifred. 2018. <i>Gender and Gentrification</i>. New York: Routledge. Chapter 2.</p>
                <p>Jung, Chungse. 2023. “From Place of Speculation to Space of Resistance: Transforming Urban Politics on Urban Redevelopment Projects in Seoul.” In <i>The Routledge Handbook of Urban Studies in East Asia</i>, 244–258. London: Routledge. <a href="https://doi.org/10.4324/9781003404736-17">doi.org/10.4324/9781003404736-17</a></p>
                <p>Kim, Sang-Cheol. 2022. “Formation and Deprivation of the Commons.” In <i>Commons Perspectives in South Korea</i>, 136–157. London: Routledge. <a href="https://doi.org/10.4324/9781003224280-12">doi.org/10.4324/9781003224280-12</a></p>
                <p>Lees, Loretta, Tom Slater, and Elvin Wyly. 2008. <i>Gentrification</i>. New York: Routledge. Chapter 1.</p>
                <p>Lees, Loretta, Hyun Bang Shin, and Ernesto López-Morales. 2016. <i>Planetary Gentrification</i>. Cambridge: Polity Press.</p>
                <p>Marcuse, Peter. 1985. “Gentrification, Abandonment and Displacement: Connections, Causes and Policy Responses in New York City.” <i>Journal of Urban and Contemporary Law</i> 28: 195–240.</p>
                <p>Smith, Neil. 1996. <i>The New Urban Frontier: Gentrification and the Revanchist City</i>. London: Routledge.</p>
                <p>Smith, Neil. 2008. <i>Uneven Development: Nature, Capital, and the Production of Space</i>. 3rd ed. Athens: University of Georgia Press.</p>
              </div>

              <h3>News and other sources</h3>
              <div className="reference-list source-links">
                <p><a href="https://namu.wiki/w/%EC%95%84%ED%98%84%EB%89%B4%ED%83%80%EC%9A%B4">Namuwiki. Ahyeon New Town.</a></p>
                <p><a href="https://maps.google.com/">Google Maps. 2026.</a></p>
                <p><a href="http://www.gobalnews.com/news/articleView.html?idxno=26542">Global News. 2018.</a></p>
                <p><a href="https://m.blog.naver.com/khs31383n/221503550830">Naver Blog. 2021.</a></p>
                <p><a href="http://tbs.seoul.kr/news/newsView.do?seq_800=10320262">TBS. 2019.</a></p>
                <p><a href="https://www.redian.org/news/articleView.html?idxno=127809">Redian. 2018.</a></p>
                <p><a href="https://www.mediatoday.co.kr/news/articleView.html?idxno=146367">Media Today. 2018.</a></p>
                <p><a href="https://www.neonet.co.kr/novo-rebank/view/rebuilding/redevelop_analysis/NewTownAhyeon.neo">Neonet. Ahyeon New Town.</a></p>
                <p><a href="https://hiupress.hongik.ac.kr/news/articleView.html?idxno=2539">Hongdae News. 2019.</a></p>
                <p><a href="https://www.joongang.co.kr/article/25013272">JoongAng News. 2021.</a></p>
                <p><a href="https://new.land.naver.com/complexes/104917?ms=2ALvq9,3zgyzG,16&amp;a=APT:ABYG:JGC&amp;e=RETAIL">Naver Real Estate. 2026.</a></p>
                <p><a href="https://www.khan.co.kr/article/201901121702001#ENT">Kyunghyang News. 2018.</a></p>
                <p><a href="https://www.khan.co.kr/article/200911111811425#ENT">Kyunghyang News. 2009.</a></p>
                <p><a href="https://www.donga.com/news/home/article/all/20110823/39753173/2?comm">Dong-A Ilbo. 2011.</a></p>
                <p><a href="https://chunchu.yonsei.ac.kr/news/articleView.html?idxno=25218">Yonsei Chunchu. 2019.</a></p>
              </div>
            </section>
          </div>
        </div>
      </article>

      <footer className="essay-footer">
        <div>
          <p className="footer-kicker">Continue reading</p>
          <p>Explore research on housing, displacement, and urban change.</p>
        </div>
        <a href="/#research">Return to research <span aria-hidden="true">→</span></a>
        <p className="copyright">© {new Date().getFullYear()} Sarah Kim</p>
      </footer>
    </main>
  );
}
