import { useGlobalContext } from "../context";

const About = () => {
    const {isSidebarOpen} = useGlobalContext()
    return <h2 style={{height: '100vh'}}>About</h2>
}

export default About;