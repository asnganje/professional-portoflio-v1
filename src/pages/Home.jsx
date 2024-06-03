import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
const Home = () => {
    return <main>
                <div className="navbar-div"><Navbar/></div>
                <Outlet />
            </main> 
}

export default Home;