import React,{useEffect,useState} from 'react'
import style from "./css/Home.module.scss"

import Navbar from "./Navbar"
import Aside from "./home/Aside"
import RecentComment from "./home/RecentComment"
import Main from "./home/Main"
import Card from './home/Card'
import VideoCard from "./home/VideoCard"
import ServiceCard from "./home/ServiceCard"
import Guideline from "./home/Guideline"
import Footer from "./Footer"
export default function Home() {
    const [reload,setReload]=useState(false)
    useEffect(()=>{
        console.log()
    },[reload])
    return (
        <>
            <div className={style.home + " container-fluid p-0 "}>
                <div className={style.navbar + " row "}>
                    <Navbar />
                </div>
                <div className={style.content + " row "}>
                    <Main />
                    <div className="col-xxl-8 col-xl-8 col-11 mx-auto p-0 my-2 ">
                        <div className={style.card + " row col-12 mt-3 mx-auto p-0 "}>
                            <Card pic="food.webp" title={"Nutritional Food"} text={"See All the food Item by thier Nutrition"} link={"nutrients"} />
                            <Card pic="anaemia.jpg" title={"Anaemia type"} text={"See  the Types of Anaemia and thier details"} link="anaemia-type" />
                            <Card pic="hospital.webp" title={"Take Appointment"} text={"Want to take appointment in Our Best Hospital"} link="appointement" />
                        </div>
                        <div id="service" className={style.survice + " row col-12 mt-5  mx-auto p-4 "}>
                            <div className={" mx-auto  col-sm-10 col-10 my-2 py-0 pe-1"}>
                                <h3 id="title" className={style.title + " col-10 col-md-4 mx-auto pb-3"}>Services</h3>
                            </div>
                            <ServiceCard type="WatchLaterIcon" text={"24/7 Service"} />
                            <ServiceCard type="PersonIcon" text={"Doctor's guideline "} />
                            <ServiceCard type="EmojiFoodBeverageIcon" text={"Nutritional Food details"} />
                            <ServiceCard type="GrainIcon" text={"Eliminating Anaemia"} />
                            <ServiceCard type="VideoLibraryIcon" text={"Live Events for Patients"} />
                            <ServiceCard type="LocalHospitalIcon" text={"Hospital contacts"} />
                            <ServiceCard type="PlayCircleFilledIcon" text={"Online tutorial"} />
                            <ServiceCard type="QuestionAnswerIcon" text={"Survey Ques & answer"} />
                        </div>
                        <div id="guideline" className={style.guidline + " row col-12 mt-5  mx-auto p-4 "}>
                            <div className={" mx-auto  col-sm-10 col-10 my-2 py-0 pe-1"}>
                                <h3 id="guidline" className="col-12 col-md-12 mx-auto pb-3">Do You Want Any Guidline ? || Call Our Doctors</h3>
                            </div>
                            <Guideline />
                        </div>

                    </div>
                    <div className={style.aside_container + "  mx-auto col-xxl-3 col-xl-3  col-lg-10 col-sm-11 col-11 my-3 py-0 pe-1"}>
                        <div className={style.aside + " shadow  p-2 m-0 my-2 col-12"}>
                            <Aside />
                        </div>
 
                        <div className={style.aside + " row shadow  p-2 m-0 my-2 col-12 " + style.tutorial}>
                            <h3 id="tutorial" className="col-12 mx-auto pb-3">Learn About Anaemia And Healthy Food</h3>
                            <VideoCard path="1.mp4" title="What is Anaemia ? || Learn everything about it" />
                            <VideoCard path="3.mp4" title="Health Tips  Top 10 Foods to Fight Anemia" />
                            <VideoCard path="2.mp4" title="All About Nutrition Balanced Diet" /> 
                            <VideoCard path="4.mp4" title="Anaemia (Types of Anaemia) classification" />
                                           
                        </div>
                        
                    </div>
                </div>
                <div id="recentMsg" className={style.recentMsg + " row col-12 my-1  mx-auto p-2 px-sm-5 "}>
                    <RecentComment reload={()=>setReload(!reload)}/>
                </div>
                <div id="contact" className={style.footer + " row col-12 mx-auto"} >
                    <Footer reload={reload}/>
                </div>
            </div>
        </>
    )
}
