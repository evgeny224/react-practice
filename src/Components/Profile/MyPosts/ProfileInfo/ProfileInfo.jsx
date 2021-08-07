import React from "react";
import style from "./ProfileInfo.module.css";
import sand from "../../../../images/sand.jpg";
import Preloader from "../../../Common/Preloader/Preloader";



const ProfileInfo = (props) => {
    
    if(!props.profile){
        return <Preloader />
    }
    
    return(
        <div className={style.content}>
            <div>
                <img src={sand} alt="island" />
            </div>
            <div className={style.description}>
                <div>
                    <img  src = { props.profile.photos.large } alt=""/>
                </div>
                <div>
                    {props.profile.fullName}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;