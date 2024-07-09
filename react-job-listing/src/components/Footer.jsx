import Logo from '../assets/images/logo.png';
import Facebook from '../assets/images/facebook.png'
import Instagram from '../assets/images/instagram.png'
import Twitter from '../assets/images/twitter.png'
import Youtube from '../assets/images/youtube.png'

const Footer = () =>{
    const logoStyle = {width:'75px', height:'75px', borderRadius:'50px'};
    const iconStyle = {width:'50px',height:'50px', margin:'20px'};
    return(
        <div className="bg-dark text-light text-center p-1">
            <div className="d-flex justify-content-center pt-5">
                <img src={Logo} alt="Logo" style={logoStyle}/>
                <h3 className='align-content-center'>Galaxy Innovative Solutions</h3>
            </div>
            <p><i>111, GIS Road, Somestate, India</i></p>

            <div className="d-flex justify-content-center">
                <a href="tel:" className='m-2 text-light btn'>+91 1234567890</a>
                <a href="mailto:" className='m-2 text-light btn'>somemail@yahoo.com</a>
            </div>
            <h4>Follow us on</h4>
            <div className="d-flex justify-content-center">
                <img src={Facebook} alt="facebook" style={iconStyle}/>
                <img src={Instagram} alt="facebook" style={iconStyle}/>
                <img src={Twitter} alt="facebook" style={iconStyle}/>
                <img src={Youtube} alt="facebook" style={iconStyle}/>
            </div>
            <p className='opacity-75' style={{marginTop:'100px'}}>&copy; 2024 Copyright reserved.</p>
        </div>
    )
}
export default Footer;