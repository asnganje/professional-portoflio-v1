import { nanoid } from "nanoid";

export const data = [
  {
    id: nanoid(),
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
  },
  {
    id: nanoid(),
    companyUrl: 'https://kwale.go.ke/',
    companyName: 'Kwale County Government',
    role: 'Vocational Training Officer - IT section',
    companyDesc: 'Local authority division of vocational training focusing on imparting skills',
    period: 'Jan, 2015 - Date',
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
      companyUrl:'https://pembaparadise.com/',
      companyName: 'Pemba Beach Resort',
      role: 'Web Developer',
      companyDesc: 'Tour firm specializing in providing hotel services in Zanzibar',
      period: 'Jan, 2024 - Mar, 2024',
      location: 'Zanzibar',
      responsibilities: [
        {
          id: nanoid(),
          task: 'Modifying and improving the appearance hotel\'s main website'
        },
        {
          id: nanoid(),
          task: 'Creating the hotel\'s OVH accounts'
        },
        {
          id: nanoid(),
          task: 'Deployment of the website'
        }
      ]

    },
    {
      id: nanoid(),
      companyUrl:'https://www.edureka.co/',
      companyName: 'Fullstack Internship Program - MERN Technologies',
      role: 'FullStack developer',
      companyDesc: 'A renowned Indian firm for training global IT experts',
      period: 'March, 2024 - Date',
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
          task: 'Project presentation'
        }
      ]
    }

]