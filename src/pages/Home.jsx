import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "../components";

const Home = () => {

    return <main>
                <div className="navbar-sidebar-container">
                    <div className="navbar-div"><Navbar/></div>
                <Sidebar />
                </div>
                <div className="outlet">
                    <Outlet />
                </div>
            </main> 
}

export default Home;