function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-intro">HOLA, SOY</p>
        <h1>Daniel Carpintero</h1>
        <h2>Software Developer <span>|</span> AI <span>|</span> Data</h2>
        <p className="hero-description">
          Bienvenido/a a mi portfolio. Aquí encontrarás información sobre mí,
          los proyectos que desarrollo y las tecnologías con las que trabajo
          en el mundo del software y la inteligencia artificial.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="button button-primary">Ver proyectos <span aria-hidden="true">↗</span></a>
          <a href="#about" className="button button-secondary">Sobre mí <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
  )
}

export default Hero
