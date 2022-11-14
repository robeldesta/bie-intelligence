import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import BusinessInfo from './components/BusinessInfo'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import './index.css'
import ScrollToTop from './components/ScrollToTop'
import React from 'react'


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: [],
          isToTopVisible: false
        };
      }

    componentDidMount() {
        window.addEventListener('scroll', 
            (e)=>{window.pageYOffset > 300 ? this.setState({isToTopVisible: true}) : this.setState({isToTopVisible: false})});
        fetch("https://businessinfoeth.com/wp-json/wp/v2/posts/9396")
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({
                isLoaded: true,
                items: result.items
            });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
     }

    render() {
        return(
            <div>
                <ScrollToTop isToTopVisible={this.state.isToTopVisible}/>
                <NavBar />
                <Hero content={this.state.items} />    
                <About />
                <Services />
                <BusinessInfo />
                <Pricing />
                <Footer />
            </div>
        ) 
    }
    
}
