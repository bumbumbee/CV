import React from 'react';
import person from '../img/user-solid.svg'
import heart from '../img/heart-solid.svg'

class Footer extends React.Component {
    state = {
        qualities: ['Progress-oriented', 'Quality-oriented', 'Curious', 'Open-minded', 'Precise'],
        hobbies: ['Sci-fi', 'Dystopian literature', 'Perfumes', 'Minimalism']
    };

    render() {

        const qualities = this.state.qualities.map((quality, i)=>{
            return <li key={i}>{quality}</li>
        });

        const hobbies = this.state.hobbies.map((hobby, i)=>{
            return <li key={i}>{hobby}</li>
        });

        return (
            <footer className="Footer">
                <div className="personality">
                    <div className="heading">
                        <img src={person} alt=""/>
                        <h3>Personal Qualities</h3>
                        <ul>
                            {qualities}
                        </ul>

                    </div>
                </div>
                <div className="hobbies">
                    <div className="heading">
                        <img src={heart} alt=""/>
                        <h3>I also love...</h3>
                        <ul>
                            {hobbies}
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }

};
export default Footer
