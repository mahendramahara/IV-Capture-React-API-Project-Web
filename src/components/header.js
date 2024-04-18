import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    const redirectToLinkedin = () => {
        window.open("https://www.linkedin.com/in/mahendramahara/", '_blank');
    }

    return (
        <>
            <header>
                <div className="logo">
                    <img src="images/logo.jpg" alt="Logo"/>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Images</Link></li>
                        <li><Link to="/Video">Videos</Link></li>
                        <li><Link to="/Copyright">Copyright</Link></li>
                        <li><Link to="/About">About Me</Link></li>
                    </ul>
                </nav>
                <div className="profile">
                    <img src="images/my-profile.jpg" alt="Profile" onClick={redirectToLinkedin}/>
                </div>
            </header>
        </>
    )
}

export default Header;