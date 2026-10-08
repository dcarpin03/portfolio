function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-heading">
        <p>Contacto</p>
        <h2>Hablemos</h2>

        <span>
          Estoy abierto a oportunidades como desarrollador junior, especialmente
          en software, backend, datos, inteligencia artificial y cloud.
        </span>
      </div>

      <div className="contact-links">
        <a
          href="mailto:danielcarpinterogarcia03@gmail.com"
          className="contact-card"
        >
          <span className="contact-label">Email</span>
          <span className="contact-value">danielcarpinterogarcia03@gmail.com</span>
        </a>

        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <span className="contact-label">LinkedIn</span>
          <span className="contact-value">Ver perfil</span>
        </a>

        <a
          href="https://github.com/dcarpin03"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <span className="contact-label">GitHub</span>
          <span className="contact-value">Ver repositorios</span>
        </a>
      </div>
    </section>
  )
}

export default Contact