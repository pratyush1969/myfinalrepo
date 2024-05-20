import React from 'react'
import "./Working.css"
import Step1 from "../../Assest/step1final.png"
import Step2 from "../../Assest/step2final.png"
import Step3 from "../../Assest/step3final.png"
import Course from "../../Assest/coursesfinal.png"
const Working = () => {
  return (
    <div className='working'>
      <h2>Don't miss out on this <span>limited-time</span><br /> <span>opportunity</span> to learn for <span>Free!</span></h2>
      <div className="box">
        <h3>100% Refund offer 😎</h3>
        <p>20 Seats left</p>
        <div id="progress"></div>
        <div className='ball'></div>
        <p className='time'><i class="fa-regular fa-clock"></i> Offer ends in 10:00Mins</p>
      </div>
      <b className='bold'><h3>How does it work?</h3></b>
      <div className='content'>
      <div className="arrow">
        <img src={Step1} alt="" />
        <hr />
        <img src={Step2} alt="" />
        <hr />
        <img src={Step3} alt="" />
      </div>
      <div className="stepdetails">
        <div className="step1">
          <h2>Step 1 : Enroll into your favourite course for only ₹1,499 </h2>
          <img src={Course} alt="" />
          <p>Start Learning with <b>Lifetime Course Access</b></p>
        </div>
        <div className="step1">
          <h2>Step 2: Complete Course & Assignments within 2 Years!</h2>
          <div className="inside-details">
            <span>2</span> years time from the date of enrollment
          </div>
          <p>Finish the course within <b>2 Years </b>to Qualify for Refund</p>
        </div>
        <div className="step1">
          <h2>Step 3: Receive 100% Refund upon completion </h2>
          <div className="inside-details">
            <span>100%</span>Enrollment Fee is refunded
          </div>
          <p>Upon course completion within <b>2 Years,get Your ₹1,499 back</b></p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Working