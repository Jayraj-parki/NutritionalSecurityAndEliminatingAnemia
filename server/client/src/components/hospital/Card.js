import React, { useState, useEffect } from 'react'
import style from "../css/Hospitals.module.scss"
import Button from '@material-ui/core/Button';
export default function Card() {
    const [hospitals, setHospitals] = useState([{}])
    const getHospital = async () => {
        try {
            // e.preventDefault()
            const result = await fetch(("/getHospital"), {
                method: "get",
                headers: {
                    "Content-type": "application/json"
                },
            })
            const data = await result.json()
            // console.log(data)
            setHospitals([...data])

        } catch (err) {
            console.log("Error in client getHospital")
        }
    }
    useEffect(()=>{
        getHospital()
    },[])
    return (
        <>
            {
                hospitals.map((value) =>
                    <div key={value._id} className={style.card + " card col-12 col-sm-6 col-xl-6 p-0 shadow"} >
                        <div className="row g-2 p-2 pb-2 ">
                            <div className="col-md-4  ">
                                <img src={"https://raw.githubusercontent.com/Jayraj-parki/pbl-images/master" + "/images/hospital/" + value.path} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8  my-auto ">
                                <div className={"card-body col-12 mt-auto p-0 " + style.body}>
                                    <h3 className="card-title my-1">{value.name}</h3>
                                    <p className="card-text mt-auto  p-2">{value.address}</p>
                                </div>
                            </div>
                        </div>
                        <Button onClick={() => window.open(value.link, "_blank")} className={style.appointment + "  col-xl-6 text-center ps-3 "}>Take Appointment</Button>
                    </div>
                )
            }
        </>
    )
}
