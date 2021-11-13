import React, {  useEffect } from 'react'
import style from "./css/Hospitals.module.scss"
import Navbar from "./Navbar"
import Button from '@material-ui/core/Button';
import Footer from "./Footer"
import Card from "./hospital/Card"
export default function Hospitals() {
 
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <>
            <div className={style.appointment_container + " container-fluid p-0"}>
                <div className={style.navbar + " row col-12  mx-0"}>
                    <Navbar />
                </div>
                <div className={style.main + " row col-12  p-0  mx-0"}>
                    <img className={style.doctor + " col-12 col-md-6 "} src={"https://raw.githubusercontent.com/Jayraj-parki/pbl-images/master" + "/images/hospital/main.webp"} alt="" />
                    <div className={style.content + " col-12 col-md-6 py-3  py-xxl-5"}>
                        <h1 className="col-12 mx-auto text-center ">Suffuring from Anaemia Disease ?</h1>
                        <h4 className="col-12 col-sm-12 col-xl-10 col-xxl-12 mb-xxl-4 mx-auto my-auto text-center">We Relieve you from the Pain!</h4>
                        {/* <h3 className="col-12 mx-auto mt-auto">Take Appointment And Be Anaemia Free</h3> */}
                        <Button href="#takeAppointmet"   className={style.appointment + " col-12  col-sm-10 col-xl-6 text-center mt-auto"}>Take Appointment</Button>
                    </div>

                </div>
                <div id="takeAppointmet" className={style.hospitals + " row col-10 my-3  mx-auto p-sm-4 "}>
                    <Card/>
                </div>
                <div id="contact" className={style.footer + " row col-12 mx-auto"} >
                    <Footer />
                </div>
            </div>
        </>
    )
}
