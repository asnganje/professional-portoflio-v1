import { nanoid } from "nanoid";
import calc from '../assets/calcApp.png'
import coin from '../assets/coinApp.png'
import netflix from '../assets/netflix.png'
import turkey from '../assets/turkey.png'
import books from '../assets/books.png'
import movies from '../assets/movies.jpg'

export const data = [
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
    title:'Awesome Books',
    icon: books,
    desc: 'This project is about a website that displays display a list of books added by a user. It allows one to add and remove books from that list.',
    url: 'https://asnganje.github.io/awesomebookES6/',
    technologies: [
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
    title:'Movies and Songs App',
    icon: movies,
    desc: 'This is a simple redux with significant redux logic. It entails an application that uses the redux concept to manage random movies and songs.',
    url: 'https://github.com/asnganje/movieStore',
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
]