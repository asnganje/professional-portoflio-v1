import { Link } from "react-router-dom";

const Aside = ({data, scrollTo}) => {

  const openUrl = (url) => {
    if (url.startsWith('http'|| 'https')) {
      window.open(url, '_blank')
    }
    else {
      scrollTo(url)
    }
  }

    return(
        <aside className="sidebar-container-bg-screen">
            <ul className="sidebar-ul">
                {
                    data.map((item)=> {
                        const {id, url, text, icon, color} = item
                        return (
                            <li key={id} className="li">
                                <Link onClick={()=>openUrl(url)}>
                                    <span style={{background: 'transparent', color: `${color}`, fontSize: '1.5rem'}}>{icon}</span>
                                    <span className="txt">{text}</span>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </aside>
    )
}

export default Aside;