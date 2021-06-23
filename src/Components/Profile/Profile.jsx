import React from "react";
import style from "./Profile.module.css";
import sand from "./../../images/sand.jpg";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return(
        <div className={style.content}>
            <div>
                <img src={sand} alt="island" />
            </div>
            <div>ava+description</div>
            <MyPosts />
            
        </div>
    )
}

export default Profile;