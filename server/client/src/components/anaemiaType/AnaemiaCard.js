import React, { useState, useEffect } from 'react'
import style from "../css/AnaemiaTypes.module.scss"
import { HashLink as Link } from 'react-router-hash-link';
export default function AnaemiaCard(props) {
    const [type, setType] = useState([])
   const [activeBtn,setBtn]=useState("")
    const getAnaemiaType = async () => {
        try {
            // e.preventDefault()
            const result = await fetch(("/getAnaemiaType"), {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                },

            })
            const data = await result.json()
            setType(data)
            
        } catch (err) {
            console.log("Error in client getAnaemiaData")

        }
    }
    
    useEffect(() => {
        getAnaemiaType()
    }, [])
    return (
        <>
            {
                type.map((value, index) =>
                <Link smooth to="#disease_details" onClick={()=>{setBtn(index);props.handle(value.type)}} id={ props.activeCard!==""?activeBtn===index?style.active:" ":undefined} key={value.index} className={style.card + " col-12 col-md-6 col-xxl-4 my-2 mx-auto gx-0 gy-2 p-3 " }>
                        <h2 className="col-auto text-center">{value.type}</h2>
                </Link>    
                )
            }



        </>
    )
}
