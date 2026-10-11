import { useEffect, useState } from "react";

import "./ember.css";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Features", href: "#showcase" },
  { label: "About", href: "#about" },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="ember-arrow"
      viewBox="0 0 20 20"
      fill="none"
    >
      {diagonal ? (
        <path d="M5 15 15 5M6 5h9v9" />
      ) : (
        <path d="M3.5 10h12m-5-5 5 5-5 5" />
      )}
    </svg>
  );
}

function EmberMark() {
  return (
    <a className="ember-wordmark" href="#home" aria-label="EMBER home">
      EMBER<span className="ember-wordmark-dot">.</span>
    </a>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="ember-header">
      <div className="ember-nav-shell">
        <EmberMark />
        <nav className="ember-nav-links" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="ember-nav-cta" href="/app">
          Get started <Arrow diagonal />
        </a>
        <button
          className={`ember-menu-toggle${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="ember-mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>
      <nav
        className={`ember-mobile-menu${menuOpen ? " is-open" : ""}`}
        id="ember-mobile-menu"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {navigation.map((item) => (
          <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} tabIndex={menuOpen ? 0 : -1}>
            {item.label}<Arrow diagonal />
          </a>
        ))}
        <a className="ember-mobile-cta" href="/app" onClick={() => setMenuOpen(false)} tabIndex={menuOpen ? 0 : -1}>
          Get started<Arrow diagonal />
        </a>
      </nav>
    </header>
  );
}

function HeroArtwork() {
  return (
    <div className="ember-hero-art" aria-label="Sculptural copper forms illuminated in a dark studio" role="img">
      <div className="hero-art-halo" />
      <svg viewBox="0 0 760 740" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="hero-copper" x1="219" y1="89" x2="569" y2="593" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFE1B4" />
            <stop offset=".17" stopColor="#E99656" />
            <stop offset=".42" stopColor="#803D27" />
            <stop offset=".68" stopColor="#D36F3B" />
            <stop offset="1" stopColor="#391C16" />
          </linearGradient>
          <linearGradient id="hero-copper-side" x1="524" y1="199" x2="312" y2="540" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFCC8A" />
            <stop offset=".3" stopColor="#B45B35" />
            <stop offset=".73" stopColor="#54281D" />
            <stop offset="1" stopColor="#291712" />
          </linearGradient>
          <linearGradient id="hero-ribbon" x1="180" y1="561" x2="560" y2="210" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5B281B" />
            <stop offset=".5" stopColor="#E4844C" />
            <stop offset=".76" stopColor="#FFC88C" />
            <stop offset="1" stopColor="#8A4329" />
          </linearGradient>
          <radialGradient id="hero-orb" cx="0" cy="0" r="1" gradientTransform="matrix(91 119 -111 85 302 183)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFE3B9" />
            <stop offset=".25" stopColor="#F2A05C" />
            <stop offset=".7" stopColor="#A54F30" />
            <stop offset="1" stopColor="#49241B" />
          </radialGradient>
          <filter id="hero-shadow" x="54" y="63" width="653" height="643" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
            <feGaussianBlur stdDeviation="24" />
          </filter>
        </defs>
        <ellipse cx="386" cy="592" fill="#0C0807" opacity=".68" rx="247" ry="54" filter="url(#hero-shadow)" />
        <path d="M173 474c-53-63-62-138-15-196 42-52 103-61 155-41 62 24 109 77 170 78 54 1 94-37 123-70 11 89-27 152-94 178-62 25-125-1-188-22-68-23-119-8-151 73Z" fill="url(#hero-ribbon)" />
        <path d="M198 481c43-80 101-127 171-141 77-15 119 18 171 10 39-6 65-28 89-65-4 112-70 196-174 205-87 8-155-43-257-9Z" fill="url(#hero-copper)" />
        <path d="M225 491c88-41 160-34 231 2 41 21 77 27 128 8-42 67-112 102-194 90-62-9-108-51-165-47-34 2-59 17-83 34 16-39 42-68 83-87Z" fill="#9C4A2A" />
        <path d="M354 148c48-52 112-66 165-40 51 25 70 79 49 133-22 57-78 81-135 68-53-13-91-58-92-108-.1-21 4-37 13-53Z" fill="url(#hero-orb)" />
        <path d="M369 147c30-28 70-40 105-31" stroke="#FFF0D8" strokeLinecap="round" strokeOpacity=".76" strokeWidth="3" />
        <path d="M194 413c78-74 146-90 218-74 68 15 109 51 174 37" stroke="#FFD39B" strokeLinecap="round" strokeOpacity=".55" strokeWidth="2" />
        <path d="M242 529c56-23 102-17 153 5" stroke="#FFC07A" strokeLinecap="round" strokeOpacity=".42" strokeWidth="2" />
        <circle cx="159" cy="275" r="2" fill="#F4B16C" opacity=".8" />
        <circle cx="581" cy="183" r="2" fill="#F4B16C" opacity=".55" />
        <circle cx="621" cy="421" r="1.5" fill="#F4B16C" opacity=".7" />
      </svg>
      <div className="hero-art-caption">
        <span>Form study 01</span>
        <span>Material / light / motion</span>
      </div>
      <div className="hero-art-index" aria-hidden="true">01 <span>—</span> 03</div>
    </div>
  );
}

function Hero() {
  return (
    <section className="ember-hero" id="home">
      <div className="ember-hero-copy">
        <p className="ember-eyebrow"><span /> Designed for what’s next</p>
        <h1>Where bold ideas become <em>extraordinary.</em></h1>
        <p className="ember-hero-description">
          A new perspective on what’s possible. Thoughtful by nature, fearless
          by design, made to move you forward.
        </p>
        <div className="ember-hero-actions">
          <a className="ember-button ember-button-primary" href="#experience">
            Explore the experience <Arrow />
          </a>
          <a className="ember-text-link" href="#about">
            Discover more <span>↓</span>
          </a>
        </div>
        <div className="ember-hero-note">
          <span className="ember-note-rule" />
          <span>Independent thinking.<br />Unmistakable feeling.</span>
        </div>
      </div>
      <HeroArtwork />
      <a className="ember-scroll-cue" href="#experience" aria-label="Scroll to experience">
        <span /> Scroll to explore
      </a>
    </section>
  );
}

function ExperienceArtwork({ kind }: { kind: "innovation" | "craft" | "performance" }) {
  return (
    <div className={`experience-art experience-art-${kind}`} aria-hidden="true">
      {kind === "innovation" && (
        <>
          <div className="innovation-orbit orbit-one" />
          <div className="innovation-orbit orbit-two" />
          <div className="innovation-orb" />
          <div className="innovation-glint" />
        </>
      )}
      {kind === "craft" && (
        <>
          <div className="craft-plinth plinth-back" />
          <div className="craft-plinth plinth-front" />
          <div className="craft-ring" />
          <div className="craft-highlight" />
        </>
      )}
      {kind === "performance" && (
        <>
          <div className="performance-glow" />
          <div className="performance-arc arc-back" />
          <div className="performance-arc arc-front" />
          <div className="performance-orb" />
          <div className="performance-streak" />
        </>
      )}
      <span className="experience-art-index">
        {kind === "innovation" ? "01" : kind === "craft" ? "02" : "03"}
        <span> / 03</span>
      </span>
    </div>
  );
}

const experiences = [
  {
    number: "01",
    name: "Innovation",
    headline: "Think beyond the ordinary.",
    description: "A different point of view can change everything. We make room for the ideas that haven’t found their shape yet.",
    kind: "innovation" as const,
  },
  {
    number: "02",
    name: "Craftsmanship",
    headline: "Every detail has a purpose.",
    description: "Considered, never complicated. A quiet attention to the details that make the whole feel just right.",
    kind: "craft" as const,
  },
  {
    number: "03",
    name: "Performance",
    headline: "Built to move you forward.",
    description: "Beautiful is only the beginning. Everything we make is here to take you somewhere meaningful.",
    kind: "performance" as const,
  },
];

function Experience() {
  return (
    <section className="ember-experience ember-section" id="experience">
      <div className="ember-section-heading ember-reveal">
        <div>
          <p className="ember-eyebrow"><span /> The things that set us apart</p>
          <h2>A better kind<br />of <em>possibility.</em></h2>
        </div>
        <p className="ember-section-intro">
          Not more for the sake of more. Just the right things, done with
          intention—and made to make a difference.
        </p>
      </div>
      <div className="ember-experience-grid">
        {experiences.map((experience) => (
          <a className="experience-card ember-reveal" href="#showcase" key={experience.name}>
            <ExperienceArtwork kind={experience.kind} />
            <div className="experience-card-copy">
              <div className="experience-card-kicker">
                <span>{experience.number} / {experience.name}</span>
                <span className="experience-card-arrow"><Arrow diagonal /></span>
              </div>
              <h3>{experience.headline}</h3>
              <p>{experience.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function ShowcaseArtwork() {
  return (
    <div className="showcase-art" role="img" aria-label="A luminous copper sculpture balanced in a pool of warm light">
      <div className="showcase-backlight" />
      <div className="showcase-sculpture">
        <div className="showcase-sculpture-orb" />
        <div className="showcase-sculpture-loop" />
        <div className="showcase-sculpture-base" />
      </div>
      <div className="showcase-floor-line" />
      <span className="showcase-art-label">An exercise in restraint</span>
      <span className="showcase-art-coordinates">35° 41′ 22″ N&nbsp;&nbsp; 139° 41′ 30″ E</span>
    </div>
  );
}

function Showcase() {
  return (
    <section className="ember-showcase ember-section" id="showcase">
      <div className="showcase-heading ember-reveal">
        <p className="ember-eyebrow"><span /> Made to be felt</p>
        <h2>More than a<br /><em>first impression.</em></h2>
      </div>
      <ShowcaseArtwork />
      <div className="showcase-bottom ember-reveal">
        <p>
          The best things don’t need to announce themselves. They reveal a
          little more with every look, every touch, every moment.
        </p>
        <a className="ember-underlined-link" href="#about">A closer look <Arrow diagonal /></a>
      </div>
    </section>
  );
}

function PhilosophyArtwork() {
  return (
    <div className="philosophy-art" role="img" aria-label="Abstract layered terracotta and amber forms in soft afternoon light">
      <div className="philosophy-art-light" />
      <div className="philosophy-shape philosophy-shape-one" />
      <div className="philosophy-shape philosophy-shape-two" />
      <div className="philosophy-shape philosophy-shape-three" />
      <span>Form follows feeling&nbsp; / &nbsp;No. 08</span>
    </div>
  );
}

function Philosophy() {
  return (
    <section className="ember-philosophy ember-section" id="about">
      <PhilosophyArtwork />
      <div className="philosophy-copy ember-reveal">
        <p className="ember-eyebrow"><span /> A little about how we see things</p>
        <h2>Great design isn’t decoration. It’s the feeling that <em>everything belongs.</em></h2>
        <p className="philosophy-description">
          We believe the most remarkable experiences feel effortless—not
          because they happened by chance, but because someone cared enough to
          get every detail right.
        </p>
        <a className="ember-underlined-link" href="#closing">Get to know us <Arrow diagonal /></a>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="ember-closing ember-section" id="closing">
      <div className="closing-glow" aria-hidden="true" />
      <div className="closing-copy ember-reveal">
        <p className="ember-eyebrow"><span /> Your next chapter starts here</p>
        <h2>Ready to create<br />something <em>remarkable?</em></h2>
        <p>The next great idea starts with a single step.</p>
        <a className="ember-button ember-button-light" href="/app">
          Let’s get started <Arrow />
        </a>
      </div>
      <div className="closing-orbit closing-orbit-one" aria-hidden="true" />
      <div className="closing-orbit closing-orbit-two" aria-hidden="true" />
      <span className="closing-aside" aria-hidden="true">Make room for what’s next.</span>
    </section>
  );
}

function Footer() {
  return (
    <footer className="ember-footer">
      <div className="ember-footer-main">
        <div className="footer-brand">
          <EmberMark />
          <p>Independent thinking.<br />Unmistakable feeling.</p>
        </div>
        <nav aria-label="Footer navigation">
          {navigation.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}
        </nav>
        <div className="footer-social">
          <a href="mailto:hello@ember.studio" aria-label="Email EMBER">Email <Arrow diagonal /></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram <Arrow diagonal /></a>
        </div>
      </div>
      <div className="ember-footer-bottom">
        <span>© {new Date().getFullYear()} EMBER STUDIO. MADE WITH INTENTION.</span>
        <a href="#home">Back to the beginning ↑</a>
      </div>
    </footer>
  );
}

export default function EmberHome() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".ember-reveal");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -32px 0px" },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="ember-page">
      <a className="ember-skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Experience />
        <Showcase />
        <Philosophy />
        <Closing />
      </main>
      <Footer />
    </div>
  );
}
