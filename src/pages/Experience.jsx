import { Header } from "../components";
import { data } from "./experience-data";



const Experience = () => {
    return <div className="exp">
                <Header title="Experience"/>
                <div>
                  {
                    data.map((item)=> {
                      return(
                        <div>
                          
                        </div>
                      )
                    })
                  }
                </div>
        </div>
}

export default Experience;