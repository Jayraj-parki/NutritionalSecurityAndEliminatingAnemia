import React from 'react'
import style from "../css/home/ServiceCard.module.scss"
import GrainIcon from '@material-ui/icons/Grain';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import PersonIcon from '@material-ui/icons/Person';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
export default function ServiceCard(props) {
    return (
        <>  
            <div className={style.ServiceCard+ " card col-10 col-sm-5 col-lg-3 mx-auto"}>
            {props.type==="WatchLaterIcon" &&<WatchLaterIcon className={style.icon + " mt-3 mx-auto"}/>}
                {props.type==="PersonIcon" &&<PersonIcon className={style.icon + " mt-3 mx-auto"}/>}
                {props.type==="EmojiFoodBeverageIcon" &&<EmojiFoodBeverageIcon className={style.icon + " mt-3 mx-auto"}/>}
                {props.type==="GrainIcon" &&<GrainIcon className={style.icon + " mt-3 mx-auto"}/>}
                {props.type==="VideoLibraryIcon" &&<VideoLibraryIcon className={style.icon + " mt-3 mx-auto"}/>}
                {props.type==="LocalHospitalIcon" &&<LocalHospitalIcon className={style.icon + " mt-3 mx-auto"}/>}
                {props.type==="PlayCircleFilledIcon" &&<PlayCircleFilledIcon className={style.icon + " mt-3 mx-auto"}/>}
                {props.type==="QuestionAnswerIcon" &&<QuestionAnswerIcon className={style.icon + " mt-3 mx-auto"}/>}
            <div className="card-body">
                    <h3 className="card-title">{props.text}</h3>
                </div>
            </div>
            
        </> 
    )
}
