import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';



const Details = ({data}) => {
    const { id } = useParams();
    const detail = [];
    if (data[id]) {
        detail.push(data[id]);
    }
    
    return (        
        <div className="container-fluid">
            <div className="d-flex d-row justify-content-center rounded-2">
                <div className="">
                    {detail.map((job, key) => {
                    
                        return(
                            <div key={key}>
                                
                                <div className="container px-5 justify-content-center">

                                    <div className="negative-margin rounded-2 main d-none d-md-block d-lg-block d-xl-block ">
                                        <div className="d-flex d-row align-items-center">
                                            <div className="col-md-2 col-lg-2 text-center text-md-center px-5 py-5" style={{backgroundColor:job.logoBackground}}>
                                                <img src={`.${job.logo}`} alt="logo"/>   
                                            </div>
                                            <div className="col-md-6 col-lg-7 ps-2">
                                                <h1 className="fs-5 fw-bolder ps-3 text-start color">{job.company}</h1>
                                                <p className="ps-3 text-start content-text-size">{job.company}.com</p>
                                            </div>
                                            <div className="col-3 text-center p-4">
                                                <button className="btn content-site-button"><a className="text-decoration-none company-site-color " href={job.website}>Company Site</a></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="negative-margin rounded-2 main d-block d-sm-block d-md-none">
                                        <div className="d-flex d-row justify-content-center">
                                            <div className="col-2 d-block  px-7 py-3 rounded-4 negative-margin-icon" style={{backgroundColor:job.logoBackground}}>
                                                <img src={job.logo} alt="logo2"/>   
                                            </div>
                                        </div>
                                        <div className="col-12 pt-3 pb-4">
                                            <h1 className="fs-5 fw-bolder text-center color">{job.company}</h1>
                                        </div>
                                        <div className="col-12 text-center pb-5">
                                            <button className="btn content-site-button"><a className="text-decoration-none content-site-button " href={job.website}>Company Site</a></button>
                                        </div>  
                                    </div>

                                    <div className="container p-5 mt-5 main">

                                        <div className="d-flex d-row">
                                            <div><p className="content-text-size">{job.postedAt}.</p></div>
                                            <div className="ps-2 content-text-size"><p>{job.contract}</p></div>
                                        </div>
                                        <div className="d-none d-md-block d-lg-block d-xl-block">
                                            <div className="d-flex d-row py-3">
                                                <div className="col-md-8 col-lg-10">
                                                    <div><h1 className="fs-4  text-start color content-position-text-size">{job.position}</h1></div>
                                                    <div><h1 className="fs-6 text-start position-color text-size">{job.location}</h1></div>
                                                </div>
                                                <div className="col-md-4 col-lg-2 text-md-end text-lg-start">
                                                    <button className="btn button-color btn-block"><a className="fw-bolder text-light text-decoration-none" href={job.apply}>Apply Now</a></button>
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="d-block d-sm-block d-md-none">
                                            <div className="d-flex d-row py-3">
                                                <div className="col-md-8 col-lg-10">
                                                    <div><h1 className="fs-4  text-start color content-position-text-size">{job.position}</h1></div>
                                                    <div><h1 className="fs-6 text-start position-color text-size">{job.location}</h1></div>
                                                </div>
                                            </div>
                                            <div className="col-12 py-3">
                                                <button className="btn button-color btn-block w-100"><a className="fw-bolder text-light text-decoration-none" href={job.apply}>Apply Now</a></button>
                                            </div> 
                                        </div>
                
                                        <div>
                                            <p className="text-start content-text-size">{job.description}</p>
                                        </div>
                                        <div>
                                            <div><h1 className="fs-6 fw-bolder pt-3 text-start color">Requirements</h1></div>
                                            <div><p className="text-start content-text-size">{job.requirements.content}</p></div>
                                            <div><p className="text-start content-text-size">{job.requirements.items}</p></div>
                                        </div>
                                        <div>
                                            <div><h1 className="fs-6 fw-bolder pt-3 text-start color">What You Will Do</h1></div>
                                            <div><p className="text-start content-text-size">{job.role.content}</p></div>
                                            <div><p className="text-start content-text-size">{job.role.items}</p></div>
                                        </div>
                                    </div>
                                </div> 
                            </div>   
                        )   
                    })}  
                </div>
            </div>
            {detail.map((job, key) => {
                return(
                    <div className="main" key={key}>
                        <div className="container">
                            <div className="d-none d-md-block d-lg-block d-xl-block">
                                <div className="d-flex d-row justify-content-between">
                                    <div className="col">
                                        <div className="" >
                                            <div className="d-flex d-row py-4">
                                                <div className="col-md-6 col-lg-8 ps-4">
                                                    <div><h1 className="fs-5 color text-start position-text-size ps-5">{job.position}</h1></div>
                                                    <div><h1 className="fs-6 text-start content-text-size ps-5">So Digital Inc</h1></div>
                                                </div>
                                                <div className="col-md-6 col-lg-4 ps-5 text-center">
                                                    <button className="btn button-color"><a className="fw-bolder text-light text-decoration-none" href={job.apply}>Apply Now</a></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 py-3 d-block d-sm-block d-md-none">
                                <button className="btn btn-md button-color w-100"><a className="fw-bolder text-light text-decoration-none" href={job.apply}>Apply Now</a></button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>  
    )
}

export default Details;