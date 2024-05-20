import React from 'react'
import "./Internship.css"
import Internfinal from "../../Assest/internfinal.png"
const Internship = () => {
    return (
        <div className='internship'>
            <h2>How does the Internship Program works ?</h2>
            <div className="intern">
                <div className="interndetails">
                    <img src={Internfinal} alt="" />
                    <p>Learn from our structured pre recorded courses made by experts to meet industry needs</p>
                </div>
                <div className="interndetails">
                    <img src={Internfinal} alt="" />
                    <p>Personal mentors to guide and help you throughout your journey as a friend</p>
                </div>
                <div className="interndetails">
                    <img src={Internfinal} alt="" />
                    <p>Get guaranteed paid internships after completion of the program along with course completion certificates</p>
                </div>
                <div className="interndetails">
                    <img src={Internfinal} alt="" />
                    <p>1:1 live doubt solving support available throughout the day to clear your doubts instantly </p>
                </div>
                <div className="interndetails">
                    <img src={Internfinal} alt="" />
                    <p>Build major projects which makes your resume stand apart </p>
                </div>
            </div>
            <hr className='hr1' />
            <hr className='hr2' />
            <hr className='hr3' />
            <hr className='hr4' />
            <button className='apply'>Apply now for ₹ 2999</button>
        </div>
    )
}

export default Internship