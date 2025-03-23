import { Link } from "react-router-dom"

const Logo = ({scrollTo}) => {
    return <Link to='landing' onClick={()=>scrollTo('landing')} className="logo-div">
            <h3 className="logo-text">Abdulrahman Nganje</h3>
            <p>Passionate Ruby Enthusiast</p>
        </Link>
}
export default Logo