import { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import {data} from '../data'
import Aside from "./Aside";

const Sidebar = () => {
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
            <Aside data={data}/>
        )
    }
    return <div className={isSidebarOpen && !isLargeScreen?"sidebar-overlay show-sidebar": "sidebar-overlay"}
        onClick={closeSidebar}
            >
            <Aside data={data}/>
    </div>
}

export default Sidebar;