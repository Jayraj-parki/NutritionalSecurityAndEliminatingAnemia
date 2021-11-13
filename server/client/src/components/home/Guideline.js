import React, { useState, useEffect } from 'react'
import style from "../css/home/Guideline.module.scss"
export default function Guideline() {
    const [doctors, setDoctors] = useState([{}])
    const getDoctor = async () => {
        try {
            // e.preventDefault()
            const result = await fetch(("/getDoctor"), {
                method: "get",
                headers: {
                    "Content-type": "application/json"
                },
            })
            const data = await result.json()

            setDoctors([...data])
   
        } catch (err) {
            console.log("Error in doctor"+err)
        }
    }
    useEffect(() => {  
        getDoctor()
    }, [])
    return (
        <>
            {
                doctors.map((value,index) =>
                    <div key={index} className={style.doctor + " card col-10 col-sm-4 col-md-3 shadow  mx-auto gx-0 gy-2"}>
                        <img src={"https://raw.githubusercontent.com/Jayraj-parki/pbl-images/master" + "/images/doctors/" + value.path} className="card-img-top col-12" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{value.name}</h5>
                            <p className="card-text">{value.phone}</p>
                        </div>
                    </div>
                )
            }
        </>
    )
}
