import { useEffect, useState } from 'react'
import LeafScan from './components/LeafScan.jsx'
import { profile, projects, experience, skills, education, certifications } from './data/resume.js'

const sections = [
  { id: 'work', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

function useActiveSection() {
  const [active, setActive] = useState(null)
  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
  return active
}

export default function App() {
  const active = useActiveSection()

  return (
    <div className="page">
      <a className="skip" href="#work">Skip to projects</a>

      <aside className="rail">
        <a className="rail__name" href="#top">Madhanprasath&nbsp;S</a>
        <nav aria-label="Sections">
          <ul>
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} aria-current={active === s.id ? 'true' : undefined}>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="rail__cv" href={profile.resume} download>Download résumé</a>
      </aside>

      <main id="top">
        <header className="hero">
          <h1>Madhanprasath S</h1>
          <div className="hero__text">
            <p className="hero__role">{profile.role} in {profile.location}</p>
            <p className="hero__intro">{profile.intro}</p>
            <div className="hero__actions">
              <a className="btn btn--solid" href={`mailto:${profile.email}`}>Email me</a>
              <a className="btn" href={profile.resume} download>Download résumé</a>
            </div>
          </div>
          <LeafScan />
        </header>

        <section className="about" aria-label="About">
          {profile.about.map((p) => <p key={p}>{p}</p>)}
        </section>

        <section id="work" className="section">
          <h2>Projects</h2>
          <div className="projects">
            {projects.map((p) => (
              <article key={p.title} className="project">
                <div className="project__head">
                  <h3>{p.title}</h3>
                  {p.year && <span className="project__year">{p.year}</span>}
                </div>
                <p className="project__sub">{p.subtitle}</p>
                {p.badge && <p className="badge">{p.badge}</p>}
                <ul className="points">
                  {p.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
                <ul className="tags" aria-label="Built with">
                  {p.stack.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <h2>Experience</h2>
          {experience.map((x) => (
            <article key={x.company} className="job">
              <div className="project__head">
                <h3>{x.role}</h3>
                <span className="project__year">{x.dates}</span>
              </div>
              <p className="project__sub">{x.company}, {x.place}</p>
              <ul className="points">
                {x.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </article>
          ))}
        </section>

        <section id="skills" className="section">
          <h2>Skills</h2>
          <dl className="skills">
            {skills.map((s) => (
              <div key={s.group} className="skills__row">
                <dt>{s.group}</dt>
                <dd>{s.items.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="education" className="section">
          <h2>Education</h2>
          <div className="project__head">
            <h3>{education.degree}</h3>
            <span className="project__year">{education.dates}</span>
          </div>
          <p className="project__sub">{education.school}. CGPA {education.cgpa}</p>

          <h3 className="certs__title">Certifications</h3>
          <ul className="certs">
            {certifications.map((c) => (
              <li key={c.name}>
                <strong>{c.name}</strong>
                <span>{c.issuer}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="section contact">
          <h2>Let's talk</h2>
          <p>I'm open to software engineering roles, full-time or internship. Email is the fastest way to reach me.</p>
          <a className="contact__email" href={`mailto:${profile.email}`}>{profile.email}</a>
          <ul className="contact__links">
            <li><a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a></li>
            <li><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a></li>
          </ul>
        </section>

        <footer className="foot">
          <p>© {new Date().getFullYear()} Madhanprasath S. Built with React.</p>
        </footer>
      </main>
    </div>
  )
}
