import type { FC, ReactNode } from 'react';
import { useEffect, useState } from 'react';
// import { HeroCanvas } from './components/HeroCanvas';
import { ExperienceSection } from './components/ExperienceSection';
import { SiC, SiCplusplus, SiHtml5, SiCss3, SiJavascript, SiMongodb, SiExpress, SiReact, SiNodedotjs, SiDjango, SiFlask, SiMysql, SiLinux } from 'react-icons/si';
import { FaJava, FaNetworkWired, FaUsers, FaTrophy, FaSync, FaBullhorn, FaGithub, FaEnvelope, FaPhone, FaLinkedin, FaDownload } from 'react-icons/fa';

const Section: FC<{ id: string; title: string; children: ReactNode }> = ({ id, title, children }) => (
  <section id={id} className="section">
    <h2 className="section-title">{title}</h2>
    {children}
  </section>
);

export const App: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id: string) => {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/40c8a163-e936-4397-85c7-ab3ad96fdbc1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionId: 'debug-session',
        runId: 'initial',
        hypothesisId: 'H1',
        location: 'App.tsx:scrollTo',
        message: 'scrollTo called',
        data: { id },
        timestamp: Date.now(),
      }),
    }).catch(() => { });
    // #endregion agent log
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="app">
      {isLoading && (
        <div className="loader">
          <div className="loader-glow" />
          <div className="loader-orbit">
            <div className="loader-dot" />
            <div className="loader-dot loader-dot-delay" />
          </div>
          <div className="loader-text">
            <span className="logo loader-logo-text">TK</span>
            <span className="loader-name">Thulasi Krishnan S</span>
            <span className="loader-role">Full-Stack Developer</span>
          </div>
        </div>
      )}
      {!isLoading && (
        <>
          <header className="nav">
            <div className="nav-left">
              <span className="logo">TK</span>
              <span className="logo-text">Thulasi Krishnan S</span>
            </div>
            <nav className="nav-links">
              <button onClick={() => scrollTo('about')}>About</button>
              <button onClick={() => scrollTo('experience')}>Experience</button>
              <button onClick={() => scrollTo('projects')}>Projects</button>
              <button onClick={() => scrollTo('education')}>Education</button>
              <button onClick={() => scrollTo('skills')}>Skills</button>
              <button onClick={() => scrollTo('activities')}>Activities</button>
            </nav>
          </header>

          <main>
            <section className="hero">
              <div className="hero-left">
                <p className="overline">Full-Stack Developer · MERN · Django · Flask</p>
                <h1>
                  Building thoughtful
                  <span className="gradient-text"> web experiences</span>
                </h1>
                <p className="hero-subtitle">
                  Computer Science Engineering student with a strong interest in full-stack development. Passionate
                  about crafting performant, reliable applications and continuously learning new technologies.
                </p>
                <div className="hero-actions">
                  <button onClick={() => scrollTo('projects')} className="btn primary">
                    View Projects
                  </button>
                  <button onClick={() => scrollTo('contact')} className="btn ghost">
                    Get in touch
                  </button>
                  <a href="/autoCV.pdf" download="Thulasi_Krishnan_Resume.pdf" className="btn ghost">
                    <FaDownload /> Resume
                  </a>
                </div>
                <div className="hero-meta">
                  <span>National Engineering College · CGPA 8.0 / 10</span>
                  <span>Based in Kovilpatti, Tamil Nadu</span>
                </div>
              </div>
              <div className="hero-canvas">
                <img src="/photo.jpeg" alt="Thulasi Krishnan S" className="hero-image" />
              </div>
            </section>

            <Section id="about" title="About">
              <p>
                I am a motivated Computer Science Engineering student with hands-on experience in building web
                applications using MERN, Django, and Flask. I enjoy translating real-world problems into elegant
                technical solutions, and I&apos;m actively involved in sports and social service activities that help
                me grow as a team player and leader.
              </p>
            </Section>

            <ExperienceSection />

            <Section id="projects" title="Projects">
              <div className="card-grid">
                <a
                  href="https://college-transport-system.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="card"
                >
                  <header className="card-header">
                    <h3>Transport Management System</h3>
                    <span className="pill">MERN Stack</span>
                  </header>
                  <p>
                    Full-stack system to manage vehicles, routes, and schedules using MongoDB, Express.js, React, and
                    Node.js.
                  </p>
                </a>

                <article className="card">
                  <header className="card-header">
                    <h3>Theatre Booking System</h3>
                    <span className="pill">Django</span>
                  </header>
                  <p>
                    Web-based theatre booking with seat selection, show scheduling, and user authentication in Django
                    and SQLite.
                  </p>
                </article>

                <article className="card">
                  <header className="card-header">
                    <h3>Employee Payslip Generation</h3>
                    <span className="pill">C++</span>
                  </header>
                  <p>
                    Console application to calculate salaries, manage deductions, and generate payslips using C++.
                  </p>
                </article>
              </div>
            </Section>

            <Section id="education" title="Education">
              <div className="card-grid">
                <article className="card">
                  <header className="card-header">
                    <h3>B.E. Computer Science and Engineering</h3>
                    <span className="pill">2023 – Present</span>
                  </header>
                  <p>National Engineering College</p>
                  <p>CGPA: 8.0 / 10.0</p>
                </article>
              </div>
            </Section>

            <Section id="skills" title="Skills">
              <div className="skills-grid">
                <div>
                  <h3 className="small-heading">Programming Languages</h3>
                  <div className="skill-icons">
                    <div className="skill-icon">
                      <SiC size={40} />
                      <span>C</span>
                    </div>
                    <div className="skill-icon">
                      <SiCplusplus size={40} />
                      <span>C++</span>
                    </div>
                    <div className="skill-icon">
                      <FaJava size={40} />
                      <span>Java</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="small-heading">Web Technologies</h3>
                  <div className="skill-icons">
                    <div className="skill-icon">
                      <SiHtml5 size={40} />
                      <span>HTML</span>
                    </div>
                    <div className="skill-icon">
                      <SiCss3 size={40} />
                      <span>CSS</span>
                    </div>
                    <div className="skill-icon">
                      <SiJavascript size={40} />
                      <span>JavaScript</span>
                    </div>
                    <div className="skill-icon">
                      <SiMongodb size={40} />
                      <span>MongoDB</span>
                    </div>
                    <div className="skill-icon">
                      <SiExpress size={40} />
                      <span>Express</span>
                    </div>
                    <div className="skill-icon">
                      <SiReact size={40} />
                      <span>React</span>
                    </div>
                    <div className="skill-icon">
                      <SiNodedotjs size={40} />
                      <span>Node.js</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="small-heading">Frameworks</h3>
                  <div className="skill-icons">
                    <div className="skill-icon">
                      <SiDjango size={40} />
                      <span>Django</span>
                    </div>
                    <div className="skill-icon">
                      <SiFlask size={40} />
                      <span>Flask</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="small-heading">Databases</h3>
                  <div className="skill-icons">
                    <div className="skill-icon">
                      <SiMysql size={40} />
                      <span>SQL</span>
                    </div>
                    <div className="skill-icon">
                      <SiMongodb size={40} />
                      <span>MongoDB</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="small-heading">Core Concepts</h3>
                  <div className="skill-icons">
                    <div className="skill-icon">
                      <FaNetworkWired size={40} />
                      <span>Data Structures</span>
                    </div>
                    <div className="skill-icon">
                      <FaNetworkWired size={40} />
                      <span>Computer Networks</span>
                    </div>
                    <div className="skill-icon">
                      <SiLinux size={40} />
                      <span>Operating Systems</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="small-heading">Soft Skills</h3>
                  <div className="skill-icons">
                    <div className="skill-icon">
                      <FaBullhorn size={40} />
                      <span>Communication</span>
                    </div>
                    <div className="skill-icon">
                      <FaUsers size={40} />
                      <span>Teamwork</span>
                    </div>
                    <div className="skill-icon">
                      <FaTrophy size={40} />
                      <span>Leadership</span>
                    </div>
                    <div className="skill-icon">
                      <FaSync size={40} />
                      <span>Adaptability</span>
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            <Section id="activities" title="Activities & Volunteering">
              <p>NSS Volunteer engaged in social service and community development activities.</p>
              <h3 className="small-heading mt">Participation</h3>
              <ul className="bullet-list">
                <li>TECTRIX 2023 – SIMATS</li>
                <li>SRISHIT 2K25 – PSG</li>
                <li>Flipkart GRID 6.0 – Unstop</li>
                <li>Inter-College technical events</li>
              </ul>
            </Section>

            <Section id="contact" title="Let&apos;s Connect">
              <p>
                I&apos;m open to internships, full-stack development roles, and exciting collaborations. Feel free to
                reach out for opportunities or just to say hi.
              </p>
              <div className="contact-grid">
                <a href="mailto:thulasiten15@gmail.com" className="contact-icon" aria-label="Email">
                  <FaEnvelope size={28} />
                </a>
                <a href="tel:+919003041805" className="contact-icon" aria-label="Phone">
                  <FaPhone size={28} />
                </a>
                <a
                  href="https://www.linkedin.com/in/thulasi-krishnan-s-14260728a/"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-icon"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={28} />
                </a>
                <a
                  href="https://github.com/ThulasiKrishnanS"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-icon"
                  aria-label="GitHub"
                >
                  <FaGithub size={28} />
                </a>
              </div>
            </Section>
          </main>

          <footer className="footer">
            <span>© {new Date().getFullYear()} Thulasi Krishnan Sankar </span>
          </footer>
        </>
      )}
    </div>
  );
};

