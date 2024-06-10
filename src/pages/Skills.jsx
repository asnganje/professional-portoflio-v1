import { nanoid } from "nanoid";
import { Header } from "../components";
import {js} from '../assets/javascript.png'
import {css} from '../assets/ccs3.png'
import {react} from '../assets/react.png'
import {html} from '../assets/html5.png'
import {node} from '../assets/nodejs.png'
import {postgres} from '../assets/postgresql.png'
import {mongo} from '../assets/mongodb.png'
import {github} from '../assets/github.png'
import {heroku} from '../assets/heroku.png'
import {netlify} from '../assets/netlify.png'
data = [
  {
    id: nanoid,
    title: '',
  },
  {
    id: nanoid,
    title: 'FrontEnd',
  }
]
const Skills = () => {
    return <div className="skill">
                <Header title="skills"/>
                <div>
                        <div>
                            <h2></h2>
                            <div></div>
                        </div>
                        
                </div>
        </div>
}

export default Skills;