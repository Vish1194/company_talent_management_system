// console.log("Om Vishnave Namaha\n Om Namaha Shivaya");
import express from "express";
import session from "express-session";
import mysql2 from "mysql2/promise"
import cors from "cors";
import dotenv from "dotenv/config.js"

const app = express();

app.use(session(
    {
        secret:"SomeSecretCode",
        cookie:{maxAge:1000*60*60},
        resave:false,
        saveUninitialized:false
    }
))

app.use(express.json());

app.use(cors(
    {
        credentials:true,
        origin: 'http://localhost:3000'
    }
));


const con = mysql2.createConnection(
    {host:'localhost',user:process.env.DB_USERNAME,password:process.env.DB_PASSWORD,database:process.env.DB_NAME}
)

app.listen(5099,()=>{console.log('Express running at http:localhost:5099')});


app.post('/jobs',async (req,res)=>{
    try {
        const [row] = await (await con).query('select * from career');
        if(row.length>0){
            res.json(row);
        }
    } catch (error) {
      console.error(error);   
      res.status(500).send('Internal Server Error');
    }
})

app.post('/getjobdetail',async (req,res)=>{
    const {jobid} = req.body;

    try {
        const [row] = await (await con).query('select * from career where id = ?',jobid);
        if(row.length>0){
            res.json(row[0]);
        }
    } catch (error) {
        console.error(error);   
        res.status(500).send('Internal Server Error')
    }

})

app.post('/hr-login',async (req,res)=>{
    const {username,password} = req.body;
    try{
        const [row] = await (await con).query('select id,name,mobile,username from hr where username=? and password=?',[username,password]);
        if(row.length>0){
            req.session.hrdetail = row[0];
            res.status(200).send('Login Successful.')
        }else{
            res.status(401).send('Invalid Username/Password');
        }
    }catch(error){
        console.error(error);
        res.status(500).send('Internal server error.')
    }
})

app.post('/hr',async (req,res)=>{
    if(req.session.hrdetail){
        res.status(200).send(req.session.hrdetail);
    }else{
        res.status(401).send('Unauthorized access');
    }
})

app.post('/hr-logout',(req,res)=>{
    if(req.session.hrdetail){
        req.session.destroy((err)=>{
            if(err){
                res.status(500).send('Internal server error');
            }
        })
        res.status(200).send('Logout Successful.')
    }else{
        console.log('No session to logout.');
        res.status(500).send('Internal server error');
    }
})

app.post('/addJob',async (req,res)=>{
    const {role,experience,location,salary,description} = req.body;
    // console.log(role,experience,location,salary,description);
    try {
        const [row] = await (await con).query('Insert into career(role,experience,location,salary,description) values (?,?,?,?,?)',[role,experience,location,salary,description]);
        if(row.affectedRows>0){
            res.status(200).send('Job added successfully');
        }
    } catch (error) {
        res.send('Couldn\'t Add Job');
        console.log(error);
    }
})

app.post('/updateJob',async (req,res)=>{
    const {id,role,experience,location,salary,description} = req.body;
    try {
        const [row] = await (await con).query('Update career set role=?,experience=?,location=?,salary=?,description=? where id=?',[role,experience,location,salary,description,id]);
        if(row.affectedRows>0){
            res.send('Job Updated Successfully');
        }
    } catch (error) {
        res.send('Couldn\'t Update Job');
    }
})

app.post('/removeJob',async (req,res)=>{
    const {id} = req.body;
    try {
        const [row] = await (await con).query('Delete from career where id = ?',[id]);
        if(row.affectedRows>0){
            res.send('Job Removed Successfully');
        }
    } catch (error) {
        res.send('Couldn\'t remove job');
    }
})


app.post('/applyJob',async (req,res)=>{
    const {jobid, name, email,mobile,resume} = req.body;
    console.log(jobid,' ', name,' ', email,' ',mobile,' ',resume);
    let statusFlag = 200;
    const getCandidateSetJobapplication = async () =>{
        try {
            const [row] = await (await con).query('select * from candidate where email=? or mobile=?',[email,mobile]);
                if(row.length>0){
                // console.log(row[0].candidate_id);
                const [row4] = await (await con).query('select * from jobapplications where candidate_id=? and job_id=?',[row[0].candidate_id,jobid]);
                if(row4.length>0){
                    let str = 'You have already applied to this job\n Your Application id is '+row4[0].application_id;
                    return str;
                }
                const [row2] = await (await con).query('Insert into jobapplications(candidate_id,job_id,resume) values (?,?,?)',[row[0].candidate_id,jobid,resume]);
                if(row2.affectedRows>0){
                    console.log('Job application submitted.');
                    return 'Job application submitted.';
                }
                }else{
                    const [row3] = await (await con).query('Insert into candidate(name,email,mobile) values(?,?,?)',[name,email,mobile]);
                    if(row3.affectedRows>0){
                        return getCandidateSetJobapplication();
                    }else{
                        console.log('Couldn\'t submit application.');
                        statusFlag = 500;
                       return 'Couldn\'t submit application.';
                    }
                
                 }
        } catch (error) {        
            console.log(error)
            console.log('Couldn\'t submit application.');
            statusFlag = 500;
            return 'Couldn\'t submit application.';
        }
    }
   const sendInfo = async () =>{
    const resp_msg = await getCandidateSetJobapplication();
    // console.log(resp_msg);
    res.status(statusFlag).send(resp_msg);
   }
   sendInfo();
})



app.post('/getCandidatesByJob',async (req,res)=>{
    const {jobid} = req.body; 
    try {
        const [rows] = await (await con).query("select j.application_id, j.candidate_id , name, email, mobile, resume from candidate c, jobapplications j where c.candidate_id = j.candidate_id and j.job_id = ?",[jobid]);
        // console.log(rows);
        // console.log(rows.length);
        if(rows.length>0){
            res.status(200).send(rows);
        }else{
            res.status(404).send('No applicants have submitted their candidacy for the job thus far.');
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error.')
    }
})


app.post('/getApplications',async (req,res)=>{
    const {emailOrMobile} = req.body;
    try {
        const [row] = await (await con).query(
'select name,email,mobile,j.candidate_id,application_id,j.job_id,role,experience from candidate c, jobapplications j, career ca where ca.id = j.job_id and c.candidate_id = j.candidate_id and (email=? or mobile=?)',
[emailOrMobile,emailOrMobile]
        );
        if(row.length>0){
            res.status(200).send(row);
        }else{
            res.status(404).send('No candidate data found for given email/mobile number.')
        }
    } catch (error) {
        console.log(error);
    }
})