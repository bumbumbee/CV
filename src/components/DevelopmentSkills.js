import React from 'react';
import icon from '../img/react-brands.svg'

class DevelopmentSkills extends React.Component {

    state = {
        frontend: ['HTML', 'CSS/SASS', 'JavaScript (es6, React + Redux)'],
        backend: ['Node.js', 'PHP (Laravel)'],
        database: ['MongoDB', 'MySQL']
    };

    render() {
        const frontend = this.state.frontend.map((fr, i) => {
            return <h4 key={i}>{fr}</h4>
        });

        const backend = this.state.backend.map((bck, i) => {
            return <h4 key={i}>{bck}</h4>
        });

        const database = this.state.database.map((db, i) => {
            return <h4 key={i}>{db}</h4>
        });


        return (
            <div className="DevelopmentSkills">
                <div className="heading">
                    <img src={icon} alt=""/>
                    <h3>Development Skills <span>(junior, eager and excited to learn more)</span></h3>
                </div>
                <div className="dev-lang">
                    <div className="front">Front-end:
                        {frontend}
                        <h5>This CV was built in React, the code could be checked here: <a target="_blank" rel="noopener noreferrer" href="https://github.com/bumbumbee/CV">https://github.com/bumbumbee/CV</a>
                        </h5>
                    </div>

                    <div className="back">Back-end:
                        {backend}
                    </div>

                    <div className="db">Databases:
                        {database}
                    </div>
                </div>
            </div>
        );
    }
}

export default DevelopmentSkills