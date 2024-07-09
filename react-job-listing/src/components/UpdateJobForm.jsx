import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const UpdadateJobForm = () =>{
    const location = useLocation();
    const [formData, setFormData] = useState({
        id:'',
        role:'',
        experience:'',
        location:'',
        salary:'',
        description:''
    });
    // console.log(location.state);
    const jobid = location.state ? location.state : '';
    useEffect( ()=>{
        const getjobdetail = async () =>{
            const response = await axios.post('/api/getjobdetail',{jobid:jobid});
            const data = response.data;
            setFormData({id:data.id,role:data.role,experience:data.experience,location:data.location,salary:data.salary,description:data.description});
        }
        getjobdetail();
    },[]);
    
    

    const [msg,setMsg] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const updateJob = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('/api/updateJob', formData);
          setMsg(response.data);
            setMsg(response.data);
        } catch (error) {
          console.error(error);
        }
      };

    return(
        <div className="text-center mx-lg-3 p-lg-5 my-5">
            <h1>Update Job</h1>
            {(msg==='Job Updated Successfully') ? <h4 className="m-2 text-success">{msg}</h4> : <h4 className="m-2 text-warning">{msg}</h4>}
            <form onSubmit={updateJob} className="px-5 mt-5">
            <div className="form-floating mb-3">
                <input type="text" name="jobid" value={jobid} disabled className="form-control" id="floatingInput" placeholder="name" required/>
                <label htmlFor="floatingInput">Job ID</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" name="role" value={formData.role} onChange={handleChange} className="form-control" id="floatingInput" placeholder="name" required/>
                <label htmlFor="floatingInput">Role</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" name="experience" value={formData.experience} onChange={handleChange} className="form-control" id="floatingInput" placeholder="name" required/>
                <label htmlFor="floatingInput">Experience</label>
            </div>
            {/* <select className="form-select mb-3" aria-label="Default select example">
                <option selected>Location</option>
                <option value="1">Bengaluru, Karnataka</option>
            </select> */}
            <div className="form-floating mb-3">
                <input type="text" name="location" value={formData.location} onChange={handleChange} className="form-control" id="floatingInput" placeholder="name" required/>
                <label htmlFor="floatingInput">Location</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" name="salary" value={formData.salary} onChange={handleChange} className="form-control" id="floatingInput" placeholder="name" required/>
                <label htmlFor="floatingInput">Salary</label>
            </div>
            <div className="form-floating mb-3">
                <textarea className="form-control" name="description" value={formData.description} onChange={handleChange} placeholder="Leave a comment here" id="floatingTextarea2" style={{height:'100px'}} required></textarea>
                <label htmlFor="floatingTextarea2">Description</label>
            </div>
            
            <button type="submit" className="btn btn-lg btn-info px-5">Update</button>
            </form>
        </div>
    )
}
export default UpdadateJobForm;