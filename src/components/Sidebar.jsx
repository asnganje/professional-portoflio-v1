import { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import {data} from '../data'
import Aside from "./Aside";

const Sidebar = ({scrollTo}) => {
    const {isSidebarOpen, closeSidebar} = useGlobalContext()
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 992)

    useEffect(()=> {
        const resizeHandler = () => {
            if (window.innerWidth >= 992) {
                setIsLargeScreen(true)
            } else{
                setIsLargeScreen(false)
            }
        }
        window.addEventListener('resize', resizeHandler)
        resizeHandler()
        return ()=> {
            window.removeEventListener('resize', resizeHandler)
        }
    })

    if (isLargeScreen) {
        return(
            <Aside data={data} scrollTo={scrollTo}/>
        )
    }
    return <div className={isSidebarOpen && !isLargeScreen?"sidebar-overlay show-sidebar": "sidebar-overlay"}
        onClick={closeSidebar}
            >
            <div className="sidebar-in-small-screen-container">
                <Aside data={data} scrollTo={scrollTo}/>
            </div>
    </div>
}

export default Sidebar;