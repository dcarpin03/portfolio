import { useState } from 'react'
import VideoDialog from './VideoDialog'

type ProjectCardProps = {
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  image: string
  imageAlt: string
  downloadUrl?: string
  demoVideo?: string
}

function ProjectCard({ title, description, technologies, githubUrl, image, imageAlt, downloadUrl, demoVideo }: ProjectCardProps) {
  const [demoOpen, setDemoOpen] = useState(false)

  return (
    <article className="project-card">
      {demoVideo ? (
        <button type="button" className="project-image project-video-trigger" onClick={() => setDemoOpen(true)} aria-label={`Ver demostración de ${title}`} aria-haspopup="dialog">
          <img src={image} alt={imageAlt} loading="lazy" />
          <span className="project-play"><span aria-hidden="true">▶</span> Ver demo</span>
        </button>
      ) : (
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-image" aria-label={`Ver proyecto ${title} en GitHub`}>
          <img src={image} alt={imageAlt} loading="lazy" />
        </a>
      )}
      <div className="project-card-body">
        <h3>{title}</h3>
        <div className="project-technologies">
          {technologies.map(technology => <span key={technology}>{technology}</span>)}
        </div>
        <p className="project-description">{description}</p>
        <div className="project-actions">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">Ver código <span aria-hidden="true">↗</span></a>
          {downloadUrl && <a href={downloadUrl} target="_blank" rel="noopener noreferrer">Descargar <span aria-hidden="true">↓</span></a>}
        </div>
      </div>
      {demoVideo && demoOpen && <VideoDialog title={title} src={demoVideo} onClose={() => setDemoOpen(false)} />}
    </article>
  )
}

export default ProjectCard
