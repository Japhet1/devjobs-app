import React,{useState} from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import location from '../location.svg';
import search from '../search.svg';
import Form from 'react-bootstrap/Form';



const Cards = ({data}) => {
    const [post, setPost] = useState(9);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchLocation, setSearchLocation] = useState("");
    const [searchContract, setSearchContract] = useState("");
    const LoadMore = () => {
        setPost(post + post)
        document.getElementById("load").remove() 
    }
    
    const slice = data.slice(0, post); 
    
    return (
        <div className="container">
            <Form className=" d-md-block d-lg-block d-xl-block container text-center py-3 px-md-4 rounded-2 main">
                <Form.Group className="d-md-flex d-md-row d-lg-flex d-lg-row align-items-center justify-content-evenly">
                    <div className="col-12 col-md-4 col-lg-5">
                        <Form.Group className="d-flex d-row align-items-center text-center" controlId="">
                            <div className="col-2 pe-3"><img src={search} alt='search' style={{height:24 , width:24}}/></div>
                            <div className="col-9"><Form.Control className="border-0 main color" type="text" placeholder="Filter by companies, expertise…" 
                            onChange={(event) => {
                                setSearchTerm(event.target.value);
                             }}/></div>
                        </Form.Group>
                    </div>
                    <div className="col-12 my-3 col-md-4 col-lg-4  d-md-block d-lg-block d-xl-block">
                        <Form.Group className="d-flex d-row align-items-center text-center" controlId="">
                            <div className="col-2 pe-3"><img src={location} alt='location'  style={{height:24 , width:17}}/></div>
                            <div className="col-9"><Form.Control className="border-0 main color" type="text" placeholder="Filter by location..." 
                            onChange={(event) => {
                                setSearchLocation(event.target.value);
                             }}/></div>
                        </Form.Group>
                    </div>
                        
                    <div className="col-12 col-md-4 col-lg-3  d-md-block d-lg-block d-xl-block">
                        <Form.Group className="d-flex d-row align-items-center text-center" controlId="">
                            <div className="col-2 pe-3"><img src={location} alt='location'  style={{height:24 , width:17}}/></div>
                            <div className="col-9"><Form.Control className="border-0 main color" type="text" placeholder="Filter by contract..." 
                            onChange={(event) => {
                                setSearchContract(event.target.value);
                            }}/></div>
                        </Form.Group>
                    </div>
                </Form.Group>
            </Form>
            
            <div className="d-flex d-row margin-top">
                <div className="container">
                    <div className="row">   
                        {slice
                        .filter((job) => {
                            if(searchTerm === ""){
                                return job;
                            }
                            else if(job.position.toLowerCase().includes(searchTerm.toLocaleLowerCase()) 
                            || job.company.toLowerCase().includes(searchTerm.toLocaleLowerCase())
                            ){
                               
                                return job; 
                            }
                        
                        })
                        .filter((job) => {
                            if(searchLocation === "") {
                                return job;
                            }
                            else if (job.location.toLowerCase().includes(searchLocation.toLocaleLowerCase())){
                                return job;
                            }
                           
                        })
                        .filter((job) => {
                            if(searchContract === "") {
                                return job;
                            }
                            else if (job.contract.toLowerCase().includes(searchContract.toLocaleLowerCase())){
                                return job;
                            }
                            
                        })
                        .filter((job) => {
                            if(searchLocation === "" && searchTerm === "") {
                                return job;
                            }
                            else if (job.location.toLowerCase().includes(searchLocation.toLocaleLowerCase()) && (job.position.toLowerCase().includes(searchTerm.toLocaleLowerCase()) 
                            || job.company.toLowerCase().includes(searchTerm.toLocaleLowerCase()))){
                                return job;
                            }
                            
                        })
                        .filter((job) => {
                            if(searchLocation === "" && searchTerm === "" && searchContract === "") {
                                return job;
                            }
                            else if (job.location.toLowerCase().includes(searchLocation.toLocaleLowerCase()) && job.contract.toLowerCase().includes(searchContract.toLocaleLowerCase()) && (job.position.toLowerCase().includes(searchTerm.toLocaleLowerCase()) 
                            || job.company.toLowerCase().includes(searchTerm.toLocaleLowerCase()))){
                                return job;
                            }
                            
                        })
                        .map((job, key) => {
                            return(
                        
                                <div className="col-md-6 col-lg-4 mb-5" key={key}>
                                    <Card className="border-0 main" style={{}}>
                                        <Card.Body className="ps-4">
                                            <div className="col-md-2 col-lg-2 d-none d-md-block d-lg-block d-xl-block text-center logon negative-margin-icon" style={{backgroundColor:job.logoBackground, width:60, height:55, padding:10, 'border-radius': 17}}>
                                                <img src={job.logo} alt="logo"/>
                                            </div>
                                            <div className="col-2 d-block d-sm-block d-md-none text-center rounded-4 negative-margin-icon" style={{backgroundColor:job.logoBackground, width:60, height:50, padding:10, 'border-radius': 17}}>
                                                <img src={job.logo} alt="logo"/>
                                            </div>
                                            <div className="d-flex d-row py-2 pt-4" >
                                                <div className="col-3 text-start">
                                                    <Card.Text className="text-secondary text-size">{job.postedAt}.</Card.Text>
                                                </div>
                                                <div className="col-4 text-start">
                                                    <Card.Text className="text-secondary text-size">{job.contract}</Card.Text>
                                                </div>
                                            </div>
                                            <Card.Title className="text-start pt-1">
                                                <Link className="text-decoration-none " to={`/detail/${job.id}`}><h3 className="color position-text-size">{job.position}</h3></Link>
                                            </Card.Title>
                                            <Card.Text className="text-start text-secondary text-size">
                                                {job.company}
                                            </Card.Text>
                                            <Card.Text className="text-start position-color text-size pt-2">
                                                {job.location}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card> 
                                </div>  
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="py-5">
                <button className="btn button-color mt-5" id="load" onClick={()=>LoadMore()}>Load more</button>
            </div>  
        </div>
    )
}


export default Cards;