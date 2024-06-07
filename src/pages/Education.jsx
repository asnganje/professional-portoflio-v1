import { Header } from "../components";
import { nanoid } from "nanoid";

const data = [
	{
		id: nanoid(),
		title: 'Kenyatta University',
		location: 'Nairobi, KE',
		cert:  'Bsc. Software Engineering',
		achieve: 'Second Class'
	},
	{
		id: nanoid(),
		title: 'Microverse Inc',
		location: 'SF, USA',
		cert:  'FullStack Developer',
		achieve: 'JavaScript, ReactJs, Ruby on Rails, Postgres'
	},
	{
		id: nanoid(),
		title: 'Kreativstorm',
		location: 'Berlin, Germany',
		cert:  'FrontEnd Developer',
		achieve: 'ReactJs, JavaScript'
	},
	{
		id: nanoid(),
		title: 'Edureka',
		location: 'Bangalore, India',
		cert:  'MERN Stack developer',
		achieve: 'MongoDB, ExpressJs, ReactJs, NodeJs'
	},
]

const Education = () => {
    return <div className="edu">
		<Header title="education"/>
		<div className="edu-top-div">
			{data.map((item)=> {
				const {id, title, location, cert, achieve} = item
				return(
					<div key={id} className="edu-items-div">
						<h3>{title}</h3>
						<p>{location}</p>
						<ul className="edu-ul">
							<li>{cert}</li>
							<li>{achieve}</li>
						</ul>
					</div>
				)
			})}
		</div>
	</div>
}

export default Education;