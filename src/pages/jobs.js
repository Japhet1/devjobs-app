import React from "react";
import Cards from "../Component/JobsCard";
import 'bootstrap/dist/css/bootstrap.min.css';


const Jobs = ({data}) => {
    return (
        <div>
           <div className='negative-margin'><Cards data={data}/></div>
            <div></div>
        </div>   
    )     
}

export default Jobs;