

const services = ['Technology Solution','Data Analytics','Innovation Labs','Digital Transformation','Training and Development']
const ServicesOffered = () =>{
    return(
        <>
            <div className="blue py-5">
                <h1 className="text-light text-center">Services</h1>
                <p className="text-light text-center mx-5 p-3">At Galaxy Innovative Solutions, we offer a wide range of cutting-edge services designed to meet the unique needs of our clients and drive positive change across industries. 
                Our team of talented professionals is dedicated to delivering innovative solutions that not only transform businesses but also improve lives. With a firm commitment to excellence and a passion for pushing the boundaries of what's possible, we strive to be your trusted partner in success.</p>
                <div className="joblisting">
                    {services.map((s,index)=>(
                        <div className="card m-2" key={index} style={{minWidth:'300px',maxWidth:'400px'}}>
                            <div className="card-body d-flex flex-column">
                                <h3 className="card-title text-center mb-3">{s}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </>
    )
}
export default ServicesOffered;