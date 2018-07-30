import React from 'react';
import icon from '../img/graduation-cap-solid.svg'

class Education extends React.Component {
    state = {
        education: [
            {
                school: "Baltic Talents Lithuania",
                title: "WEB Development",
                year: "2018 02-08"
            },
            {
                school: "Vilnius Coding School",
                title: "Beginner Programming",
                year: "2016 09-10"
            },
            {
                school: "Vilnius University",
                title: "Lithuanian Philology and Finnish Language",
                year: "2010-2014"
            }
        ],
        languages: [
            {
                title: "English",
                level: "C1"
            },
            {
                title: "Finnish",
                level: "B1"
            },
            {
                title: "Russian",
                level: "B1"
            }
        ]
    }

    ;

    render() {
        const education = this.state.education.map((ed, i) => {
            return (
                <div key={i} className="school">
                    <h4>{ed.school} - {ed.title}</h4>
                    <h5>{ed.year}</h5>
                </div>
            )
        });

        const languages = this.state.languages.map((lang, i) => {
            return (
                <div className="languages" key={i}>
                    <h4>{lang.title}-{lang.level}</h4>
                </div>
            )
        });

        return (
            <div className="Education">
                <div className="heading">
                    <img src={icon} alt=""/>
                    <h3>Education</h3>
                </div>
                {education}
                <h4 className="block-languages"> Language Knowledge:
                    {languages}
                </h4>

            </div>
        );
    }
}

export default Education