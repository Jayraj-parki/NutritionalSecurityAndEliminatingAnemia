import React, { useState, useEffect } from 'react'
import style from "../css/AnaemiaTypes.module.scss"
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { NavLink } from 'react-router-dom';
export default function AnaemiaData(props) {
    const [anaemia, setAnaemia] = useState([{}])
    const getAnaemiaData = async () => {
        try {
            // e.preventDefault()
            const result = await fetch(("/getAnaemiaData"), {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(
                    {
                        type: props.type
                    }
                )
            })
            const data = await result.json()
            setAnaemia([data[0]])

        } catch (err) {
            console.log("Error in client getAnaemiaData" + err)

        }
    }
    
     
    useEffect(() => {
        getAnaemiaData()
        console.log(anaemia)

    }, [props.type])

    return (
        <>
            {
                anaemia.map((value) =>
                    <div key={value?._id} id="disease_details" className={style.anaemiaData + " row col-11 col-sm-10 my-3  mx-auto p-sm-4 p-1  "}>

                        <NavLink to="/anaemia-type" onClick={()=>props.handle("")}  className={"col-1"}><button type="button" className="btn-close " ></button></NavLink>
                        <div className={style.main_content + " row col-12 p-0 d-flex"}>
                            <div className="row col-12 col-sm-12 col-lg-6  p-auto mx-auto">
                                <img className="col-12 p-4 my-auto " src={"https://raw.githubusercontent.com/Jayraj-parki/pbl-images/master" + "/images/anaemia.jpg"} alt="..." />
                                <NavLink to="/nutrients"  className={"col-12 col-sm-8 p-0 py-1 text-center mx-auto"}>View All Nutitional Foods</NavLink>
                            </div>
                            <div className={style.defination + "  col-sm-12 col-lg-6 py-4   me-auto px-2"}>
                                <h1 className={"col-12 py-1 text-center"}>{value?.type}</h1>
                                
                                {
                                     value?.defination?.map((val) =>
                                     <p key={val._id} className=" col-sm-11 col-lg-12 col-xxl-10 mt-xxl-4 mx-auto p-2 p-xxl-2 my-1">{val.info}</p>
                                 )
                                }
                            </div>
                        </div>
                        <div className={style.symptoms_container + " col-sm-12 col-lg-6 my-4 p-0 "}>
                            <div className="row px-2 ">
                                <h2 className={style.title + "  col-11 py-1 px-xxl-4 text-center mx-auto"}>Symptoms</h2>
                                <h6 className={style.desc + " col-11 me-auto my-2 px-sm-4  "}>{value?.symptoms?.desc}</h6>
                                <div className={style.symptoms + "  col-12 mx-auto col-sm-11 col-lg-12  px-xxl-4"}>
                                    {
                                        value?.symptoms?.data.map((val) =>
                                            <p className="  p-2 m-1 d-flex  mt-xxl-4 mx-auto p-2 p-xxl-2 m-1">{val.p}</p>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={style.causes_container + "  row col-12 mx-auto col-sm-12 col-lg-6 p-0 my-4"}>
                            <h2 className={style.title + " py-1 col-11 text-center mx-auto"}>Causes</h2>
                            <h6 className={style.desc + " col-12 me-auto my-2 p-0 px-3"}>{value?.causes?.desc}</h6>
                            <IconButton className="p-0 col-1 mx-auto" onClick={() => document.getElementById("causes").scrollBy({ top: 300, behavior: 'smooth' })}><KeyboardArrowDownIcon className={style.icon + "  mx-auto  p-0"} /></IconButton>
                            <IconButton className="p-0 col-1 mx-auto" onClick={() => document.getElementById("causes").scrollBy({ top: -300, behavior: 'smooth' })}><KeyboardArrowUpIcon className={style.icon + "  mx-auto  p-0"} /></IconButton>
                            <div id="causes" className={style.causes + " col-sm-11 col-lg-12 mx-auto py-2 px-xxl-4"}>
                                {
                                    value?.causes?.data.map((val) => {
                                        return (
                                            <>
                                                <h4 className={style.cause_title + " col-12 text-center mb-3 p-2 px-4"}>{val.heading}</h4>
                                                {
                                                    val?.info.map((val) => <p className="p-2">{val.p}</p>)
                                                }
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className={style.tretment_container + "  mx-auto col-sm-12 col-lg-6 p-0 mt-4  "}>
                            <div className="row px-2">
                                <h2 className={style.title + " py-1 col-11 text-center mx-auto"}>Treatment</h2>
                                <h6 className={style.desc + " col-12 me-auto my-2  p-0 px-3"}>{value?.treatment?.desc}</h6>
                                <IconButton className="p-0 col-1 mx-auto" onClick={() => document.getElementById("treatment").scrollBy({ top: 300, behavior: 'smooth' })}><KeyboardArrowDownIcon className={style.icon + "  mx-auto  p-0"} /></IconButton>
                                <IconButton className="p-0 col-1 mx-auto" onClick={() => document.getElementById("treatment").scrollBy({ top: -300, behavior: 'smooth' })}><KeyboardArrowUpIcon className={style.icon + "  mx-auto  p-0"} /></IconButton>
                                <div id="treatment" className={style.treatments + " col-sm-11 col-lg-12 mx-auto py-2"}>
                                    {
                                        value?.treatment?.data.map((val) =>
                                            <>
                                                <h4 className={style.tretment_title + " col-12 mb-3 text-center p-2 px-4"}>{val.heading}</h4>
                                                {
                                                    val?.info.map((val) =>
                                                        <p className={style.tretment + " p-2"}>{val.p}</p>
                                                    )
                                                }
                                            </>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={style.diagnosis_container + " row mx-auto  col-sm-12 col-lg-6 p-0 mt-4 "}>
                            <h2 className={style.title + " py-1 col-11 text-center mx-auto"}>Diagnosis</h2>
                            <h6 className={style.desc + " col-12 me-auto  my-2 p-0 px-3"}>{value?.diagnosis?.desc}</h6>
                            <IconButton className="p-0 col-1 mx-auto" onClick={() => document.getElementById("diagnosis").scrollBy({ top: 300, behavior: 'smooth' })}><KeyboardArrowDownIcon className={style.icon + "  mx-auto  p-0"} /></IconButton>
                            <IconButton className="p-0 col-1 mx-auto" onClick={() => document.getElementById("diagnosis").scrollBy({ top: -300, behavior: 'smooth' })}><KeyboardArrowUpIcon className={style.icon + "  mx-auto  p-0"} /></IconButton>
                            <div id="diagnosis" className={style.diagnosises + " col-sm-11 col-lg-12 mx-auto py-2"}>
                                {
                                    value?.diagnosis?.data.map((val) =>
                                        <>
                                            <h4 className={style.diagnosis_title + " col-12  mb-3 text-center p-2 px-4"}>{val.heading}</h4>
                                            {
                                                val?.info.map((val) =>
                                                    <p className={style.diagnosis + " p-2"}>{val.p}</p>
                                                )
                                            }
                                        </>
                                    )
                                }

                            </div>
                        </div>
                        <div className={style.food_items + " col-12"}>
                            <div className={style.dishes + " row p-0 col-12  d-flex mx-auto "}>
                                <IconButton className={style.icon + " col-auto m-auto "} onClick={() => document.getElementById("photo").scrollBy({ left: -300, behavior: 'smooth' })}><ArrowBackIosIcon /></IconButton>
                                <h1 className="col-8 text-center py-2 mb-3">What to Eat in {value?.type} ?</h1>
                                <IconButton className={style.icon + " col-auto m-auto"} onClick={() => document.getElementById("photo").scrollBy({ left: 300, behavior: 'smooth' })}><ArrowForwardIosIcon /></IconButton>
                                <div id="photo" className={style.photos + " col-auto d-flex mx-auto"}>

                                    {
                                        value?.images?.map((val) =>
                                            <div className={style.dish + " col-6 col-sm-4 col-xl-3 bg-light p-0 mb-2 shadow"}>
                                                <img src={"https://raw.githubusercontent.com/Jayraj-parki/pbl-images/master" + "/images/anaemiaType/data/"+val.path} className=" col-12 m-0" alt="..." />
                                                <h2 className="col-12 text-center ">{val.name}</h2>
                                            </div>
                                        )
                                    }

                                </div>
                            </div>

                        </div>
                    </div>
                )
            }
        </>
    )
}
