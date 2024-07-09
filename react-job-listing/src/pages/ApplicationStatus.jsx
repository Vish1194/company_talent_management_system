import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ApplicationStatusCard from "../components/ApplicationStatusCard";


const ApplicationStatus = () =>{
    const [applicationDetail,setApplicationDetail] = useState([]);
    const [searchVal,setSearchVal] = useState('');
    const [msg,setMsg] = useState('');

    const getApplicationDetail = async () =>{
        try {
            const response = await axios.post('/api/getApplications',{emailOrMobile:searchVal});
            if(response.status === 200){
                setApplicationDetail(response.data);
                setMsg('You have applied for '+response.data.length+' job/s.')
            }
        } catch (error) {
            console.log(error);
            setApplicationDetail('');
            setMsg('No candidate data found for given email/mobile number.')
        }     
    }

    return(
        <div style={{minHeight:'100vh'}}>
            <div className="mx-sm-auto mx-lg-5 my-3 px-5">
                <div className="input-group">
                    <input type="text" onChange={(e)=>{
                        setSearchVal(e.target.value);
                    }} value={searchVal} className="form-control" placeholder="Search by Email or Mobile" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button onClick={getApplicationDetail} className="btn btn-outline-success" type="button" id="button-addon2">Search</button>
                </div>
            </div>
            { applicationDetail.length>0 ?
            <div className="m-5">
                <h3>Candidate ID : {applicationDetail[0].candidate_id}</h3>
                <h3>Name : {applicationDetail[0].name}</h3>
                <h3>Email : {applicationDetail[0].email}</h3>
                <h3>Mobile : {applicationDetail[0].mobile}</h3>
                <h3 className="text-center text-secondary m-5 mb-2">{msg}</h3>
                <div className="joblisting">
                    {applicationDetail.map((a)=>(
                        <ApplicationStatusCard key={a.application_id} role={a.role} application_id={a.application_id} job_id={a.job_id} experience={a.experience}/>
                    ))}
                </div>
            </div>
            : 
            <div className="text-center m-4">
                <h3 className="text-secondary m-3">{msg}</h3>
                {msg!='' && <Link to="/career" className="link-success link-offset-3 fw-bold fs-3">Vist Career Page</Link>}
            </div>
            }
        </div>
    )
}
export default ApplicationStatus;