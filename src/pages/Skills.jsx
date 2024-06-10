import { nanoid } from "nanoid";
import { Header } from "../components";
import Js from '../assets/javascript.png'
import Css from '../assets/css3.png'
import React from '../assets/react.png'
import Html from '../assets/html5.png'
import Node from '../assets/nodejs.png'
import Postgres from '../assets/postgresql.png'
import Mongo from '../assets/mongodb.png'
import Github from '../assets/github.png'
import Heroku from '../assets/heroku.png'
import Netlify from '../assets/netflify.webp'
import Redux from '../assets/redux.png'
const data = [
  {
    id: nanoid(),
    title: 'FrontEnd',
    items: [
      {
        id:nanoid(),
        desc: 'html',
        display:<Html/>
      }, 
      {
        id: nanoid(),
        desc: 'js',
        display:<Js/>
      },
      {
        id:nanoid(),
        desc: 'css',
        display:<Css/>
      }, 
      {
        id: nanoid(),
        desc: 'react',
        display:<React />
      },
      { 
        id: nanoid(),
        desc: 'redux',
        display: <Redux/>
      }
    ]
  },
  {
    id: nanoid(),
    title: 'BackEnd',
    items: [
    {
      id: nanoid(),
      desc: 'js',
      display:<Js/>
    }, 
    {
      id: nanoid(),
      desc: 'node',
      display:<Node/>
    },
    { 
      id: nanoid(),
      desc: 'mongo',
      display: <Mongo/>
    }, 
    {
      id: nanoid(),
      desc: 'postgres',
      display:<Postgres/>
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
        display: <Github/>
      }, 
      {
        id: nanoid(),
        desc: 'heroku',
        display: <Heroku/>
      }, 
      {
        id: nanoid(),
        desc: 'netlfiy',
        display: <Netlify/>
      }
      ]
  }
]
const Skills = () => {
    return <div className="skill">
                <Header title="skills"/>
                <div>
                  {
                    data.map((skillGroup)=> {
                      const {id, title, items}=skillGroup
                      return(
                        <div key={id}>
                          <h2>{title}</h2>
                          {
                            items.map((skill)=> {
                              const {id, desc, display} = skill
                              return(
                                  <Skill key={id} desc={desc}/>
                                
                              )
                            })
                          }
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
    <div>
      <p>{desc}</p>
    </div>
  )
}
