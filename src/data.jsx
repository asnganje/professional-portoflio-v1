import {FaArrowTrendUp, FaUser, FaGraduationCap } from "react-icons/fa6";
import { RiBarChartFill } from "react-icons/ri";
import { MdEmail, MdOutlineStickyNote2 } from "react-icons/md";
import { IoStarSharp } from "react-icons/io5";
import { GoProjectSymlink } from "react-icons/go";
import { nanoid } from "nanoid";

export const data = [
    {
        id: nanoid(),
        url: 'about',
        text:'About',
        icon: <FaUser />,
        color:'#008073'
    },
    {
        id: nanoid(),
        url: 'experience',
        text:'Experience',
        icon: <FaArrowTrendUp />,
        color:'#00bcd4'
    },
    {
        id: nanoid(),
        url: 'projects',
        text:'Projects',
        icon: <GoProjectSymlink />,
        color:'#3f51b5'
    },
    {
        id: nanoid(),
        url: 'skills',
        text:'Skills',
        icon: <RiBarChartFill />,
        color:'#9c27b0'
    },
    {
        id: nanoid(),
        url: 'awards',
        text:'Awards',
        icon: <IoStarSharp />,
        color:'#F44336'
    },
    {
        id: nanoid(),
        url: 'education',
        text:'Education',
        icon: <FaGraduationCap />,
        color:'#ff9800'
    },
    {
        id: nanoid(),
        url: 'contact',
        text:'Contact',
        icon: <MdEmail />,
        color:'#795548'
    },
    {
        id: nanoid(),
        url: 'resume',
        text:'Resume',
        icon: <MdOutlineStickyNote2 />,
        color:'#424242'
    }
]