const Aside = ({data}) => {
    return(
        <aside className="sidebar-container">
            <ul>
                {
                    data.map((item)=> {
                        const {id, url, text, icon} = item
                        return (
                            <li key={id}>
                                <a href={url}>
                                    {icon}
                                    {text}
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