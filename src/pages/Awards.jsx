import { Header } from "../components";
import { nanoid } from "nanoid";
const data = [
        {
        id: nanoid(),
        title: 'best code presenter',
        location: 'Edureka | 2024',
        desc:  'Chosen by students and the instructor as the best code presenter during project presentations.'
        },
        {
        id: nanoid(),
        title: 'Employee of the month',
        location: 'Pemba Beach resort | Dec, 2023',
        desc:  'Presented to the employee who demonstrates the highest value, earning the Employee of the Month recognition.'
        },
        {
        id: nanoid(),
        title: 'top collaborator award',
        location: 'Microverse | 2022',
        desc:  'Awarded to students who excel in collaborating with their fellow developers during the learning process.'
        },
	{
        id: nanoid(),
        title: 'INNOVATION AWARD',
        location: 'CGK, Vocational Training | 2020',
        desc:  'Voted for the best innovation idea in ICT - Local authority\'s vocational training unit.'
        },
	{
	id: nanoid(),
	title: 'Employee of the year',
	location: 'CGK, Kenya | DEC 2016',
	desc:  'Recommended by management and colleagues for outstanding work ethic and commitment to clients.'
	},
        {
        id: nanoid(),
        title: 'DEAN\'S SCHOLAR',
        location: 'Kenyatta University | DEC 2013',
        desc:  'One of just 20 students in the School of Engineering & Technology recognized by faculty for exceptional academic performance and intellectual potential.',
        },
]


const Awards = () => {
    return <div className="award">
                <Header title="Awards"/>
                <div className="award-top-div">
                {data.map((item)=> {
				const {id, title, location, desc} = item
				return(
					<div key={id} className="div-award-item">
						<h3 className="award-title">{title}</h3>
						<p>{location}</p>
						<ul>
							<li>{desc}</li>
						</ul>
					</div>
				)
			})}
		</div>
        </div>
}

export default Awards;