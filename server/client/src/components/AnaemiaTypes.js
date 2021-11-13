import React, { useState, useEffect } from 'react'
import style from "./css/AnaemiaTypes.module.scss"
import Navbar from "./Navbar"
import AcUnitIcon from '@material-ui/icons/AcUnit';
import Footer from "./Footer"
import AnaemiaData from "./anaemiaType/AnaemiaData"
import AnaemiaCard from "./anaemiaType/AnaemiaCard"

export default function AnaemiaTypes() {
    const [activeCard, setCard] = useState("");
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <> 
            <div className={style.nutrional_food + " container-fluid p-0"}>
                <div className={style.navbar + " row col-12  mx-0"}>
                    <Navbar />
                </div>
                <div className={style.main + " row col-12  py-5  mx-0"}>

                    <div className={style.content + " col-12 col-md-8 col-lg-8 col-xl-6 pb-3 "}>
                        <h1 className="col-12 col-sm-10 mx-auto ">Aneamia!</h1>
                        <h4 className="col-12 col-sm-11 mx-auto "><AcUnitIcon />Prevent Anaemia Disease</h4>
                        <h4 className="col-12 col-sm-11 mx-auto "><AcUnitIcon />Read About the Disease and take precaution!</h4>
                        <h4 className="col-12 col-sm-11 mx-auto "><AcUnitIcon />We take care of our Patients...!!</h4>
                        <h4 className="col-12 col-sm-11 mx-auto "><AcUnitIcon />Have Anaemia Disease ? Eat Healthy Food as Described in Article below.</h4>
                    </div>
                    <img className={style.doctor + " col-5"} src={"https://raw.githubusercontent.com/Jayraj-parki/pbl-images/master" + "/images/anaemiaType/doctor2.png"} alt="" />
                    <img className={"col-lg-6 col-md-8 col-sm-7 mt-auto  "} src={"https://raw.githubusercontent.com/Jayraj-parki/pbl-images/master"+ "/images/anaemiaType/doctor.png"} alt="" />
                </div>
                <div className={style.nutrients + " row col-11 col-sm-10 my-3  mx-auto p-1 p-sm-4 "}>
                    <h3 className="col-10 mx-auto pb-3">Anaemia Types</h3>
                    <AnaemiaCard handle={(type)=>setCard(type) }  type={activeCard}  />
                </div>
               {activeCard? <AnaemiaData  handle={(type)=>setCard(type)} type={activeCard}/>:null}
                <div id="contact" className={style.footer + " row col-12 mx-auto"} >
                    <Footer />
                </div>
            </div>
        </>
    )
}
