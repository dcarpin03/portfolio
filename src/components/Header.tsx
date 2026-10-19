function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <a href="#home" className="logo" aria-label="Daniel Carpintero García, volver al inicio">
          <span className="logo-mark" aria-hidden="true">&lt;/&gt;</span> <span className="logo-name">Daniel Carpintero García</span>
        </a>
        <nav className="nav" aria-label="Navegación principal">
          <a href="#home">Inicio</a>
          <a href="#projects">Proyectos</a>
          <a href="#about">Sobre mí</a>
          <a href="#technologies">Tecnologías</a>
          <a href="#contact">Contacto</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
