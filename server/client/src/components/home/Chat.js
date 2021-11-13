import React, { useState, useEffect } from 'react'
import style from "../css/home/RecentComment.module.scss"
import Button from '@material-ui/core/Button';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
export default function Chat(props) {
    
    const [reply, setReply] = useState("")
    const [user, setUser] = useState([{}])
    const getReply = async (id) => {
        try {
            const result = await fetch(("/getReplies"), {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    id: id,
                }) 
            })
            const data = await result.json()
            if(result.status===201){
                setUser([...data])
            document.getElementById("chats").scrollTo(0, document.getElementById("chats").scrollHeight)
            }

        } catch (err) {
            console.log("Error in client reply" + err)
        }
    }
    const addReply = async () => {
        if (reply.trim() === "") {
            window.alert("Plz write before sending")
            return;
        }
        try {
            const result = await fetch(("/addReply"), {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    id: props.id,
                    email: props.email,
                    reply
                })
            })
            setReply("")
            if (result.status === 201) {
                getReply(props.id)
            }

        } catch (err) {
            console.log("Error in client Registeration")

        }
    }
    useEffect(() => {
        getReply(props.id)
    }, [props.id])
    return (
        <>
            {user?.[0].email ?

                <div className={style.replies_container + " col-sm-12 col-lg-7 col-xl-8 mt-4 p-2    ms-auto  rounded"}>
                    {user.map((value, index, arr) =>
                        <span key={value.email+""+index} className="col-12 mx-auto px-2">
                            <div  className={style.mainUser + " row col-12 "}>
                                <p className={style.email + " rounded col-auto m-0 me-auto ms-2"}>{value.email}</p>
                            </div>
                            <div id="chats" className={style.replies + " row col-12 bg-light mx-auto col-12 p-4 rounded "}>
                                {
                                    value?.replies[0] ?
                                        <> {
                                            value?.replies?.map((val,index) =>
                                                <div key={val.email+""+index} className={style.infoData + " row col-12 "}>
                                                    {
                                                        value.email === val.email ?

                                                            <div className={" row col-auto  rounded p-2 me-auto my-2 "}>
                                                                <p className={style.email + " rounded col-auto m-0 me-auto"}>{val.email}</p>
                                                                <p className=" col-auto mt-1 rounded mb-0 ms-auto">{val.msg}</p>
                                                            </div> :
                                                            <div className={" row col-auto  rounded p-2 ms-auto my-2 "}>
                                                                <p className={style.email + " rounded col-auto m-0 me-auto"}>{val.email}</p>
                                                                <p className=" col-auto mt-1 rounded mb-0 ms-auto">{val.msg}</p>
                                                            </div>

                                                    }
                                                </div>
                                            )
                                        }
                                        </>
                                        :
                                        <h1 className={style.no_comment + " col-12 m-auto mx-0 p-0 text-center"}>no comments Yet</h1>
                                }
                            </div>
                        </span>
                    )}

                    <div className={style.sendMsg + " row col-12  mx-auto mt-auto py-2 "}>
                        <input name="reply" type="text" className="col-10 p-2 m-auto me-auto rounded " value={reply} onChange={(e) => setReply(e.target.value)} placeholder="Reply Here..." autoComplete="off" />
                        <Button onClick={addReply} className="col-1 p-0  m-auto ms-auto"><KeyboardArrowRightIcon className={style.icon + " p-0 m-0 "} /></Button>
                    </div>
                </div>
                : null
            }
        </>
    )
}
