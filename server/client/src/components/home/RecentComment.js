import React, { useState, useEffect } from 'react'
import style from "../css/home/RecentComment.module.scss"
import Chat from "./Chat"
import Register from "./Register"
import Login from "./Login"
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
export default function RecentComment(props) {
    const [comments, setComments] = useState([{}])
    const [userID, setUserID] = useState("")
    const [active, setActive] = useState("noauth")
    const [user, setUser] = useState()
    const [action, setAction] = useState("Register")
    const getMessage = async () => {
        try {
            // e.preventDefault()
            const result = await fetch(("/getComment"), {
                method: "get",
                headers: {
                    "Content-type": "application/json"
                },
            })
            const data = await result.json()
            setComments([...data.reverse()])

        } catch (err) {
            console.log("Error in comment" + err)
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
            setUser(data)
        }
        catch (err) {
            console.log("error in getUser" + err)
        }
    }
    const highlight=(index)=>{
        // console.log(index)
        const comment=document.getElementById("chat"+index)
        const commentsAll=document.getElementsByClassName(style.msg)
        const arr=[...commentsAll]
        arr?.map((val)=>{
            val.style.backgroundColor="white"
            val.style.color="black"
        })
        comment.style.backgroundColor="rgba(0, 0, 0, 0.986)"
        comment.style.color="rgba(255, 255, 255, 0.986)"
    }

    useEffect(() => {
        getUser()
        getMessage()
        props.reload()
    }, [active])
    return (
        <>
            {
                !user?._id ?
                    <div className={style.Auth + " row col-12 my-2  mx-auto  rounded p-3 px-1 px-sm-5"}>
                        <h3 className={style.login + " col-10 mx-auto p-2 text-center"}>Login To Check Recent comments</h3>
                        {
                            action === "Login" ?
                                <Login success={() => { setActive("auth") }} handle={() => { setAction("Register") }} /> :
                                <Register handle={() => { setAction("Login") }} />
                        }
                    </div>
                    :
                    <div className={style.comment + " row col-12 my-2  mx-auto   rounded p-3 px-sm-5"}>
                        <h3 className={style.heading + " col-10 mx-auto p-2 text-center"}>Recent Comments</h3>
                        <div className={style.message_container + " mt-4 shadow col-12 col-sm-12  col-lg-5 col-xl-4 mx-auto  d-flex rounded "}>
                            <div className={"row col-10 mx-auto "}>
                                <IconButton onClick={() => document.getElementById("msg").scrollBy({ top: -150, behavior: "smooth" })} className=" col-auto mx-auto   "><KeyboardArrowUpIcon className={style.icon + " m-0"} /></IconButton>
                                <IconButton onClick={getMessage} className=" col-auto mx-auto "><RefreshIcon className={style.icon + " m-0"} /></IconButton>
                                <IconButton onClick={() => document.getElementById("msg").scrollBy({ top: 150, behavior: "smooth" })} className=" col-auto mx-auto "><KeyboardArrowDownIcon className={style.icon + " m-0"} /></IconButton>
                            </div>
                            <div id="msg" className={style.msg_container + " row  mx-auto  col-12   py-1"}>
                                {
                                    comments.map((value, index) =>
                                        <div key={index} id={"chat"+index} className={style.msg + " row col-12  m-1 py-2 rounded mx-auto"}>
                                            <h6 className="p-0 m-0 col-8  text-start">{value.name}</h6>
                                            <IconButton onClick={() => document.getElementById((value.email + index)).style.display = "flex"}
                                                className=" col-1 ms-auto p-0 mx-2" ><InfoIcon className={style.icon + " m-0 "} /></IconButton>
                                            <IconButton onClick={() => {setUserID(value?._id);highlight(index)}} className=" col-1  p-0"><KeyboardArrowRightIcon className={style.icon + " m-0"} /></IconButton>
                                            <p className="p-2 rounded my-2 col-12">{value.message}</p>
                                            <div id={value?.email + index+""} className={style.info + " row col-12  m-0 py-2 rounded mx-auto " + value.email}>
                                                <p className="p-0 m-0 col-8  text-start">Name: {value.name}</p>
                                                <IconButton onClick={() => document.getElementById(value?.email + index+"").style.display = "none"} className={style.icon_container + " col-auto ms-auto p-0"} ><CloseIcon className={style.icon + " m-0"} /></IconButton>
                                                <p className="p-0 rounded m-0  col-12">Email : {value.email}</p>
                                                <p className="p-0 rounded  m-0 col-12">Phone : {value.phone}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <Chat id={userID} email={user.email} />

                    </div>

            }
        </>
    )
}
