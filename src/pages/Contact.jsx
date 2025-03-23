import { Header } from "../components";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

let recipient = "abd.nganje@gmail.com"
const Contact = () => {
return <div className="cont">
                <Header title="Contact"/>
                <div className="contact-details">
                        <p className="contact-p">
                                <a className="contact-a" href={`mailto: ${recipient}`} target="_blank">
                                        <span className="contact-span">
                                          <MdEmail />        
                                        </span>
                                        abd.nganje@gmail.com
                                </a>
                        </p>
                        <p className="contact-p">
                          <a className="contact-a" href="https://github.com/asnganje" target="_blank">
                                        <span className="contact-span">
                                          <FaGithub />        
                                        </span>
                                        https://github.com/asnganje
                                </a>
                        </p>
                        <p className="contact-p">
                          <a className="contact-a" href="https://www.linkedin.com/in/abdulrahman-nganje/" target="_blank">
                                        <span className="contact-span">
                                          <FaLinkedinIn/>        
                                        </span>
                                        https://www.linkedin.com/in/abdulrahman-nganje/
                                </a>
                        </p>
                </div>
        </div>
}

export default Contact;