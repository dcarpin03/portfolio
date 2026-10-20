import TechnologyIcon from './TechnologyIcon'
import type { IconName } from './TechnologyIcon'

const technologyGroups: { title: string; description: string; icon: IconName; technologies: string[] }[] = [
  {
    title: 'Lenguajes',
    description: 'Lenguajes de programación que utilizo en mis proyectos.',
    icon: 'code',
    technologies: ['Python', 'Java', 'C', 'JavaScript', 'TypeScript', 'PHP'],
  },
  {
    title: 'Backend y datos',
    description: 'Bases de datos y tecnologías para el desarrollo backend.',
    icon: 'database',
    technologies: ['PostgreSQL', 'DuckDB', 'Supabase', 'Firebase', 'Pydantic', 'Quarkus'],
  },
  {
    title: 'Frontend y aplicaciones',
    description: 'Tecnologías para el desarrollo de interfaces y aplicaciones.',
    icon: 'monitor',
    technologies: ['React', 'Angular', 'Flutter'],
  },
  {
    title: 'DevOps y herramientas',
    description: 'Herramientas para desarrollo, despliegue y productividad.',
    icon: 'gear',
    technologies: ['Git', 'Docker', 'Podman'],
  },
  {
    title: 'Actualmente profundizando en',
    description: 'Tecnologías en las que me estoy formando y explorando actualmente.',
    icon: 'chart',
    technologies: ['Machine Learning', 'Embeddings', 'Semantic Classification', 'LLMs'],
  },
]

const learningIcons: Record<string, IconName> = {
  'Machine Learning': 'brain',
  Embeddings: 'layers',
  'Semantic Classification': 'nodes',
  LLMs: 'sparkles',
}

function Technologies() {
  return (
    <section id="technologies" className="technologies-section">
      <div className="section-heading">
        <p>Stack</p>
        <h2>Tecnologías</h2>
        <span>
          Tecnologías con las que he trabajado o que estoy utilizando
          actualmente en proyectos y formación.
        </span>
      </div>
      <div className="technology-groups">
        {technologyGroups.map(group => (
          <article key={group.title} className="technology-group">
            <div className="technology-group-heading">
              <div className="technology-category-icon"><TechnologyIcon name={group.icon} /></div>
              <div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>
            </div>
            <ul className="technology-list">
              {group.technologies.map(technology => (
                <li key={technology}>
                  {learningIcons[technology] ? <TechnologyIcon name={learningIcons[technology]} /> : (
                    <img
                      src={`${import.meta.env.BASE_URL}icons/technologies/${technology.toLowerCase()}.svg`}
                      alt=""
                      width="28"
                      height="28"
                      loading="lazy"
                    />
                  )}
                  {technology}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Technologies
