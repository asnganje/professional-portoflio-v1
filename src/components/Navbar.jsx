import Logo from "./Logo";
import Hamburg from "./Hamburg";

const Navbar = ({scrollTo}) => {
    return <nav className="main-nav">
                <Hamburg />
                <Logo scrollTo={scrollTo}/>
        </nav>
}

export default Navbar;