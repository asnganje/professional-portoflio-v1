import { Header } from "../components";
import { useGlobalContext } from "../context";

const About = () => {
    const {isSidebarOpen} = useGlobalContext()
    return <div className="abt">
            <Header title="About Us"/>
        </div>
}

export default About;