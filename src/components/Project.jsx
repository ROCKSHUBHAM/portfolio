import React from 'react';
import { NavLink } from 'react-router-dom';
import img1 from '../Images/img1.png';
import img2 from '../Images/img2.png';
import img3 from '../Images/img3.png';
import img4 from '../Images/img4.png';

const Project = () => {
    return (
        <>
            <div className="container h-100 pt-3">
                <div className="row mt-2">
                    <div className="col-sm-4 my-2">
                        <div className="card border-1">
                            <img src={`${img1}`} alt="" className="img-fluid" />
                            <div className="card-footer">
                                <div className="card-title d-flex justify-content-between">
                                    <h2 className="text-capitalize fw-bold">weather app</h2>
                                    <NavLink exact to="/come" className="btn btn-primary">live Demo</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 my-2">
                        <div className="card border-1">
                            <img src={`${img2}`} alt="" className="img-fluid" />
                            <div className="card-footer">
                                <div className="card-title d-flex justify-content-between">
                                    <h2 className="text-capitalize fw-bold">electronics </h2>
                                    <NavLink exact to="/come" className="btn btn-primary">live Demo</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 my-2">
                        <div className="card border-1">
                            <img src={`${img3}`} alt="" className="img-fluid" />
                            <div className="card-footer">
                                <div className="card-title d-flex justify-content-between">
                                    <h2 className="text-capitalize fw-bold">portfolio</h2>
                                    <NavLink exact to="/come" className="btn btn-primary">live Demo</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 my-2">
                        <div className="card border-1">
                            <img src={`${img4}`} alt="" className="img-fluid" />
                            <div className="card-footer">
                                <div className="card-title d-flex justify-content-between">
                                    <h2 className="text-capitalize fw-bold">Calculator</h2>
                                    <NavLink exact to="/come" className="btn btn-primary">live Demo</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project;
