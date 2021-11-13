import React from 'react'
import style from "../css/Login.module.scss"
import { useState } from "react"
import Button from '@material-ui/core/Button';
export default function Register(props) {

    const [user, setUser] = useState({
        fname: "",
        lname: "",
        email: "",
        password: ""
    })
    const reset =async (e) => {
        setUser({
            fname: "",
            lname: "",
            email: "",
            password: ""
        })
        
    }
    const fieldValue = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({ ...user, [name]: value })
    }
    const RegisterNow = async (e) => {
        try {
            e.preventDefault()
            const { fname, lname, email, password } = user
            const result = await fetch(("/register"), {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    fname, lname, email, password
                })
            })
            // 
            const data = await result.json()
            if (result.status !== 201 || !data) {
                window.alert(data.err);
            }
            else {
                alert("Registeration Successful")
                props.handle("Login")
            }

        } catch (err) {
            console.log("Error in client Registeration")
        }
    }
    return (
        <>
            
            <div className={style.container + " col-12 py-3 "}>
                <form method="POST" className={style.Login + " col-12 col-sm-12 col-md-10 col-lg-6 col-xxl-4 m-3 p-4 px-2 px-sm-5 mx-auto"}>
                    <h1 className="col-8 pb-2 my-2 mb-3">Register</h1>
                    <input type="text" name='fname' className={style.input+" col-12 p-2 my-2"} placeholder="Enter Firstname" value={user.fname} onChange={(e) => { fieldValue(e) }} autoComplete='off' />
                    <input type="text" name='lname' className={style.input+" col-12 p-2 my-2"} placeholder="Enter Lastname" value={user.lname} onChange={(e) => { fieldValue(e) }} autoComplete='off' />
                    <input type="email" name='email' id={style.email} className={style.input+" col-12 p-2 my-2"} placeholder="Enter Email ID" value={user.email} onChange={(e) => { fieldValue(e) }} autoComplete='off' />
                    <input type="password" name='password' id={style.password} className={style.input+" col-12 p-2 my-2"} placeholder="Enter Password" value={user.password} onChange={(e) => { fieldValue(e) }} />
                    <Button type="Submit" className={style.btn+" col-12 my-2 p-2 shadow-sm"} onClick={RegisterNow}>Register</Button>
                    <Button type="reset" className={style.btn + " " +style.reset + " col-12 bg-light my-2 p-2 shadow-sm"} onClick={reset}>Reset</Button>
                    <p className={style.txt}>Already have an <Button onClick={()=>props.handle("Login")} className={style.action +" m-0 p-0 px-1"}>Account?</Button></p>
                </form>
            </div>
        </>
    )
}

