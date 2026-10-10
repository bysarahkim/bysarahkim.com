import type { Metadata } from "next";
import cv from "../../content/cv.json";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Curriculum Vitae — Sarah Kim",
  description: "Sarah Kim’s education, research, presentations, awards, professional experience, and research methods.",
  alternates: { canonical: "/cv/" },
};

export default function CVPage() {
  return (
    <main className="cv-page">
      <SiteHeader />
      <header className="cv-hero">
        <p className="eyebrow">Curriculum Vitae · {cv.updated}</p>
        <h1>{cv.name}</h1>
        <p className="cv-tagline">{cv.tagline}</p>
        <div className="cv-contact">
          {cv.email && <a href={`mailto:${cv.email}`}>{cv.email}</a>}
          {cv.linkedin && <a href={cv.linkedin} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>}
          {cv.website && <a href={cv.website}>bysarahkim.com</a>}
        </div>
        <a className="writing-card-link thesis-link" href={cv.pdf} download>Download CV (PDF) <span aria-hidden="true">↓</span></a>
      </header>
      <div className="cv-layout">
        <nav className="cv-index" aria-label="CV sections">
          {cv.sections.map(section => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}
        </nav>
        <div className="cv-content">
          {cv.sections.map(section => (
            <section className="cv-section" id={section.id} key={section.id} aria-labelledby={`${section.id}-title`}>
              <h2 id={`${section.id}-title`}>{section.title}</h2>
              {section.entries.map((entry, i) => (
                <div className="cv-entry" key={i}>
                  {entry.title && <h3>{entry.href ? <a href={entry.href} target={entry.href.startsWith("http") || entry.href.endsWith(".pdf") ? "_blank" : undefined} rel="noreferrer">{entry.title}</a> : entry.title}</h3>}
                  {entry.meta && <p className="cv-meta">{entry.meta}</p>}
                  {entry.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                </div>
              ))}
            </section>
          ))}
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}
