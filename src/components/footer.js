import './footer.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Footer = () => {
    
    const [inputValue, setInputValue] = useState('');
    const handleClick = (event) => {
        const linkText = event.target.textContent;
        setInputValue(linkText);

        //scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <footer>
                <div className="footer-container">
                    <div className="footer-section">
                        <h3>Explore This</h3>
                        <ul>
                            <li><Link to="#" onClick={handleClick}>Beach Sunset</Link></li>
                            <li><Link to="#" onClick={handleClick}>Mountain Landscape</Link></li>
                            <li><Link to="#" onClick={handleClick}>City Skyline</Link></li>
                            <li><Link to="#" onClick={handleClick}>Wildlife Photography</Link></li>
                            <li><Link to="#" onClick={handleClick}>Abstract Art</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Top Featured</h3>
                        <ul>
                            <li><Link to="#" onClick={handleClick}>Nature</Link></li>
                            <li><Link to="#" onClick={handleClick}>Technology</Link></li>
                            <li><Link to="#" onClick={handleClick}>Adventure</Link></li>
                            <li><Link to="#" onClick={handleClick}>Architecture</Link></li>
                            <li><Link to="#" onClick={handleClick}>Food</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Contact Us</h3>
                        <p>Email: info@mahendrasingh.com.np</p>
                        <p>Phone: +1234567890</p>
                        <ul className="social-icons">
                            <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                            <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                            <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <p>&copy; 2024 <a href="https://www.linkedin.com/in/mahendramahara/" target="_blank" rel='mySocial'>Mahendra Mahara</a>. All rights reserved.</p>
                </div>
            </footer>

        </>
    )
}

export default Footer;