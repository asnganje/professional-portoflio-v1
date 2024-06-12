import { useState } from "react";
import { Header } from "../components";
import {data} from './projects-data'
import { BsThreeDotsVertical } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { LuExternalLink } from "react-icons/lu";

const Projects = () => {
    const [clickedItemTitle, setClickedItemTitle] = useState(null)

    const displayDetails = (element) => {
        setClickedItemTitle(element.title)
    }

    const hideDetails = () => {
      setClickedItemTitle(null)
    }
    return <div className="project">
                <Header title="Projects"/> 
                <div className="project-list-div">
                  {
                    data.map((item)=> {
                      const {id, icon, title, desc, technologies, url} = item
                      return(
                        <div key={id} className="div-project-item">
                          <img src={icon} alt="title" onClick={()=>displayDetails(item)} />
                          <p className="proj-p" onClick={()=>displayDetails(item)}>
                            {title} 
                            <span onClick={()=>displayDetails(item)}>
                              <BsThreeDotsVertical />
                            </span>
                          </p>
                          <p className="proj-p2">
                            {desc}
                          </p>
                          <>
                            <div className={clickedItemTitle === item.title?"overlay": "no-overlay"}></div>
                            <div className={clickedItemTitle === item.title?"div-details show-div-project-details": "div-details"}>
                              <p className="details-div-p">
                                <span className="accompl">Accomplishments</span>
                                <span onClick={hideDetails}>
                                  <RxCross1 className="cancel-btn"/>
                                </span>
                              </p>
                              <ul className={technologies.length <= 4?"details-ul": "details-ul modify-ul"}>
                                {
                                  technologies.map((elem)=> {
                                    const {id, tech} = elem
                                    return(
                                      <li key={id} className="details-li">
                                        {tech}
                                      </li>
                                    )
                                  })
                                }
                              </ul>
                              <hr className="details-hr"/>
                              <a href={url} target="_blank">
                                  <LuExternalLink className="external-link"/>
                              </a>
                            </div>
                          </>
                        </div>
                      )
                    })
                    
                  }
                </div>   
        </div>
}

export default Projects;