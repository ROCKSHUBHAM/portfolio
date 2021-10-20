import React, { useState } from 'react'

const Contact = () => {
    let [data,updatedata]=useState({name:"",email:"",subject:"",message:""});
    function show(event){
        updatedata({...data,[event.target.name]:event.target.value})
    }
    function submits(event){
        event.preventDefault();
        console.log(data);
    }
    return (
        <>
            <div className="container h-100 d-flex  flex-column   justify-content-center">
                <h1 className="text-center fw-bolder" style={{ color: "#fe0435" }}>Contact</h1>
                <form action="" onSubmit={submits}>
                    <div className="row mt-4">
                        <div className="col-6">
                            <input type="text" name="name" className="form-control text-capitalize" value={data.name} placeholder="your name " onChange={show} />
                        </div>
                        <div className="col-6">
                            <input type="text" name="email"  className="form-control text-capitalize" value={data.email} placeholder="your email " onChange={show}  />
                        </div>

                    </div>
                    <div className="row mt-3">
                        <div className="col-12">
                            <input type="text" name="subject" id="" className="form-control text-capitalize" value={data.subject} placeholder="Subject " onChange={show}  />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12">
                            <textarea name="message"  className="form-control text-capitalize" rows="5" value={data.message} placeholder="message" onChange={show} ></textarea>
                        </div>
                    </div>
                    <button className="btn btn-primary form-control mt-3 text-capitalize">send message</button>
                </form>
            </div>
        </>
    )
}

export default Contact;
