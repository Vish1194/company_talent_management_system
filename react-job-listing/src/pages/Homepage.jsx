import About from "../components/About"
import Hero from "../components/Hero"
import JobListing from "../components/JobListing"
import JoinUS from "../components/JoinUs"
import ServicesOffered from "../components/ServicesOffered"


const Homepage = () =>{
    return(
        <>
            <Hero/>
            <About/>
            <JoinUS/>
            <ServicesOffered/>
            <JobListing isHomepage={true}/>
        </>
    )
}
export default Homepage;