function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-intro">Hola, soy</p>
        <h1>Daniel</h1>
        <h2>Software Developer <span>|</span> AI <span>|</span> Data</h2>
        <p className="hero-description">
          Bienvenido a mi portfolio. Aquí podrás conocerme un poco mejor, descubrir
          los proyectos que he desarrollado y explorar las tecnologías con las que
          trabajo y sigo aprendiendo.
        </p>
        <div className="hero-buttons">
          <a href="https://github.com/dcarpin03" className="button button-primary" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="/CV_DanielCarpinteroGarcia.pdf" className="button button-secondary" download>Descargar CV</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
