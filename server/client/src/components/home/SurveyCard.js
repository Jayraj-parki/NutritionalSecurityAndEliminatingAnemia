import React from 'react'
import style from "../css/home/Survey.module.scss"
import { NavLink } from 'react-router-dom'
import Button from "@material-ui/core/Button"
export default function SurveyCard() {
    return (
        <>
            <div className={style.card + " card col-10 col-sm-5 col-md-4  mx-auto gx-0 gy-2"}>
                <div className="card-body">
                    <h3 className="card-title my-2 p-2">Total No Of Survey</h3>
                    <h1 className="card-text my-3">567665</h1>
                    <NavLink to="/" className=" mt-3 col-12 "><Button className="col-12 py-3">Fill Survey Form</Button></NavLink>
                </div>
            </div>
        </>
    )
}
