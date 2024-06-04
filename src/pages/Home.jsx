import { Navbar, Sidebar } from "../components";
import { Element, scroller } from "react-scroll";
import Landing from "./Landing";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Awards from "./Awards";
import Education from "./Education";
import Contact from "./Contact";
const Home = () => {

    const scrollToSection = (section) => {
        scroller.scrollTo(section, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

    return <main>
                <div className="navbar-sidebar-container">
                    <div className="navbar-div"><Navbar/></div>
                <Sidebar scrollTo={scrollToSection}/>
                </div>
                <div className="outlet">
                    <Element name="landing">
                        <Landing />
                    </Element>
                    <Element name="about">
                        <About />
                    </Element>
                    <Element name="experience">
                        <Experience />
                    </Element>
                    <Element name="projects">
                        <Projects />
                    </Element>
                    <Element name="skills">
                        <Skills />
                    </Element>
                    <Element name="awards">
                        <Awards />
                    </Element>
                    <Element name="education">
                        <Education />
                    </Element>
                    <Element name="contact">
                        <Contact />
                    </Element>
                </div>
            </main> 
}

export default Home;