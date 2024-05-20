import React from 'react'
import "./Mainbody.css"
import First from "../../Assest/first-final.png"
const Mainbody = () => {
    return (
        <div className='mainbody'>
            <div className="upperbox">
                <i class="fa-solid fa-graduation-cap"></i>
                <p>An <b>IIT Delhi</b> Alumini Initiative</p>
            </div>
            <div className="middletext">
                <h1><b>Become an expert in the <br />field of <span>Data Science <br />with 6 courses</span></b></h1>
            </div>
            <div className="lowertext">
                A specially crafted Tech Kickstarter, with <b>5+ extensive online courses.</b>
            </div>
            <div className="icons">
                <div className="first">
                    <img src={First} alt="" />
                    <p>Personal Mentorship</p>
                </div>
                <div className="first">
                    <img src={First} alt="" />
                    <p>Internship Assistance</p>
                </div>
                <div className="first">
                    <img src={First} alt="" />
                    <p>Industry Certified Course</p>
                </div>
            </div>
            <div className="button">
                <button>Enroll Now <i class="fa-regular fa-paper-plane"></i></button>
                <button>Know More <i class="fa-regular fa-circle-question"></i></button>
            </div>
        </div>
    )
}

export default Mainbody