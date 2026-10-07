type ProjectCardProps = {
  title: string
  status: string
  description: string
  technologies: string[]
  features: string[]
  githubUrl: string
  image?: string
  pipeline?: string[]
}

function ProjectCard({
  title,
  status,
  description,
  technologies,
  features,
  githubUrl,
  image,
  pipeline,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card-header">
        <div>
          <p className="project-status">{status}</p>
          <h3>{title}</h3>
        </div>
      </div>

      {image && (
        <div className="project-image">
          <img src={image} alt={`Captura de ${title}`} />
        </div>
      )}

      <p className="project-description">{description}</p>

      <div className="project-technologies">
        {technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>

      <ul className="project-features">
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      {pipeline && (
        <div className="project-pipeline">
          {pipeline.map((step, index) => (
            <div key={step} className="pipeline-step">
              <span>{step}</span>

              {index < pipeline.length - 1 && (
                <span className="pipeline-arrow">↓</span>
              )}
            </div>
          ))}
        </div>
      )}

      <a
        href={githubUrl}
        className="project-link"
        target="_blank"
        rel="noreferrer"
      >
        Ver en GitHub
      </a>
    </article>
  )
}

export default ProjectCard