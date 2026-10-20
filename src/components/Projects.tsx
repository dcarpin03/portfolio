import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'FocusDesk',
    description: 'Aplicación de escritorio con Pomodoro, gestión de tareas, historial de sesiones y persistencia local.',
    technologies: ['Electron', 'React', 'TypeScript'],
    image: `${import.meta.env.BASE_URL}images/projects/focusdesk-demo.gif`,
    imageAlt: 'Demostración animada de FocusDesk con el temporizador Pomodoro, tareas e historial de sesiones',
    githubUrl: 'https://github.com/dcarpin03/focusdesk',
    downloadUrl: 'https://github.com/dcarpin03/focusdesk/releases/tag/v1.0.0',
  },
  {
    title: 'Personal Discovery Engine',
    description: 'Pipeline de noticias con Python, validación y almacenamiento en DuckDB para analizar y priorizar contenido.',
    technologies: ['Python', 'DuckDB', 'Pydantic'],
    image: `${import.meta.env.BASE_URL}images/projects/personal-discovery-engine-cover.webp`,
    imageAlt: 'Portada de Personal Discovery Engine con un panel de análisis y gráficos de datos',
    githubUrl: 'https://github.com/dcarpin03/personal-discovery-engine-showcase',
  },
  {
    title: 'Ant Colony Lab',
    description: 'Simulación interactiva de hormigas autónomas que buscan comida y se comunican mediante feromonas.',
    technologies: ['Python', 'Pygame', 'Simulación'],
    image: `${import.meta.env.BASE_URL}images/projects/ant-colony-lab-demo.gif`,
    imageAlt: 'Simulación animada de Ant Colony Lab con hormigas, comida, obstáculos y rastros de feromonas',
    githubUrl: 'https://github.com/dcarpin03/ant-colony-lab',
  },
  {
    title: 'Multi-Agent Travel Recommender',
    description: 'Recomendación de itinerarios mediante dos agentes especializados, Agno, Pandas y datos turísticos.',
    technologies: ['Python', 'Agno', 'Pandas'],
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Imagen ilustrativa de mapa y elementos de viaje',
    githubUrl: 'https://github.com/dcarpin03/multi-agent-travel-recommender',
  },
]

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-heading projects-heading">
        <div>
          <p>Selección de trabajos</p>
          <h2>Proyectos destacados</h2>
        </div>
        <a href="https://github.com/dcarpin03?tab=repositories" target="_blank" rel="noopener noreferrer" className="all-projects-link">
          Ver todos <span aria-hidden="true">→</span>
        </a>
      </div>
      <div className="projects-grid">
        {projects.map(project => <ProjectCard key={project.title} {...project} />)}
      </div>
    </section>
  )
}

export default Projects
