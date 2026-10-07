function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-intro">Hola, soy</p>

        <h1>Daniel</h1>

        <h2>
          Software Developer <span>|</span> AI <span>|</span> Data
        </h2>

        <p className="hero-description">
          Soy Ingeniero Informático y estudiante del Máster en Sistemas
          Inteligentes en la UJI. Me interesa el desarrollo de software,
          el procesamiento de datos y la inteligencia artificial.
        </p>

        <div className="hero-buttons">
          <a href="#" className="button button-primary">
            GitHub
          </a>

          <a href="#" className="button button-secondary">
            LinkedIn
          </a>

          <a href="#" className="button button-secondary">
            Descargar CV
          </a>
        </div>
      </div>

      <div className="terminal">
        <div className="terminal-header">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="terminal-content">
          <p>
            <span className="terminal-symbol">$</span> whoami
          </p>

          <p className="terminal-result">software_developer</p>

          <p>
            <span className="terminal-symbol">$</span> interests
          </p>

          <p className="terminal-result">
            software · data · ai · backend
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero