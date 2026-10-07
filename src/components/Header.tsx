function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <a href="#home" className="logo">
          Daniel
        </a>

        <nav className="nav">
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