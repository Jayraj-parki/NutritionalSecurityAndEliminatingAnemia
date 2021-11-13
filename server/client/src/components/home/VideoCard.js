import React from 'react'
import style from "../css/home/VideoCard.module.scss"
export default function VideoCard(props) {
    return (
        <>
            <div className={style.videoCard + " card col-md-3 col-sm-6 col-xl-12  mx-auto gx-0 gy-2"} >
                <video className=" col-12" controls >
                    <source src={"https://raw.githubusercontent.com/Jayraj-parki/pbl-images/master" + "/videos/"+props.path}type="video/mp4" />
                </video>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                </div>
            </div>
        </>
    )         
}
