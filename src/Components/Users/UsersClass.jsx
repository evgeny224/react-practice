import React from "react";
import style from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/images/user.jpg"

// Делаем запрос на сервер с помощью axios

class Users extends React.Component {
    
    constructor(props){
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(responce =>{
            this.props.setUsers(responce.data.items);
        });
    }

    render(){
        return (
            <div>
                {
                    this.props.users.map( users => <div key = {users.id}>
                        <img src={users.photos.small != null ? users.photos.small : userPhoto} alt="avatar" className = {style.userPhoto}/>
                        <div>
                            {users.followed ? 
                                <button onClick = { () => { this.props.unfollow(users.id) }}>Unfollow</button> : 
                                <button onClick = { () => { this.props.follow(users.id) } }>Follow</button>}
                        </div>
                        <div>{users.name}</div>
                        <div>{users.status}</div>
                        <div>{"users.location.city"}</div>
                        <div>{"users.location.country"}</div>
                    </div>)
                }
            </div>
        )
    }
}


    export default Users;