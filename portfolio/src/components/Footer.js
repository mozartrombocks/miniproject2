// Create your Footer component here
import { FaLinkedin } from 'react-icons/fa'; 

const Footer = () => {
    return (
        <footer id = "footer" className = "footer">
            <div className = "footer-contact-info">
                <h1 className = "footer-heading">Connect With me</h1>
                <p className = "footer-contact-access">Email: shadman9702@gmail.com</p>
                <p className = "footer-contact-access">Mobile: (+1)347-666-4673 </p>
            </div>
        <div>
            <h1>Social Links</h1>
            <div className = "social-icons">
                <a href = "https://www.linkedin.com/in/mo-rahman-465b9286/"><i>
                    <FaLinkedin /></i></a></div> 
        </div>

        </footer>
    )
}

export default Footer; 