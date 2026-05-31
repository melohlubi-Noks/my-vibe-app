import Navbar from './components/Navbar'
import About from './components/About'
import LeadershipExperience from './components/LeadershipExperience'
import MBAProjects from './components/MBAProjects'
import StrategicAnalysis from './components/StrategicAnalysis'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <About />
        <LeadershipExperience />
        <MBAProjects />
        <StrategicAnalysis />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
