import './App.css'

import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Technologies from './components/Technologies'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Projects />
        <About />
        <Technologies />
        <Contact />
      </main>
    </>
  )
}

export default App
