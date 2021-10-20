import React from 'react';
const Skills = () => {
    return (
        <>
            <div className="container h-100 d-flex  flex-column justify-content-center">
                <h1 className="text-uppercase fw-bolder" style={{ color: "#fe0435" }}>Skills</h1>
                <div className="my-3">
                    <div className="d-flex justify-content-between w-100 fw-bold">
                        <span>HTML</span>
                        <span>85%</span>
                    </div>
                    <div class="progress">
                        <div class="progress-bar bg-primary" role="progressbar" style={{ width: '85%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className="my-3">
                    <div className="d-flex justify-content-between w-100 fw-bold">
                        <span>CSS</span>
                        <span>90%</span>
                    </div>
                    <div class="progress">
                        <div class="progress-bar bg-primary" role="progressbar" style={{ width: '90%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className="my-3">
                    <div className="d-flex justify-content-between w-100 fw-bold">
                        <span>Python</span>
                        <span>85%</span>
                    </div>
                    <div class="progress">
                        <div class="progress-bar bg-primary" role="progressbar" style={{ width: '85%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className="my-3">
                    <div className="d-flex justify-content-between w-100 fw-bold">
                        <span>Javascript</span>
                        <span>75%</span>
                    </div>
                    <div class="progress">
                        <div class="progress-bar bg-primary" role="progressbar" style={{ width: '75%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className="my-3">
                    <div className="d-flex justify-content-between w-100 fw-bold">
                        <span>Jquery</span>
                        <span>80%</span>
                    </div>
                    <div class="progress">
                        <div class="progress-bar bg-primary" role="progressbar" style={{ width: '80%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className="my-3">
                    <div className="d-flex justify-content-between w-100 fw-bold">
                        <span>React js</span>
                        <span>75%</span>
                    </div>
                    <div class="progress">
                        <div class="progress-bar bg-primary" role="progressbar" style={{ width: '75%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className="my-3">
                    <div className="d-flex justify-content-between w-100 fw-bold">
                        <span>MySQL</span>
                        <span>90%</span>
                    </div>
                    <div class="progress">
                        <div class="progress-bar bg-primary" role="progressbar" style={{ width: '90%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills
