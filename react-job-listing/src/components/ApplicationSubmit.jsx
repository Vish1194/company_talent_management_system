import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ApplicationSubmit = () =>{
    const [jobdetail, setJobdetail] = useState({});

    const location =  useLocation();
    let data = location.state ? location.state : 'No Job ID found';

    useEffect(()=>{
        const getjobdetail =async () =>{
            const response = await axios.post('/api/getjobdetail',{jobid:data});
            setJobdetail(response.data);
            // console.log(jobdetail);
        }
        getjobdetail();
    },[])

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [mobile,setMobile] = useState('');
    const [resume,setResume] = useState('');

    const navigate = useNavigate();
    const submitApplication = async (e) =>{
        e.preventDefault();
        try {
            const response = await axios.post('/api/applyJob',{jobid:jobdetail.id,name:name,email:email,mobile:mobile,resume:resume});
                console.log(response.data);
                setName('');setEmail('');setMobile('');setResume(null);
                alert(response.data);
                navigate('/career');
        } catch (error) {
            console.log(error);
        }
    }
    return(
       <>
         <div className="bg-dark bg-opacity-50 py-4 px-3">
            <h1>{jobdetail.role}</h1>
            <p>Job ID : {jobdetail.id}</p>
            <p>Experience : {jobdetail.experience}</p>
            <p>Location : {jobdetail.location}</p>
            <p>Salary : {jobdetail.salary}</p>
            <h4>Job Description</h4>
            <p className="mb-0">{jobdetail.description}</p>

         </div>
         <div className="text-center py-5 px-lg-5 mx-lg-5 bg-bg-body-tertiary">
            <h3>Apply for {jobdetail.role}</h3>
            <p>Submit your resume/cv. We'll get in touch, when a job matching your skill is found.</p>
            <form onSubmit={submitApplication} className="px-5 mt-5">
            <div className="form-floating mb-3">
                <input type="text" value={data} className="form-control" id="floatingInput" placeholder="name" disabled/>
                <label htmlFor="floatingInput">Job ID</label>
            </div>

            <div className="form-floating mb-3">
                <input type="text" onChange={(e)=>{
                    setName(e.target.value)
                }} value={name} className="form-control" id="floatingInput" placeholder="name" required/>
                <label htmlFor="floatingInput">Name</label>
            </div>
            <div className="form-floating mb-3">
                <input type="email" onChange={(e)=>{
                    setEmail(e.target.value)
                }} value={email} className="form-control" id="floatingInput" placeholder="name@e.com" required/>
                <label htmlFor="floatingInput">Email</label>
            </div>
            <div className="form-floating mb-3">
                <input type="number" onChange={(e)=>{
                    setMobile(e.target.value);
                }} value={mobile} className="form-control" id="floatingInput" placeholder="name" required/>
                <label htmlFor="floatingInput">Mobile Number</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" onChange={(e)=>{
                    setResume(e.target.value)
                }} value={resume} className="form-control" id="floatingInput" placeholder="ResumeLink" required/>
                <label htmlFor="floatingInput">Provide link to your Resume / CV</label>
            </div>
            <p className="text-start text-danger">Note : Set resume/cv link for public access.</p>
            <button type="submit" className="btn btn-lg btn-primary px-5">Submit</button>
            </form>
        </div> 
      
       </>
    )
}

export default ApplicationSubmit;