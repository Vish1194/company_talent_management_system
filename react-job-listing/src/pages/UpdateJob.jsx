import axios from "axios";
import UpdadateJobForm from "../components/UpdateJobForm";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";



const UpdateJob = () =>{
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
    },[]);
    return(
        <>
            <UpdadateJobForm/>
        </>
    )
}
export default UpdateJob;