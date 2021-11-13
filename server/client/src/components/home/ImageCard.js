import React from 'react'
import style from "../css/home/ImageCard.module.scss"
export default function ImageCard(props) {
    return (
        <>
            <div className={style.imageCard+ " card card col-10 col-sm-5 col-md-4  mx-auto gx-0 gy-2"} >
                <img src={process.env.PUBLIC_URL + "/images/"+props.pic} className="card-img-top col-12" alt="..." />
            </div>
        </>
    )
}
