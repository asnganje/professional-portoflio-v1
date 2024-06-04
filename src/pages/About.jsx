import { useGlobalContext } from "../context";

const About = () => {
    const {isSidebarOpen} = useGlobalContext()
    return <h2 style={{height: '80vh', position:'relative', top: '5rem'}}>About</h2>
}

export default About;