import { useGlobalContext } from "../context";

const About = () => {
    const {isSidebarOpen} = useGlobalContext()
    console.log(isSidebarOpen);
    return <h2>About</h2>
}

export default About;