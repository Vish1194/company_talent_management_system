

const ResumeSubmit = () =>{
    return(
        <div className="text-center pb-5 bg-body-secondary">
            <hr/>
            <h3>Didn't get right job?</h3>
            <p>Submit your resume/cv. We'll get in touch, when a job matching your skill is found.</p>
            <form action="" method="post" className="px-5 mt-5">
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="name"/>
                <label htmlFor="floatingInput">Name</label>
            </div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@e.com"/>
                <label htmlFor="floatingInput">Email</label>
            </div>
            <div className="form-floating mb-3">
                <input type="number" className="form-control" id="floatingInput" placeholder="name"/>
                <label htmlFor="floatingInput">Mobile Number</label>
            </div>
            <div className="mb-3">
                <label htmlFor="formFile" className="form-label">Upload Resume / CV</label>
                <input className="form-control" type="file" id="formFile"/>
            </div>
            <button type="submit" className="btn btn-lg btn-primary px-5">Submit</button>
            </form>
        </div>
    )
}
export default ResumeSubmit;