import { nanoid } from "nanoid";
import tecafili from '../assets/tecafili.jpg';
import rakol from '../assets/rakol.png';
import microverse from '../assets/microverse.png';
import edureka from '../assets/edureka.png';
import cgk from '../assets/cgk.png';
import gemstone from '../assets/gemstone.png'

export const data = [
  {
    id: nanoid(),
    logo: gemstone,
    companyUrl:'https://www.gemstone.co/',
    companyName: 'Gemstone Technoglobal',
    role: 'FrontEnd developer',
    companyDesc: 'A software development company based in Kenya',
    period: 'June, 2024 - To Date',
    location: 'Nairobi, Kenya',
    responsibilities: [
      {
        id: nanoid(),
        task: 'Creating responsive and dynamic web interfaces using ReactJs, TypeScript, Tailwind CSS and Shadcn/ui.'
      },
      {
        id: nanoid(),
        task: 'Code Optimization: Writing clean, efficient, and maintainable code, ensuring high performance across different devices and browsers.'
      },
      {
        id: nanoid(),
        task: 'API Integration: Utilizing Axios for making HTTP requests and integrating backend services with the frontend.'
      },
      {
        id: nanoid(),
        task: 'State Management: Using Redux Toolkit to maintain a consistent application state.'
      },
      {
        id: nanoid(),
        task: 'Code Quality: Ensuring code quality through rigorous testing, code reviews, and adherence to industry best practices.'
      },
      {
        id: nanoid(),
        task: 'Continuous Improvement: Engaging in continuous learning and applying new technologies and frameworks to enhance the product.'
      },
      {
        id: nanoid(),
        task: 'Collaboration: Working in an Agile environment, participating in daily stand-ups, sprint planning, and retrospectives to ensure timely delivery of features.'
      }
    ]
    },
  {
    id: nanoid(),
    logo: edureka,
    companyUrl:'https://www.edureka.co/',
    companyName: 'Fullstack Internship Program - MERN Technologies',
    role: 'FullStack developer',
    companyDesc: 'A renowned Indian firm for training global IT experts',
    period: 'March, 2024 - To Date',
    location: 'Bangalore, India',
    responsibilities: [
      {
        id: nanoid(),
        task: 'Interpretation of coding tasks'
      },
      {
        id: nanoid(),
        task: 'Development of frontEnd Applications - Javascript, ReactJs, Tailwind CSS'
      },
      {
        id: nanoid(),
        task: 'Pair programming and Development of Fullstack Applications'
      },
      {
        id: nanoid(),
        task: 'Development of MERN Stack Applications - MongoDB, ExpressJs, ReactJs, NodeJs, Tailwind CSS'
      },
      {
        id: nanoid(),
        task: 'Professional web-based project presentation'
      }
    ]
    },
    {
      id: nanoid(),
      logo: rakol,
      companyUrl: 'https://raysoftwareservice.com/',
      companyName: 'Rakolkata Software service private ltd',
      role: 'FullStack Web Developer',
      companyDesc: 'Software Development Company',
      period: 'June, 2023 - Nov, 2023',
      location: 'India',
      responsibilities: [
        {
          id: nanoid(),
          task: 'Analysis and Interpretation web based system requirements'
        },
        {
          id: nanoid(),
          task: 'Development of full stack applications - MERN Stack'
        }
      ]
    },
    {
      id: nanoid(),
      logo: microverse,
      companyUrl: 'https://www.microverse.org/',
      companyName: 'Microverse Inc',
      role: 'FullStack Web Developer Trainee',
      companyDesc: 'Online coding school',
      period: 'June, 2022 - March, 2023',
      location: 'SF, USA',
      responsibilities: [
        {
          id: nanoid(),
          task: 'Coding in collaboration with fellow developers from across the globe',
        },
        {
          id: nanoid(),
          task: 'Spent over 1000hrs practicing pair programming and SCRUM methodologies',
        },
        {
          id: nanoid(),
          task: 'Development of both front-end and fullstack apps- ReactJs, Redux, Ruby on Rails and Postgres',
        }
      ]
    },
    {
      id: nanoid(),
      logo: cgk,
      companyUrl: 'https://kwale.go.ke/',
      companyName: 'Kwale County Government',
      role: 'Vocational Training Officer - IT section',
      companyDesc: 'Local authority division of vocational training focusing on imparting skills',
      period: 'Jan, 2015 - Dec, 2022',
      location: 'Kwale, Kenya',
      responsibilities: [
        {
          id: nanoid(),
          task: 'Collecting and collating youth training data',
        },
        {
          id: nanoid(),
          task: 'Training basic computing skills',
        },
        {
          id: nanoid(),
          task: 'Training youth on web development - HTML5, CSS3 and Javascript ',
        }
        ]
      },
      {
      id: nanoid(),
      logo: tecafili,
      companyUrl: 'https://tecafili.org/',
      companyName: 'TECAFILI',
      role: 'IT Support Technician',
      companyDesc: 'Technology for care and Livelihood - Non governmental Organization focusing on  training of fishers in mariculture',
      period: 'April - Dec, 2014',
      location: 'Mombasa, KE',
      responsibilities: [
        {
          id: nanoid(),
          task: 'Web content monitoring and maintenance'
        },
        {
          id: nanoid(),
          task: 'Computer hardware maintenance'
        },
        {
          id: nanoid(),
          task: 'Network configuration'
        },
        {
          id: nanoid(),
          task: 'Training and sensitizing local fishermen on the growing digital market for marine products'
        }
      ]
    }
]