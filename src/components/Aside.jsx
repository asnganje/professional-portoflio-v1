const Aside = ({data}) => {
    return(
        <aside className="sidebar-container">
            <ul className="sidebar-ul">
                {
                    data.map((item)=> {
                        const {id, url, text, icon, color} = item
                        return (
                            <li key={id} className="li">
                                <a href={url}>
                                    <span style={{background: 'transparent', color: `${color}`, fontSize: '1.5rem'}}>{icon}</span>
                                    <span className="txt">{text}</span>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </aside>
    )
}

export default Aside;