type ProjectCardProps = {
  title: string
  status: string
  description: string
  technologies: string[]
  features: string[]
  githubUrl: string
  image?: string
  pipeline?: string[]
  downloadUrl?: string
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
  downloadUrl,
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
          <img src={image} alt={`Captura real de ${title}`} loading="lazy" />
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

      <div className="project-actions">
        {downloadUrl && <a href={downloadUrl} className="project-link project-link-primary" target="_blank" rel="noopener noreferrer">Descargar para Windows</a>}
        <a href={githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">Ver código en GitHub</a>
      </div>
    </article>
  )
}

export default ProjectCard