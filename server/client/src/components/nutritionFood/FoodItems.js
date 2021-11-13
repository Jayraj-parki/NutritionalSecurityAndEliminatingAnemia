import React, { useState, useEffect } from 'react'
import style from "../css/NutritionalFood.module.scss"
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

export default function FoodItems(props) {
    const [nutrients, setNutrients] = useState([{}])
    const getFoodItems = async () => {
        try {
            // e.preventDefault()
            const result = await fetch(("/getNutrients"), {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(
                    {
                        nutrient: props.active
                    }
                ) 
            })
            const data = await result.json()
            setNutrients([...data[0].items])

        } catch (err) {
            console.log("Error in client getFoodItems" + err)

        }
    }
    useEffect(() => {
        // setActice(props.active)
        console.log(props.active)
        getFoodItems() 
        // console.log(active)
    },[])


    return (
        <>
            <div id="food_items" className={style.nutrients2 + " row col-10 my-3  mx-auto p-4  "}>
                <h3 className="col-10 mx-auto pb-3">Food Items rich in {props.active}</h3>
                <NavLink to="/nutrients" className={"col-1"}><button type="button" className="btn-close " onClick={props.handle} ></button></NavLink>
                {
                    nutrients.map((value, index) => {
                        return (
                            < > 
                                <div key={value._id} className={style.card + " shadow   col-12 col-sm-6 col-lg-4 col-xl-3 my-0 mx-auto gx-0 gy-2 "}>
                                    <img src={"https://raw.githubusercontent.com/Jayraj-parki/pbl-images/master" + "/images/nutritionalFood/"+value.path} className="card-img-top col-12" alt="..." />
                                    <div className={"card-body col-12  p-0 " + style.body2}>
                                        <h4 className="card-title text-center col-12 m-0 py-2">{value.title}</h4>
                                    </div>
                                    <div className={style.show}>
                                        <Button className={style.explore + " px-3 text-center  "} data-bs-toggle="modal" data-bs-target={"#" + value.title}>Explore</Button>
                                    </div>
                                </div>
                                <div key={index} className={style.modal + " row p-0 modal fade col-12"} id={value.title} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-xl  col-12  ">
                                        <div className="modal-content col-12 bg-light">
                                            <div className="modal-header col-12">
                                                <h5 className={style.title + " modal-title text-center"} >{value.title}</h5>
                                                <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body col-12 pt-0">
                                                <div className={style.food_details + " row col-12 mx-auto p-0"}>
                                                    <div className={style.name_pic + " col-12 col-lg-6 p-0 mt-2 "}>
                                                        <img src={"https://raw.githubusercontent.com/Jayraj-parki/pbl-images/master" + "/images/nutritionalFood/"+value.path} className="card-img-top col-6 mb-0" alt="..." />
                                                        <h4 className="col-12 text-justify py-2 px-4 m-0"> <span>{props.active+" content: "} </span>{value.content}</h4>
                                                    </div>
                                                    <div className={style.content + " col-12 col-lg-6 mt-4  p-0 mt-lg-2"}>
                                                        <h1 className="col-11 mx-auto text-center py-2 mb-3">Delicious High {props.active} Food</h1>
                                                        {
                                                            value?.data?.map((val, k) =>
                                                                <p key={val._id} className="col-11 text-justify p-2 px-4  mx-auto" >{val.info}</p>
                                                            )
                                                        }
                                                    </div>
                                                    <div className={style.dishes + " row p-0 col-12  d-flex mx-auto "}>
                                                       
                                                        <h1 className="col-12 text-center  py-2 mb-3">Healthy {value.title} Dishes</h1>
                                                        
                                                        <div id="photo" className={style.photos + " col-auto d-flex mx-auto"}>
                                                            {
                                                                value?.images?.map((val, k) =>

                                                                    <div key={val._id} className={style.dish + " col-5 col-lg-3 bg-light p-0 mb-2 shadow"}>
                                                                        <img src={"https://raw.githubusercontent.com/Jayraj-parki/pbl-images/master" + "/images/nutritionalFood/" + val.path} className=" col-12 m-0" alt="..." />
                                                                        <h2 className="col-12 text-center ">{val.name}</h2>
                                                                    </div>
                                                                )
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
