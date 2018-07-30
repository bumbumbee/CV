import React from 'react';
import profilePic from '../img/sj.jpg'
import phone from '../img/mobile-alt-solid.svg'
import email from '../img/envelope-open-solid.svg'
import git from '../img/github-brands.svg'

class Header extends React.Component {
    render() {
        return (
            <header className="Header">
                <h1>Simona Jagelavičiūtė</h1>
                <ul className="contacts">
                    <a href="tel:+37065159964"><img src={phone} alt=""/> +37065159964</a>
                    <a href="mailto:simona.jag@gmail.com"><img src={email} alt=""/> simona.jag@gmail.com</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/bumbumbee"><img src={git} alt=""/> /bumbumbee</a>
                </ul>
                <img className="profile" src={profilePic} alt=""/>
            </header>
        );
    }
}

export default Header