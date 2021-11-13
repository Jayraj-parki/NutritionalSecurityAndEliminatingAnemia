import React , { useState, useEffect } from 'react'
import style from "./css/Footer.module.scss"
import Button from '@material-ui/core/Button'
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
export default function Contact(props) {
    const [user ,setUser]=useState({
        name:"",
        email:"",
        phone:"",
        message:""
    })
    const {name,email,phone,message}=user
    const inputData=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setUser({...user,[name]:value})
    }
    const addMessage=async()=>{
        try {
            const result = await fetch(("/addMessage"), {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(
                    {name,email,phone,message}
                )
            }) 
            const data = await result.json()
            if(result.status===201){
                alert(data.msg)
                setUser({...user,phone:"",message:""})
            }
            else{
                alert(data.err)
            }
     
        } catch (err) {
            console.log("Error in Messgae")
        }
    }
    
    const getUser = async () => { 
        try {
            const result = await fetch(("/data"), {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await result.json()
            const name=data.fname+" "+data.lname
            setUser({...user,name:name,email:data.email,
            })

        }
        catch (err) { 
            console.log("error in getUser" + err) 
        }
    }

    useEffect(()=>{
        getUser()
    },[props.reload])
    return (
        <>
            <form  className={style.contact + "  col-lg-11 col-xl-10 mt-4"}>
                <div className="mb-3 col-10 col-md-auto col-lg-3 p-0 d-flex mx-auto">
                    <PersonIcon className={style.icon + "  col-2 m-auto"} />
                    <input name="name" type="name" className={style.field + "   col-10 m-0 p-2 "} value={name} onChange={inputData} placeholder="Full Name" />
                </div>
                <div className="mb-3 col-10 col-md-4 col-lg-3 d-flex mx-auto">
                    <EmailIcon className={style.icon + " col-2 m-auto"} />
                    <input name="email" type="email" className={style.field + "   col-10 ms-auto p-2"} value={email} onChange={inputData} placeholder="Email" />
                </div>
                <div className="mb-3 col-10 col-md-4 col-lg-3 d-flex mx-auto">
                    <CallIcon className={style.icon + " col-2 m-auto"} />
                    <input name="phone" type="number" className={style.field + "   col-10 m-0 p-2"} value={phone} onChange={inputData} placeholder="Contact Number" />
                </div>
                <div className="mb-3 col-10 col-sm-10 col-lg-11  d-flex mx-auto">
                    <textarea name="message" type="number" className={style.field + "   col-10 m-0 p-2"} value={message} onChange={inputData} placeholder="Write Message here..."></textarea>
                </div>
                <Button className={style.sendMsg + " col-10 col-sm-6 col-md-4 mx-auto my-3"} onClick={addMessage}>Submit Messsage</Button>
            </form>
        </>
    )
}
