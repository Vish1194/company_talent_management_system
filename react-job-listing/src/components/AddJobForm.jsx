import { useState } from "react";
import axios from 'axios'


const AddJobForm = () =>{
    const [formData, setFormData] = useState({
        role:'',
        experience:'0-0 Years',
        location:'Bengaluru, Karnataka',
        salary:'Rs. 7,00,000 - 11,00,000',
        description:''
    });

    const [msg,setMsg] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const SubmitForm = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('/api/addJob', formData);
          setMsg(response.data);
          if(response.status === 200){
            setFormData({role:'',experience:'0-0 Years',location:'Bengaluru, Karnataka',salary:'Rs. 7,00,000 - 11,00,000',description:''})
          }
        } catch (error) {
          console.error(error);
        }
      };

    return(
        <div className="text-center mx-lg-3 p-lg-5 my-5">
            <h1>Add Job</h1>
            {(msg==='Job added successfully') ? <h4 className="m-2 text-success">{msg}</h4> : <h4 className="m-2 text-warning">{msg}</h4>}
            <form onSubmit={SubmitForm} className="px-5 mt-5">
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
            
            <button type="submit" className="btn btn-lg btn-primary px-5">Submit</button>
            </form>
        </div>
    )
}
export default AddJobForm;