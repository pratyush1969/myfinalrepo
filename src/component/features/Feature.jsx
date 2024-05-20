import React from 'react'
import  "./Features.css"
import Firstfinal from "../../Assest/firstitemfinal.png"
import Edufinal from "../../Assest/edufinal.png"
import Comfinal from "../../Assest/comfinal.png"
import Camera from "../../Assest/Camera.png"
const Feature = () => {
  return (
    <div className='feature'>
        <div className="feature-item">
            <img src={Firstfinal} alt="" />
            <div className="text">
                <h1>24</h1>
                <p>Courses</p>
            </div>
        </div>
        <div className="feature-item">
            <img src={Edufinal} alt="" />
            <div className="text">
                <h1>30K+</h1>
                <p>Learners</p>
            </div>
        </div>
        <div className="feature-item">
            <img src={Comfinal} alt="" />
            <div className="text">
                <h1>100K+</h1>
                <p>Doubts Solved</p>
            </div>
        </div>
        <div className="feature-item">
            <img src={Camera} alt="" />
            <div className="text">
                <h1>10K+</h1>
                <p>Student Projects</p>
            </div>
        </div>
    </div>
  )
}

export default Feature