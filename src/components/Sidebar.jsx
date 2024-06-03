import { useEffect, useState } from "react";
import { useGlobalContext } from "../context";

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
            <aside className="sidebar-container">
            Sidebar
            </aside>
        )
    }
    return <div className={isSidebarOpen && !isLargeScreen?"sidebar-overlay show-sidebar": "sidebar-overlay"}
        onClick={closeSidebar}
            >
        <aside className="sidebar-container">
            Sidebar
        </aside>
    </div>
}

export default Sidebar;