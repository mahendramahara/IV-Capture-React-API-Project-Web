import './about.css'

export const About = () => {
    return (
        <>
            <div className="about-me-container">
                <h1 className='about-me-title'>DEVELOPER INFORMATION</h1>
                <div className="about-me-info">
                    <img src="images/photo.jpg" alt="About Img" className="about-me-photo" onClick={() => window.open("https://www.linkedin.com/in/mahendramahara/", "_blank")} />
                    <div className="about-me-text">
                        <p>I am a BCA (Bachelor of Computer Application) student from Nepal, passionate about creating seamless user experiences with JavaScript's MERN stack. Skilled in HTML5, CSS3, Python Django, and ASP.NET. Proficient in React, Node.js, Express, MongoDB, and UI/UX design. I love collaborating and learning new tech. Let's connect and explore innovation together.</p>
                        <p>Feel free to reach out to me through my LinkedIn profile to discuss projects, tech trends, or just to say hello!</p>
                        <div className="social-links">
                            <button onClick={() => window.open("https://www.linkedin.com/in/mahendramahara/", "_blank")} className='socialButton'>Linkedin</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}