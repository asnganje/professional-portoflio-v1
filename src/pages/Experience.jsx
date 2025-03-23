import { Header } from "../components";
import { data } from "./experience-data";



const Experience = () => {
    return <div className="exp">
                <Header title="Experience"/>
                <div className="expe-div">
                  {
                    data.map((item)=> {
                      const {
                              id, 
                              logo,
                              companyUrl, 
                              companyName,
                              role,
                              companyDesc,
                              period,
                              location,
                              responsibilities
                            } = item
                      return(
                        <div key={id} className="exp-item">
                          <div className="exp-item-header">
                            {/* <span className={companyName === 'Pemba Beach Resort' && 'addBg'}>
                              <img src={logo} alt={companyName} />
                            </span> */}
                            <a href={companyUrl} target="_blank">
                              {companyName}
                            </a>
                            <p>
                              {role}
                            </p>
                          </div>
                          <hr />
                          <div className="exp-div-content">
                            <p>{companyDesc}</p>
                            <ul className="exp-ul">
                              {
                                responsibilities.map((item)=> {
                                  const {id,task} = item
                                  return(
                                    <li key={id}>
                                      {task}
                                    </li>
                                  )
                                })
                              }
                            </ul>
                            <p className="exp-loc-period">
                              <span>{period}</span> | {location}
                            </p>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
        </div>
}

export default Experience;