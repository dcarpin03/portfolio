import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-heading">
        <p>Trabajo personal</p>
        <h2>Proyectos</h2>

        <span>
          Proyectos con los que exploro desarrollo de software, datos,
          algoritmos e inteligencia artificial.
        </span>
      </div>

      <div className="projects-grid">
        <ProjectCard
          title="Personal Discovery Engine"
          status="En desarrollo"
          description="Sistema inteligente de recomendación personal que recopila contenido de distintas fuentes, lo procesa y busca priorizar la información más relevante según intereses, prioridades y tiempo disponible."
          technologies={[
            'Python',
            'DuckDB',
            'Pydantic',
            'APIs',
            'Data Processing',
          ]}
          features={[
            'Obtención de noticias mediante APIs externas',
            'Validación y normalización de datos con Pydantic',
            'Control de duplicados',
            'Persistencia de datos con DuckDB',
            'Extracción de características deterministas',
            'Arquitectura preparada para embeddings, ML y LLMs',
          ]}
          pipeline={[
            'News API',
            'Ingestion',
            'Pydantic validation',
            'DuckDB',
            'Feature extraction',
            'Semantic classification',
            'Recommendation',
          ]}
          githubUrl="https://github.com/dcarpin03/Personal-Discovery-Engine"
        />

        <ProjectCard
          title="Ant Colony Lab"
          status="Prototipo"
          description="Simulación de una colonia de hormigas basada en reglas locales simples que generan comportamiento emergente a nivel de colonia."
          technologies={[
            'Python',
            'Pygame',
            'Algorithms',
            'Simulation',
          ]}
          features={[
            'Movimiento autónomo',
            'Exploración aleatoria',
            'Detección y transporte de alimento',
            'Generación y decaimiento de feromonas',
            'Seguimiento de caminos',
            'Detección y evasión de obstáculos',
            'Interacción con el entorno mediante el ratón',
          ]}
          githubUrl="https://github.com/dcarpin03/ant-colony-lab"
        />
      </div>
    </section>
  )
}

export default Projects