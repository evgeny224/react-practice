import React from "react";
import style from "./ProfileInfo.module.css";
import sand from "../../../../images/sand.jpg";



const ProfileInfo = () => {
    return(
        <div className={style.content}>
            <div>
                <img src={sand} alt="island" />
            </div>
            <div className={style.description}>ava+description</div>
        </div>
    )
}

export default ProfileInfo;