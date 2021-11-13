import React from 'react'
import style from "../css/home/SocialMedia.module.scss"
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
export default function SocialMedia() {
    return (
        <>
            <div className={style.containers +  " row p-0 mx-auto d-flex  justify-content-evenly"}>
               <NavLink to="/" className="col-10 mb-1 mb-md-1 col-md-3   p-0 mb-sm-2  "><Button className="col-12 p-xxl-2   ">Youtube Event</Button></NavLink>
               <NavLink to="/" className="col-10 mb-1 mb-md-1 col-md-3   p-0 mb-sm-2 "><Button className="col-12  p-xxl-2  " >Facebook</Button></NavLink>
               <NavLink to="/" className="col-10 mb-1 mb-md-1 col-md-3   p-0 mb-sm-2 "><Button className="col-12  p-xxl-2  " >Instagram</Button></NavLink>
            </div>
        </>
    ) 
}
 