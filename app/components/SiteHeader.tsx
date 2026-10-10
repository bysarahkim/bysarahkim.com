export default function SiteHeader({ home = false }: { home?: boolean }) {
  const prefix = home ? "" : "/";
  return (
    <header className="site-header" id="top">
      <a className="wordmark" href={home ? "#top" : "/"} aria-label="Sarah Kim, home">Sarah Kim</a>
      <nav aria-label="Primary navigation">
        <a href={`${prefix}#about`}>About</a>
        <a href={`${prefix}#research`}>Research</a>
        <a href={`${prefix}#projects`}>Projects</a>
        <a href="/cv/">CV</a>
        <a href={`${prefix}#photography`}>Photography</a>
      </nav>
    </header>
  );
}
