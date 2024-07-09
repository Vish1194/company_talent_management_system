import { useEffect } from "react";
import HrJobListing from "../components/hr/HrJobListing";
import Hero from "../components/Hero";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const HrCareerPage = () =>{
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
            <Hero/>
            <HrJobListing isHomepage={false}/>
        </>
    )
}

export default HrCareerPage; 