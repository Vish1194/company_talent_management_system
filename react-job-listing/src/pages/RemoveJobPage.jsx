import { useEffect , useState } from "react";
import axios from 'axios';
import {useLocation , useNavigate} from 'react-router-dom';
import Popup from 'reactjs-popup';

const RemoveJobPage = () =>{
    const location = useLocation();
    const job_id = location.state;
    const [jobdetail, setJobdetail] = useState({});

    const navigate = useNavigate();

    useEffect(()=>{
        const checkLogin = async () =>{
            try {
                await axios.post('/api/hr');
            } catch (error) {
                navigate('/hr-login');
            } 
        }  
        checkLogin();  
        const getJobDetail = async () =>{
            const response = await axios.post('/api/getjobdetail',{jobid:job_id})
            setJobdetail(response.data);
        }
        getJobDetail();
    },[])

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isMsgPopOpen,setIsMsgPopOpen] = useState(false);
    const [msg,setMsg] = useState('');
    const handleClose = () => {
        setIsPopupOpen(false);
      };
    
      const handleRemoveJob = async () => {
        const response = await axios.post('/api/removeJob',{id:job_id});
        setMsg(response.data);
        setIsMsgPopOpen(true);
        setIsPopupOpen(false); // Close the popup after successful removal
      };

      const navigateToCareerPage = () =>{
        navigate('/hr/career');
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

            {/*Popup */}
            <div>
            <button onClick={() => setIsPopupOpen(true)} className="btn btn-danger text-light my-5">
                Remove this job
            </button>
            <Popup open={isPopupOpen} closeOnDocumentClick onClose={handleClose} position="right center">
                <div className="bg-light p-5 text-center rounded-1">
                <h1>Do you want to remove/delete this job? (With Job ID: {jobdetail.id})</h1>
                <p className="text-opacity-25">* Before deleting, verify job description</p>
                <div className="my-5 text-center">
                    <button className="btn btn-info text-light mx-1" role="button" onClick={handleClose}>
                    No, Don't Remove
                    </button>
                    <button className="btn btn-danger text-light mx-1" role="button" onClick={handleRemoveJob}>
                    Yes, Remove
                    </button>
                </div>
                </div>
            </Popup>
            </div>

            <Popup open={isMsgPopOpen} closeOnDocumentClick  position="right center">
                <div className="bg-light p-5 text-center rounded-1">
                <h1>{msg}</h1>
                <button className="btn btn-primary text-light mx-1 my-4" role="button" onClick={navigateToCareerPage}>Go Back to Career Page</button>

                </div>
            </Popup>

             </div>
        </>
    )
}

export default RemoveJobPage;