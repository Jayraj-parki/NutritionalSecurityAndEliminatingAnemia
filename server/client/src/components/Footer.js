import React,{useEffect,useState} from 'react'
import style from "./css/Footer.module.scss"
import Contact from "./Contact"
import LocationOnIcon from '@material-ui/icons/LocationOn';
export default function Footer(props) {
    const [reload,setLoad]=useState(false)
    useEffect(()=>{
        setLoad(!reload)
    },[props.reload])
    

    return (
        <>
            <Contact reload={reload}/> 
            <div className={style.Location + " col-12 my-3 p-0"}>
                <div className="col-12 col-sm-8 col-lg-4 mx-auto ">
                    <LocationOnIcon className={style.icon + " col-4 mx-auto my-3"} />
                    <address className={style.address + " col-10 text-uppercase"}> 1st Floor, Yogi Avenue Yogi Nagar Borivali West, Mumbai,Maharashtra 400092 </address>
                </div>
                    <iframe className="col-12" title="Address" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.108465273126!2d72.84199721744385!3d19.234104100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b124d45a79a5%3A0x6392ee5bece57e93!2sHealthcare%20Medical%20Center%20and%20Diagnostics!5e0!3m2!1sen!2sin!4v1627813020309!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div className={style.footer +" col-12 "}>
                <p className=" text-center my-auto pb-3">&copy; Copyright 2021. All Rights Are Reserved .</p>
            </div>
        </>
    )
}
