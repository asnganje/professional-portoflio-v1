import { useGlobalContext } from "../context";

const About = () => {
    const {isSidebarOpen} = useGlobalContext()
    return <h2 className="abt">About</h2>
}

export default About;