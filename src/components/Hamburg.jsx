import { RxHamburgerMenu } from "react-icons/rx";
import { useGlobalContext } from "../context";

const Hamburg =() => {
    const {openSidebar} = useGlobalContext()
    return <RxHamburgerMenu className="hamburger" onClick={openSidebar}/>
}

export default Hamburg