import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import './index.css';

const App = () => {
    return(
        <div >
            <NavBar />
            <Hero />    
            <About />
            <Services />
        </div>
    )
}

export default App