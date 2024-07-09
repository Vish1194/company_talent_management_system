import { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from 'axios';
axios.defaults.withCredentials=true;

const AdminLogin = () =>{
    const navigate = useNavigate();

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    
    const Login =async (e) =>{
        e.preventDefault()
        try{
            const response = await axios.post('/api/hr-login',{username,password});
            console.log(response.data);
            if(response.status === 200){
                navigate('/hr')
            }
        }catch(error){
            console.error(error);
        }
    }
    return(
        <div className="text-center py-5 p-lg-5 m-lg-5 rounded-4 bg-body-tertiary" style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <h3>HR Login</h3>
            <form onSubmit={Login} className="mt-5">
            
            <div className="form-floating mb-3">
                <input type="email" name="username" onChange={(e)=>{
                    setUsername(e.target.value);
                }} value={username} className="form-control" id="floatingInput" placeholder="name@e.com" />
                
                <label htmlFor="floatingInput">Email</label>
            </div>
            <div className="form-floating mb-3">
                <input type="password" name="password" onChange={(e)=>{
                    setPassword(e.target.value);
                }} value={password}  className="form-control" id="floatingInput" placeholder="name" />
                
                <label htmlFor="floatingInput">Password</label>
            </div>
            
            <button type="submit" className="btn btn-lg btn-success px-5">Login</button>
            </form>
        </div>
    )
}
export default AdminLogin;