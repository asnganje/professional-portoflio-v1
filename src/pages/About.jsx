import { Header } from "../components";
import { useGlobalContext } from "../context";

const About = () => {
    const {isSidebarOpen} = useGlobalContext()
    return <div className="abt">
            <Header title="About"/>
            <div className="about-div">
                <blockquote>
                <h2>
                    Goal-oriented full stack developer 
                    dedicated to meticulous UI design, 
                    teamwork and teaching.
                </h2>
                </blockquote>
                <p>
                My career has been diverse, spanning roles as a 
                fisherman, a local authority employee of 
                the year, frontend developer in a tour 
                firm website, mentor at an online coding school, 
                FullStack developer, and a small business owner. Throughout these experiences, 
                I've remained committed to helping others and solving problems with passion."
                </p>
                <p>

                    As a web developer, I leverage my meticulous attention to detail, unwavering passion for creation, and purpose-driven work ethic to make a tangible difference. This is why I'm eager to contribute to a rapidly growing company and drive significant impact.
                </p>
                <h3>
                    <strong>Current Focus:</strong>
                    <a href="https://www.freecodecamp.org/news/mern-stack-roadmap-what-you-need-to-know-to-build-full-stack-apps/" target="_blank">
                    The MERN Stack
                    </a>
                </h3>
            </div>
        </div>
}

export default About;