import { useEffect, useState } from "react";
import CandidateInfoRow from "./CandidateInfoRow";
import axios from "axios";


const CandidatesBasedOnJob = () =>{

    const [jobs,setJobs] = useState([]);
    useEffect(()=>{
        const allJobs = async () =>{
            const response = await axios.post('/api/jobs');
            // console.log(response.data);
            setJobs(response.data);
        }
        allJobs();
    },[]);

    const [jobId,setJobId] = useState('');
    const [appliedJob,setAppliedJob] = useState([]);
    const [msg,setMsg] = useState('');
    const [jobdesc,setJobdesc] = useState('');
    
    const getCandidates = async (e) =>{
        e.preventDefault();
        if(jobId!=''){
            try {
                const response = await axios.post('/api/getCandidatesByJob',{jobid:jobId});
                if(response.status === 200){
                    setAppliedJob(response.data);
                    setMsg(response.data.length+' Candidate/s applied for this job');
                    jobs.map((j)=>(
                        j.id == jobId ? setJobdesc(j.role+' , '+j.experience+' , '+j.location) : 'No'
                    ))
                }
            } catch (error) {
                console.log(error);
                setAppliedJob([]);
                setMsg('No candidate record found for this job')
            }
        }else{
            alert('Please select a job to search.')
        }
    }

    return(
        <div style={{minHeight:'100vh'}}>
            <hr className="mt-0"/>
            <div className="row m-1 my-4">
                <span className="col col-1"></span>
                <div className="col col-4 p-0">
                <h6 className="mt-2">Search Candidates by Job/Job Id :</h6>
                </div>
                <div className="col col-7 p-0">
                    <form className="form d-flex">
                    <select className="form-select" onChange={(e)=>{
                                setJobId(e.target.value);
                            }} value={jobId} aria-label="Default select example">
                            <option value={''}>Select the Job </option>                       
                        {jobs.map((j)=>(
                            <option key={j.id} value={j.id} >{j.id} - {j.role} - ({j.experience})</option>
                        ))} 
                            <option value={0}>General Application</option>                       
                    </select>
                    <button onClick={getCandidates} className="btn btn-primary mx-3">Search</button>
                    </form>
                </div>
            </div>
            <hr />

            {appliedJob.length<=0 ? 
            <h1 className="text-center text-warning my-5">{msg}</h1> :
            <div className="my-5">
                <div className="mx-3">
                    <h3>Job ID : {jobId}</h3>
                    <h4>{jobdesc}</h4>
                </div>
            <table className="table table-striped my-5 text-center">
                <thead>
                    <tr>
                    <th scope="col">Application Id</th>
                    <th scope="col">Candidate ID</th>
                    <th scope="col">Candidate Name</th>
                    <th scope="col">E-Mail</th>
                    <th scope="col">Mobile No.</th>
                    <th scope="col">Resume/CV</th>
                    </tr>
                </thead>
                {appliedJob.map((a)=>(
                    <CandidateInfoRow key={a.application_id} application_id={a.application_id} candidate_id={a.candidate_id} name={a.name} email={a.email} mobile={a.mobile} resume={a.resume}/>
                ))}
                </table>
                <p className="text-center opacity-50">{msg}</p>
          </div> 
            }   

        </div>
    )
}
export default CandidatesBasedOnJob;