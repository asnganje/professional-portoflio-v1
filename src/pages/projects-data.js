import { nanoid } from "nanoid";
import calc from '../assets/calcApp.png'
import coin from '../assets/coinApp.png'
import netflix from '../assets/netflix.png'
import turkey from '../assets/turkey.png'
import chat from '../assets/chatApp.png'
import alpha from '../assets/alpha.png'


export const data = [
  {
    id: nanoid(), 
    title:'Alpha Blog - App',
    icon: alpha,
    desc: 'A Ruby on Rails-based blogging application showcasing key features like one-to-many and many-to-many relationships, user authentication with admin privileges, and full CRUD operations. It includes pagination for efficient data handling and demonstrates essential Rails concepts such as validations, associations, and authorization.',
    url: 'https://github.com/asnganje/alpha-blog',
    technologies: [
      {
        id: nanoid(),
        tech: 'Ruby on Rails'
      },
      {
        id: nanoid(),
        tech: 'Ruby'
      },
      {
        id: nanoid(),
        tech: 'Bootstrap'
      },
      {
        id: nanoid(),
        tech: 'HTML5'
      }
    ]
  },
  {
    id: nanoid(), 
    title:'Chat App',
    icon: chat,
    desc: 'A real-time chat application built with Ruby on Rails, leveraging WebSockets for instant messaging. It features a responsive UI with Tailwind CSS and supports CRUD operations for managing messages and conversations. The app ensures seamless, real-time communication using Rails\' ActionCable making it scalable and efficient for various use cases.',
    url: 'https://github.com/asnganje/chat_app',
    technologies: [
      {
        id: nanoid(),
        tech: 'Ruby'
      },
      {
        id: nanoid(),
        tech: 'Ruby on Rails'
      },
      {
        id: nanoid(),
        tech: 'ActionCable'
      },
      {
        id: nanoid(),
        tech: 'Web Sockets'
      },
      {
        id: nanoid(),
        tech: 'Tailwind CSS'
      }
    ]
  },
  {
    id: nanoid(), 
    title:'Global Cryptocurrency App',
    icon: coin,
    desc: 'A React-Redux application that fetches digital currency data from a coins API. It allows users to filter information by different types of digital coins.',
    url: 'https://poetic-pixie-9fcd79.netlify.app/',
    technologies: [
      {
        id: nanoid(),
        tech: 'ReactJs'
      },
      {
        id: nanoid(),
        tech: 'Redux'
      },
      {
        id: nanoid(),
        tech: 'JavaScript'
      },
      {
        id: nanoid(),
        tech: 'CSS3'
      },
      {
        id: nanoid(),
        tech: 'HTML5'
      }
    ]
  },
  {
    id: nanoid(), 
    title:'Netflix',
    icon: netflix,
    desc: 'A simple website resembling the common Netflix. Fully Responsive - Utilizes the power of Tailwind CSS.',
    url: 'https://singular-madeleine-1d3453.netlify.app/',
    technologies: [
      {
        id: nanoid(),
        tech: 'JavaScript'
      },
      {
        id: nanoid(),
        tech: 'Tailwind CSS'
      },
      {
        id: nanoid(),
        tech: 'HTML5'
      }
    ]
  },
  {
    id: nanoid(), 
    title:'Turkish Online Shoe Store',
    icon: turkey,
    desc: 'A robust online shoe store for managing shoes products.',
    url: 'https://shoestorefrontend.onrender.com/',
    technologies: [
      {
        id: nanoid(),
        tech: 'MongoDB'
      },
      {
        id: nanoid(),
        tech: 'ExpressJs/NodeJs'
      },
      {
        id: nanoid(),
        tech: 'React'
      },
      {
        id: nanoid(),
        tech: 'Redux'
      },
      {
        id: nanoid(),
        tech: 'JavaScript'
      },
      {
        id: nanoid(),
        tech: 'Tailwind CSS'
      },
      {
        id: nanoid(),
        tech: 'HTML5'
      }
    ]
  },
  {
    id: nanoid(), 
    title:'Calculator App',
    icon: calc,
    desc: 'A ReactJs Single Page Application (SPA) that allows users to do simple calculations and read a math quote.',
    url: 'https://phenomenal-sunflower-40c413.netlify.app/',
    technologies: [
      {
        id: nanoid(),
        tech: 'ReactJs'
      },
      {
        id: nanoid(),
        tech: 'JavaScript'
      },
      {
        id: nanoid(),
        tech: 'CSS3'
      },
      {
        id: nanoid(),
        tech: 'HTML5'
      }
    ]
  }
]