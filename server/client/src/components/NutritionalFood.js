import React, { useState, useEffect } from 'react'
import style from "./css/NutritionalFood.module.scss"
import Navbar from "./Navbar"
import Nutrient from "./nutritionFood/Nutrient"
import FoodItems from "./nutritionFood/FoodItems"
import Footer from "./Footer"
import { useHistory } from "react-router-dom"
export default function NutritionalFood() {
    const history = useHistory()
    const [activeCard, setCard] = useState("");
    useEffect(() => {
        window.scrollTo(0, 0)
        if (!activeCard) {
            history.push("/nutrients")
        }
    }, [])


    return (
        <>
            <div className={style.nutrional_food + " container-fluid p-0"}>
                <div className={style.navbar + " row col-12  mx-0"}>
                    <Navbar />
                </div>
                <div className={style.main + " row col-12  py-5  mx-0"}>
                    <div className={style.content + " col-md-6  col-lg-5 col-xl-6"}>
                        <h1 className="  col-lg-10 mx-auto ">Nutritional Food...!!!</h1>
                        <h4 className="col-12 mx-lg-auto ms-lg-5">Eat Better, Live Better !!</h4>
                        <h4 className="col-12 mx-lg-auto ms-lg-5">Good for Natural, Good For you !</h4>
                    </div>
                    <img className={" col-md-6 col-lg-5 col-xl-6 ms-auto"} src={"https://raw.githubusercontent.com/Jayraj-parki/pbl-images/master" + "/images/nutritionalFood/main.png"} alt="" />
                </div>
                <div className={style.nutrients + " row col-10 my-3  mx-auto p-4 "}>
                    <h3 className="col-10 mx-auto pb-3">Necessary Nutrients for human Body</h3>
                    <Nutrient handle={()=>setCard("carbohydrate")} type="carbohydrate" path="carbohydrate.png" />
                    <Nutrient handle={()=>setCard("lipid")} type="lipid" path="fat.png" />
                    <Nutrient handle={()=>setCard("protein")} type="protein" path="protein.png" />
                    <Nutrient handle={()=>setCard("vitamin")} type="vitamin" path="vitamin.png" />
                    <Nutrient handle={()=>setCard("mineral")} type="mineral" path="mineral.png" />
                    <Nutrient handle={()=>setCard("water")} type="water" path="water.png" />
                    <Nutrient handle={()=>setCard("iron")} type="iron" path="iron.png" />
                    <Nutrient handle={()=>setCard("Vitamin-B12")} type="Vitamin-B12" path="b12.png" />
                </div>
                
                 
                    {activeCard==="carbohydrate"?<FoodItems handle={()=>setCard("")} active={"carbohydrate"} />:undefined}
                    {activeCard==="lipid"?<FoodItems handle={()=>setCard("")} active={"lipid"} />:undefined}
                    {activeCard==="protein"?<FoodItems handle={()=>setCard("")} active={"protein"} />:undefined}
                    {activeCard==="vitamin"?<FoodItems handle={()=>setCard("")} active={"vitamin"} />:undefined}
                    {activeCard==="mineral"?<FoodItems handle={()=>setCard("")} active={"mineral"} />:undefined}
                    {activeCard==="water"?<FoodItems handle={()=>setCard("")} active={"water"} />:undefined}
                    {activeCard==="iron"?<FoodItems handle={()=>setCard("")} active={"iron"} />:undefined}
                    {activeCard==="Vitamin-B12"?<FoodItems handle={()=>setCard("")} active={"Vitamin-B12"} />:undefined}
                
                <div id="contact" className={style.footer + " row col-12 mx-auto"} >
                    <Footer />
                </div>
            </div>
        </>
    )
}
