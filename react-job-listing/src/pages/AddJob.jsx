import { useNavigate } from "react-router-dom";
import AddJobForm from "../components/AddJobForm";
import { useEffect } from "react";
import axios from "axios";

const AddJob = () =>{
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
            <AddJobForm/>
        </>
    )
}
export default AddJob;