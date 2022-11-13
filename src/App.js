import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import './index.css';
import BusinessInfo from './components/BusinessInfo';

const App = () => {
    return(
        <div >
            <NavBar />
            <Hero />    
            <About />
            <Services />
            <BusinessInfo />
        </div>
    )
}

export default App