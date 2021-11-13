import React from 'react'
import style from "../css/Login.module.scss"
import { useState } from 'react'
import Button from '@material-ui/core/Button';
export default function Login(props) {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const fieldValue = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({ ...user, [name]: value })
    }
    const reset = async (e) => {
        setUser({
            email: "",
            password: ""
        })
    }
    const Login = async (e) => {
        try {
            e.preventDefault()
            const { email, password } = user;
            const result = await fetch(("/login"), {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            })
            const data = await result.json();
            if (result.status !== 201) {
                alert(data.err)

            }
            else {
                props.success()
                alert(data.msg ? data.msg : "Login Successfull")

            }
        }
        catch (err) {
            console.log("Error in Login")
        }
    }

    return (
        <>
            <div className={style.container + " col-12 py-3"}>
                <form method="POST" className={style.Login + " col-12 col-sm-12 col-md-7 col-lg-5 col-xxl-4 m-3 p-4 px-3 px-sm-5 mx-auto"}>
                    <h1 className="col-8 pb-2 my-2 mb-3">Login</h1>
                    <input type="email" name='email' id={style.email} className={style.input + " col-12 p-2 my-2"} placeholder="Enter Email ID" value={user.email} onChange={(e) => { fieldValue(e) }} autoComplete='off' />
                    <input type="password" name='password' id={style.password} className={style.input + " col-12 p-2 my-2"} placeholder="Enter Password" value={user.password} onChange={(e) => { fieldValue(e) }} />
                    <Button type="Submit" className={style.btn + " col-12 my-2 p-2 shadow-sm"} onClick={Login}>Login</Button>
                    <Button type="reset" className={style.btn + " " + style.reset + " col-12 bg-light my-2 p-2 shadow-sm"} onClick={reset}>Reset</Button>
                    <p className={style.txt}>Do not have any <Button onClick={() => props.handle("Register")} className={style.action + " m-0 p-0 px-1"}>Account?</Button></p>
                </form>

            </div>
        </>
    )
}
