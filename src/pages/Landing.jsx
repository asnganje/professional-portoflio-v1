import profImg from '../assets/profileImg.jpeg'

const Landing = () => {
    return <div className="land">
                <h3 className='top-desc'>I want to <span className='things'>create things</span> <br/> that truly  
                <span> </span><span className='diff'>make a difference</span></h3>
                <img src={profImg} alt="profile-pic" className='profile-pic'/>
        </div>
}

export default Landing;