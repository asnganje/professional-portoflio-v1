import { nanoid } from "nanoid";
import { Header } from "../components";
import js from '../assets/javascript.png'
import css from '../assets/css3.png'
import react from '../assets/react.png'
import html from '../assets/html5.png'
import node from '../assets/nodejs.png'
import postgres from '../assets/postgresql.png'
import mongo from '../assets/mongodb.png'
import github from '../assets/github.png'
import heroku from '../assets/heroku.png'
import netlify from '../assets/netlify.png'
import redux from '../assets/redux.png'
const data = [
  {
    id: nanoid(),
    title: 'FrontEnd',
    items: [
      {
        id:nanoid(),
        desc: 'html',
        display:html
      }, 
      {
        id: nanoid(),
        desc: 'javascript',
        display:js
      },
      {
        id:nanoid(),
        desc: 'css',
        display:css
      }, 
      {
        id: nanoid(),
        desc: 'react',
        display:react
      },
      { 
        id: nanoid(),
        desc: 'redux',
        display: redux
      }
    ]
  },
  {
    id: nanoid(),
    title: 'BackEnd',
    items: [
    {
      id: nanoid(),
      desc: 'javascript',
      display:js
    }, 
    {
      id: nanoid(),
      desc: 'nodejs',
      display:node
    },
    { 
      id: nanoid(),
      desc: 'mongodb',
      display: mongo
    }, 
    {
      id: nanoid(),
      desc: 'postgres',
      display:postgres
    }
  ]
  },
  {
    id: nanoid(),
    title: 'Others',
    items: [
      {
        id: nanoid(),
        desc:'github', 
        display: github
      }, 
      {
        id: nanoid(),
        desc: 'heroku',
        display: heroku
      }, 
      {
        id: nanoid(),
        desc: 'netlify',
        display: netlify
      }
      ]
  }
]
const Skills = () => {
    return <div className="skill">
                <Header title="skills"/>
                <div className="main-skill-group-div">
                  {
                    data.map((skillGroup)=> {
                      const {id, title, items}=skillGroup
                      return(
                        <div key={id} className="div-skillgroup">
                          <h2>{title}</h2>
                          <hr />
                          <div className="skill-div">
                          {
                            items.map((skill)=> {
                              const {id, desc, display} = skill
                              return(
                                  <Skill key={id} desc={desc} display={display}/>                      
                              )
                            })
                          }
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
        </div>
}

export default Skills;

const Skill = ({id, desc, display}) => {
  return(
    <div className="skill-real-div">
      <img src={display} alt={desc} />
      <p>{desc}</p>
    </div>
  )
}
