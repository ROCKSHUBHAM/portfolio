import React from 'react';
import Typed from 'react-typed';

import Aboutimg from '../Images/about.jpg';
const About = () => {
    return (
        <>
            <div className="container h-100 d-lg-flex align-items-lg-center pt-lg-1 pt-3">
                <div className="about row">
                    <div className="col-lg-6 d-flex justify-content-center align-items-start  ">
                        <img src={`${Aboutimg}`} alt="images" className="img-fluid  rounded-1" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="text-uppercase fw-bolder" style={{ color: "#fe0435" }}>about me </h1>
                        <div>
                            <h5 className="fw-bold">I'm shubham and I am <span style={{ color: "#fe0435" }}> <Typed
                                strings={[
                                    'Full stack developer.. ',
                                    'Python developer..',
                                    'React developer..']}
                                typeSpeed={40}
                                backSpeed={50}
                                loop >
                            </Typed> </span></h5>
                            <p>Hello! my name shubham patidar.I am a full web full stack developer.I have acquired the skill and knowledge necessary to make your project a success</p>
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                            <div>
                                <h5><span className="fw-bold text-capitalize">Brithday :</span> 03-sep-1998</h5>
                            </div>
                            <div>
                                <h5><span className="fw-bold text-capitalize">Age :</span> 23</h5>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                            <div>
                                <h5><span className="fw-bold text-capitalize">Degree:</span> B.Tech</h5>
                            </div>
                            <div>
                                <h5><span className="fw-bold text-capitalize">Phone :</span>+91 123457890</h5>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                            <div>
                                <h5><span className="fw-bold text-capitalize">City:</span> Indore,MP</h5>
                            </div>
                            <div>
                                <h5><span className="fw-bold text-capitalize">Email :</span>example@gmail.com</h5>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                            <div>
                                <h5><span className="fw-bold text-capitalize">Website : </span>www.website.com</h5>
                            </div>
                            <div>
                                <h5><span className="fw-bold text-capitalize">Freelance  :</span>Available</h5>
                            </div>
                        </div>
                        <div className="text-capitalize my-lg-4 my-3">
                            <button className="btn btn-lg btn-danger rounded-pill ">Hire me</button>
                            <button className="btn  btn-lg btn-danger rounded-pill mx-3">Download CV</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About;