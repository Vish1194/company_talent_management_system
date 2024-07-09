import CheckStatusLink from "../components/CheckStatusLink";
import Hero from "../components/Hero";
import JobListing from "../components/JobListing";
import ResumeSubmit from "../components/ResumeSubmit";

const CareerPage = () =>{
    return(
        <>
            <Hero/>
            <JobListing isHomepage={false}/>
            <CheckStatusLink/>
            <ResumeSubmit/>
        </>
    )
}
export default CareerPage;