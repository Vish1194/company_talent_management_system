import { Link } from 'react-router-dom';
import JobCard from "./JobCard";
import { useEffect, useState } from 'react';
import axios from 'axios';

const JobListing = ({isHomepage}) =>{
    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        async function getJobList(){
            //Start the backend server before running this
            // const response = await fetch('http://localhost:5099/jobs'); //if get method is used
            // const data = await response.json();         
            //            (OR)

            const response = await axios.post('/api/jobs');
            setJobs(response.data);
        }

        getJobList();
    },[])

    const displayJobs = isHomepage ? jobs.slice(-4) : jobs; // Stores only 3 job elements from the Jobs JSON array.

    return(
        <div className={isHomepage?'joblisting-bg':''}>
        { isHomepage ? <h1 className="text-center text-light text-bg-dark m-0 p-3">Recent Jobs</h1> : <h1 className="text-center text-light text-bg-primary m-0 p-3">Career Corner</h1> }
        <div className="joblisting">
            {displayJobs.map((j) => (
                <JobCard key={j.id} id={j.id} role={j.role} description={j.description} salary={j.salary} location={j.location} experience={j.experience} />
            ))}
        </div>

        <div className="d-flex justify-content-center bg-secondary bg-opacity-50">
        { 
        isHomepage ? <Link to="/career" className='link-primary m-2 fs-3 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover fw-bolder'>Career Page {'>>'}</Link> : ''
        }
        </div>
        </div>
    )
}
export default JobListing;