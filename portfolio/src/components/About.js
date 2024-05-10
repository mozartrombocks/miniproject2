// Create your About component here
import IMG from "../assets/Detective.png"

const About = () => {
    return (
        <div id = "about" className = "about">
            <h1 className = "about-heading">About Me</h1>
            <div className = "about-info">
                <p className = "about-desc">Detail-oriented professional with a strong foundation in data entry seeking looking to transition into a software development role. 
                Eager to contribute to team success through hard work and attention to detail. Clear understanding of multiple programming languages and passionate about roles in Machine Learning, Web Development and Data Analysis.</p>
                <div className = "about-img">
                    <div className = "about-img-wrapper">
                    <img src = {IMG} alt = "Detective" />
                    </div>
                </div>
                </div>
        </div>
     )
}
export default About;