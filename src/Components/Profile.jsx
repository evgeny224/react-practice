import React from "react";
import style from "./Profile.module.css";
import sand from "./../images/sand.jpg";

const Profile = () => {
    return(
        <div className={style.content}>
            <div>
                <img src={sand} alt="island" />
            </div>
            <div>ava+description</div>
            <div>
                My posts
                <div>New post</div>
                <div>
                    <div className={style.item}>post 1</div>
                    <div>post 2</div>
                </div>
            </div>
        </div>
    )
}

export default Profile;