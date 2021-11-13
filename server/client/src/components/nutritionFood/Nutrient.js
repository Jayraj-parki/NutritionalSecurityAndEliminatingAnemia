import React from 'react'
import style from "../css/NutritionalFood.module.scss"
import { HashLink as Link } from 'react-router-hash-link';
export default function Nutrient(props) {
    return (
        <>
            <div className={style.card + " shadow   col-12 col-sm-6 col-md-4 col-lg-3 my-0 mx-auto gx-0 gy-2 "}>
                <img src={"https://raw.githubusercontent.com/Jayraj-parki/pbl-images/master" + "/images/nutritionalFood/"+props.path} className="card-img-top col-12" alt="..." />
                <div className={"card-body col-12  p-0  " + style.body}>
                    <h4 className="card-title text-center col-12 m-0 py-2">{props.type}</h4>
                    <Link onClick={props.handle} smooth to="#food_items" className={style.explore + " col-12 m-0 mt-2 text-center"}>Explore</Link>
                </div>
            </div>
        </>
    )
}
 