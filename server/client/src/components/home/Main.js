import React from 'react'
import style from "../css/home/Main.module.scss"
import SocialMedia from './SocialMedia'
import AcUnitIcon from '@material-ui/icons/AcUnit';
export default function Main() {
    return (
        <>
            <div className={style.main + " col-12 col-lg-12 col-xxl-12  p-3"}>
                <div className={style.content + "  col-12 col-sm-12 col-md-7 col-lg-12 col-xl-8 col-xxl-6 me-auto pb-3 my-xxl-5 ms-sm-4 ms-xxl-4   "}>
                    <h1 className="col-10 col-sm-12 col-md-10  mx-auto  ">Know Your Health...!</h1>
                    <h4 className="col-10 col-sm-12 col-md-1q mx-auto "><AcUnitIcon />Prevent Anaemia Disease</h4>
                    <h4 className="col-10 col-sm-12 col-md-1q mx-auto "><AcUnitIcon />Read About the Disease and take precaution!</h4>       
                </div>     
                <img className={style.food + " col-4 col-lg-12 col-xl-4 col-xxl-4 ms-auto  "} src={"https://raw.githubusercontent.com/Jayraj-parki/pbl-images/master/images/food.png"} alt="" />
                <img className={style.anaemia + " col-2 ms-auto "} src={"https://raw.githubusercontent.com/Jayraj-parki/pbl-images/master" + "/images/anaemia-free.png"} alt="" />
                <img className={style.doctor + " col-6 col-sm-5 col-md-4 col-lg-4 col-xl-3 ms-auto "} src={"https://raw.githubusercontent.com/Jayraj-parki/pbl-images/master"+ "/images/home_doctor.png"} alt="" />
                <div className="row col-12 mt-2 p-0 my-xxl-4">
                    <SocialMedia />
                </div> 
            </div>
        </>
    )
}
