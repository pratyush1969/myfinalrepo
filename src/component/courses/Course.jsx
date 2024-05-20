import React from 'react'
import "./Course.css"
const Course = () => {
    return (
        <div className='course'>
            <div className="heading">
                <p>DATASCIENCE COURSE LEARNING PATH</p>
            </div>
            <h2><span>Data Science</span> Course Curriculum</h2>
            <div className="course-content">
                <div className="corse-details">
                    <div className="course-lecture">
                        <h3>C++</h3>
                        <p>Learn C++ for strong programming fundamentals</p>
                    </div>
                    <div className="view">
                        <p><i class="fa-regular fa-eye"></i></p>
                        <a href="#">View Curriculam</a>
                    </div>
                </div>
                <div className="corse-details">
                    <div className="course-lecture">
                        <h3>MERN Stack</h3>
                        <p>Master the MERN stack for high-demand projects</p>
                    </div>
                    <div className="view">
                        <p><i class="fa-regular fa-eye"></i></p>
                        <a href="#">View Curriculam</a>
                    </div>
                </div>
                <div className="corse-details">
                    <div className="course-lecture">
                        <h3>Data Structure & Algorithm</h3>
                        <p>Excel in Data Structures and Algorithms for interview success.</p>
                    </div>
                    <div className="view">
                        <p><i class="fa-regular fa-eye"></i></p>
                        <a href="#">View Curriculam</a>
                    </div>
                </div>
                <div className="corse-details">
                    <div className="course-lecture">
                        <h3>Competitve Programming</h3>
                        <p>Excel in Data Structures and Algorithms for interview success.</p>
                    </div>
                    <div className="view">
                        <p><i class="fa-regular fa-eye"></i></p>
                        <a href="#">View Curriculam</a>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Course