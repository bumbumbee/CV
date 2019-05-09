import React from 'react';
import icon from '../img/building-solid.svg'

class WorkExperience extends React.Component {

    state = {
        experience: [
            {
                company: "iMAS",
                position: "Frontend Developer",
                year: "2018-10 - now",
                specification: "Working in various WEB projects with both Lithuanian and foreign clients and building full frontend (bekredito.lt savitarna, socialshaft.com, balticassist.com)/ " +
                    "Writing clean and responsive code/ " +
                    "Being pixel-accurate/ " +
                    "Creating reusable components with JS/ " +
                    "Currently updating meniu.lt according to new design/ " +
                    "Maintaining projects which are already in production (e.g. tomasgold.lt, smarttaxi.lt)"
            },
            {
                company: "Norian UAB",
                position: "Accounting Specialist",
                year: "2017-03 - 2018-10",
                specification: "Handling of invoices, payments to vendors, monthly reconciliations, communication related to everyday issues/ " +
                "Active participation in discussions related to process optimization, also approx. 50 overtime hours spent on removing huge backlogs/ " +
                "Amendment of work instructions/ "  +
                "Training new team members"
            },
            {
                company: "Lindorff Business Services",
                position: "Back Office Specialist",
                year: "2014-12 - 2017-03",
                specification: "Handling debt collection tasks - operational targets exceeded up to 30%/ "  +
                "Participation in improving collection processes in Finland/ " +
                "Active participation in process mapping (10 of 22 processes mapped)/ "  +
                "Amendment of work instructions/ "  +
                "Training new team members"
            },
            {
                company: "Danske bank GSL",
                position: "Junior Specialist",
                year: "2014-02 - 2014-10",
                specification: "Invoice handling, payments, document translating (FI-ENG)"
            }
        ]
    };

    render() {

        const jobs = this.state.experience.map((job, i)=>{
            return (
                <div key={i} className="job">
                    <h4>{job.company} - {job.position} ({job.year})</h4>
                    <p>{job.specification}</p>
                </div>
            )
        });

        return (
            <div className="WorkExperience">
                <div className="heading">
                    <img src={icon} alt=""/>
                    <h3>Work Experience</h3>
                    {jobs}
                </div>
            </div>
        );
    }
}

export default WorkExperience
