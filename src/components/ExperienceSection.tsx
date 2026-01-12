import type { FC } from 'react';

export const ExperienceSection: FC = () => {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Work Experience</h2>
      <div className="card-grid">
        <article className="card">
          <header className="card-header">
            <h3>Software Development Intern</h3>
            <span className="pill">Prodigy InfoTech · 2024</span>
          </header>
          <p>
            Worked on real-world programming tasks and mini projects, enhancing problem-solving skills using
            C, C++, Java, and web technologies.
          </p>
          <ul className="bullet-list">
            <li>Built and debugged features for web applications.</li>
            <li>Collaborated with mentors to follow best practices.</li>
            <li>Gained hands-on exposure to the full software development lifecycle.</li>
          </ul>
        </article>
      </div>
    </section>
  );
};

