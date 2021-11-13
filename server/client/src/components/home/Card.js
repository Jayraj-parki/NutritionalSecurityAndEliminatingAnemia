import React from 'react'
import style from "../css/home/Card.module.scss"
import { NavLink } from 'react-router-dom'
import { Button } from '@material-ui/core'
export default function Card(props) {
    return ( 
        <>
            <div className={style.card+ " card col-10 col-sm-4  mx-auto gx-0 gy-2 shadow"}>
                <img src={"https://raw.githubusercontent.com/Jayraj-parki/pbl-images/master"+"/images/"+props.pic} className="card-img-top col-12" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                </div>
                <NavLink to={"/"+props.link} className=" col-12"><Button className="col-12 ">Explore</Button></NavLink>
            </div>
        </>
    )
}
