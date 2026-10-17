import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-heading">
        <p>Trabajo personal y académico</p>
        <h2>Proyectos</h2>
        <span>Aplicaciones, procesamiento de datos y sistemas basados en agentes. Cada proyecto aborda un problema diferente con una implementación propia.</span>
      </div>

      <div className="projects-grid">
        <ProjectCard
          title="FocusDesk"
          status="Versión 1.0.0 · Windows"
          description="Aplicación de escritorio para planificar sesiones de estudio con Pomodoro, organizar tareas y consultar el historial. Interfaz personalizable y datos almacenados localmente."
          technologies={['Electron', 'React', 'TypeScript', 'Vite', 'electron-store']}
          features={['Pomodoro de 25, 45 y 50 minutos', 'Sesiones y tareas persistentes', 'Temas de color y fondos propios']}
          image="https://raw.githubusercontent.com/dcarpin03/focusdesk/main/docs/screenshots/focusdesk.png"
          githubUrl="https://github.com/dcarpin03/focusdesk"
          downloadUrl="https://github.com/dcarpin03/focusdesk/releases/tag/v1.0.0"
        />
        <ProjectCard
          title="Personal Discovery Engine"
          status="Prototipo de datos"
          description="Proyecto personal de ingeniería de datos orientado a descubrir y priorizar contenido relevante. El prototipo obtiene noticias desde una API externa, valida sus campos con Pydantic, evita duplicados y las almacena en DuckDB. También extrae características deterministas para analizar la información. Está planteado para evolucionar hacia una clasificación semántica más precisa y recomendaciones explicables mediante modelos de IA."
          technologies={['Python', 'Pydantic', 'DuckDB', 'NewsAPI']}
          features={['Pipeline modular de extracción, validación y persistencia', 'Tratamiento de registros duplicados y control de integridad', 'Características temporales y textuales para análisis posterior', 'Arquitectura extensible a embeddings, ML y LLMs sin presentarlos como funcionalidades terminadas']}
          githubUrl="https://github.com/dcarpin03/personal-discovery-engine-showcase"
        />
        <ProjectCard
          title="Ant Colony Lab"
          status="Simulación en evolución"
          description="Laboratorio 2D de hormigas autónomas que exploran, recogen alimento y siguen rastros de feromonas. Las reglas locales dan lugar a comportamientos colectivos."
          technologies={['Python', 'Pygame', 'Simulación multiagente']}
          features={['Agentes con estados independientes', 'Feromonas y evaporación', 'Comida, obstáculos y velocidad interactiva']}
          githubUrl="https://github.com/dcarpin03/ant-colony-lab"
        />
        <ProjectCard
          title="Multi-Agent Travel Recommender"
          status="Proyecto académico"
          description="Prototipo de recomendación de itinerarios con dos agentes especializados: uno filtra lugares turísticos con Pandas y otro organiza un plan mediante un LLM."
          technologies={['Python', 'Agno', 'Pandas', 'Pydantic', 'Google Colab']}
          features={['Filtrado por ciudad, intereses y coste', 'Intercambio de datos estructurados', 'Planificación de actividades por días']}
          githubUrl="https://github.com/dcarpin03/multi-agent-travel-recommender"
        />
      </div>
    </section>
  )
}

export default Projects
