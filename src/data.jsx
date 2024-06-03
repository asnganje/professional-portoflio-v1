import {FaArrowTrendUp, FaUser, FaGraduationCap } from "react-icons/fa6";
import { RiBarChartFill } from "react-icons/ri";
import { MdEmail, MdOutlineStickyNote2 } from "react-icons/md";
import { IoStarSharp } from "react-icons/io5";
import { GoProjectSymlink } from "react-icons/go";
import { nanoid } from "nanoid";

export const data = [
    {
        id: nanoid(),
        url: '/about',
        text:'About',
        icon: <FaUser />
    },
    {
        id: nanoid(),
        url: '/experience',
        text:'Experience',
        icon: <FaArrowTrendUp />
    },
    {
        id: nanoid(),
        url: '/projects',
        text:'Projects',
        icon: <GoProjectSymlink />
    },
    {
        id: nanoid(),
        url: '/skills',
        text:'Skills',
        icon: <RiBarChartFill />
    },
    {
        id: nanoid(),
        url: '/awards',
        text:'Awards',
        icon: <IoStarSharp />
    },
    {
        id: nanoid(),
        url: '/education',
        text:'Education',
        icon: <FaGraduationCap />
    },
    {
        id: nanoid(),
        url: '/contact',
        text:'Contact',
        icon: <MdEmail />
    },
    {
        id: nanoid(),
        url: '/resume',
        text:'Resume',
        icon: <MdOutlineStickyNote2 />
    }
]