import React from 'react'

const Services = () => {
    return (
        <>
            <div className="container h-100 d-flex flex-column justify-content-lg-center pt-lg-1 pt-3 ">
                <h1 className="text-center fw-bolder" style={{ color: "#fe0435" }}>Services</h1>
                <div className="row mt-sm-5">
                    <div className="col-md-4 my-3 ">
                        <div className="card text-center service_card">
                            <div className="card-header card_icon">
                                <i className="fas fa-laptop-code card-img-top fa-3x my-5"></i>
                            </div>
                            <div className="card-body card_body">
                                <h5 className="card-title">Web Development</h5>
                                <p className="card-text">Developing a interactive, smooth & dynamic web  experiences. </p>
                                <button className="btn card-subtitle">Read more&#8594;</button>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4 my-3 ">
                        <div className="card text-center service_card2">
                            <div className="card-header card_icon">
                                <i className="fas fa-tablet-alt card-img-top fa-3x my-5"></i>
                            </div>
                            <div className="card-body card_body">
                                <h5 className="card-title">Web Design</h5>
                                <p className="card-text">Designing clean, responsive and user-friendly website templates. </p>
                                <button className="btn card-subtitle">Read more&#8594;</button>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4 my-3">
                        <div className="card text-center service_card3">
                            <div className="card-header card_icon">
                                <i className="fas fa-meteor card-img-top fa-3x my-5"></i>
                            </div>
                            <div className="card-body card_body">
                                <h5 className="card-title">SEO Optimization</h5>
                                <p className="card-text">Improve your website visibility on Google & other search engines.</p>
                                <button className="btn card-subtitle">Read more&#8594;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;
