import React from 'react';
import phone from '../img/mobile-alt-solid.svg'
import email from '../img/envelope-open-solid.svg'
import git from '../img/github-brands.svg'
import linkedin from '../img/linkedin-brands.svg'

class Header extends React.Component {
    render() {
        return (
            <header className="Header">
                <div className="profile"></div>
                <h1>Simona Jagelavičiūtė</h1>
                <ul className="contacts">
                    <a href="tel:+37065159964"><img src={phone} alt=""/> +37065159964</a>
                    <a href="mailto:simona.jag@gmail.com"><img src={email} alt=""/> simona.jag@gmail.com</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/bumbumbee"><img src={git} alt=""/> /bumbumbee</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/simona-jagelavi%C4%8Di%C5%ABt%C4%97-70820b169/"> <img src={linkedin} alt=""/> /in/simona-jagelavičiūtė</a>
                </ul>

            </header>
        );
    }
}

export default Header
