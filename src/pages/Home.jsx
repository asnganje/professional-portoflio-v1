import { Outlet } from "react-router-dom";
const Home = () => {
    return <div>
                <h2>Sidebar content</h2>
                <Outlet />
            </div> 
}

export default Home;