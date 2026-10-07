const technologyGroups = [
  {
    title: 'Lenguajes',
    technologies: ['Python', 'Java', 'C', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Backend y datos',
    technologies: [
      'PostgreSQL',
      'DuckDB',
      'Supabase',
      'Pydantic',
      'Quarkus',
    ],
  },
  {
    title: 'Frontend y aplicaciones',
    technologies: ['React', 'Flutter'],
  },
  {
    title: 'DevOps y herramientas',
    technologies: ['Git', 'Docker', 'Podman'],
  },
  {
    title: 'Actualmente profundizando en',
    technologies: [
      'Machine Learning',
      'Embeddings',
      'Semantic Classification',
      'LLMs',
    ],
  },
]

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
        {technologyGroups.map((group) => (
          <div key={group.title} className="technology-group">
            <h3>{group.title}</h3>

            <div className="technology-list">
              {group.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Technologies