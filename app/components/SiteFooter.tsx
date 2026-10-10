import site from "../../content/site.json";
import cv from "../../content/cv.json";

export default function SiteFooter() {
  return (
    <footer>
      <div>
        <p className="footer-kicker">{site.footer.headline}</p>
        <p>{site.footer.description}</p>
        <div className="footer-links">
          {cv.email && <a href={`mailto:${cv.email}`}>Email</a>}
          {cv.linkedin && <a href={cv.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
          <a href="/cv/">CV</a>
        </div>
      </div>
      <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
      <p className="copyright">© {new Date().getFullYear()} Sarah Kim</p>
    </footer>
  );
}
