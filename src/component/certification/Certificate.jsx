import React from 'react'
import "./Certificate.css"
import Logo from "../../Assest/logofinal.png"
import Rightpic from "../../Assest/rightpic.jpg"
import Awardstar from "../../Assest/awardstarfinal.png"
const Certificate = () => {
    return (
        <div className='certificate'>
            <h2>Unlock <span>6 Certificate </span>& <span>Internship Opportunities!</span></h2>
            <div className="total-body">
                <div className="main-body-left">
                    <h3>Get 6 Industry recognized <br />Certifications!</h3>
                    <div className='main-content'>
                        <div className="left-main">

                            <div className="left">
                                <div className="upper">
                                    <p>CERTIFICATE-ID: TD-UIUX-2023-234</p>
                                    <p>DATE OF ISSUE: SEPTEMBER 6, 2023</p>
                                </div>
                            </div>
                            <div className="middle">
                                <p>UI UX DESIGNING</p>
                                <h1>CERTIFIATE OF COMPLETION</h1>
                            </div>
                            <div className="site">
                                WWW.LOGO.COM
                            </div>
                        </div>

                        <div className="right">
                            <div className="upper">
                                <img src={Logo} alt="" />
                                <p>verify at www.LOGO.com/verify-certificate</p>
                            </div>
                            <div className="right-middle">
                                <p>THIS CERTIFICATE IS PROUDLY PRESENTED TO</p>
                                <p className='name'>John Doe</p>
                                <p className='para'>This certifies that John Doe completed the UI UX Designing course on September 22, 2023. All coursework and assessments were successfully finished to meet LOGO's standards. LOGO wishes you the best in all your future endeavors.</p>
                            </div>
                            <div className="sign">
                                <div className="left-sign">
                                    <p className='sample'>Sample</p>
                                    <hr />
                                    <b>Abhishek Gangwar</b>
                                    <p className='founder'>Co Founder</p>
                                </div>
                                <div className="right-sign">
                                    <p className='sample'>Sample</p>
                                    <hr />
                                    <b>Abhishek Gangwar</b>
                                    <p className='founder'>Co Founder</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="lowerpart">
                        <div className="leftpart">
                            <img src={Awardstar} alt="" />
                            <p>Official and Verified</p>
                        </div>
                        <div className="leftpart">
                            <img src={Awardstar} alt="" />
                            <p>Enhances Credibility</p>
                        </div>
                    </div>
                </div>
                <div className="main-body-right">
                    <div className='right-content'>
                        <h3>Bag Internship Opportunities!</h3>
                        <p>With every course, we make you not only industry-ready but also help you crack your first internship.</p>
                    </div>
                    <img src={Rightpic} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Certificate