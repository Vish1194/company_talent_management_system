import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import HrJobListing from "../components/hr/HrJobListing";

axios.defaults.withCredentials=true;


const HrHomePage = () =>{ 
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [username, setUsername] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const navigate = useNavigate();
    useEffect(()=>{
        const dashboard = async () =>{
            try {
                const response = await axios.post('/api/hr');
                // console.log(response);
                if(response.status === 200){
                    setId(response.data.id);
                    setName(response.data.name);
                    setMobile(response.data.mobile);
                    setUsername(response.data.username);
                    setIsLoggedIn(true);
                }
            } catch (error) {
                navigate('/hr-login');
            }
        }
        dashboard();
    },[])
    
    return(
        <>
            <div className="m-3 p-3 fst-italic">
                <h1>Hello, {name} ( {username} )</h1>
                <p className="text-opacity-25">ID : {id} &nbsp;&nbsp;&nbsp;&nbsp; Mobile : {mobile}</p>
            </div>
            <HrJobListing isHomepage={true}/>
        </>
    )
}

export default HrHomePage;