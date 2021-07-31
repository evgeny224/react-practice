import React from "react";
import style from "./Users.module.css";

    const Users = (props) => {

        if(props.users.length === 0) {
        props.setUsers( [   
                {id: 1, photoUrl: "https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg",
                    followed: true, fullname: "Nick", status: "I am a manager", location: {city: "Moscow", country: "Russia"}},
                {id: 2, photoUrl: "http://archilab.online/images/1/123.jpg",
                    follwowed: false, fullname: "Georg", status: "I am a top-manager", location: {city: "London", country: "United Kingdom"}},
                {id: 3, photoUrl: "http://pm1.narvii.com/6532/4956f7e6f74bb651daf4bc1328d193a5d5c96fbf_00.jpg",
                    followed: true, fullname: "Ulia", status: "I am a sales-manager", location: {city: "Paris", country: "France"}},
                {id: 4, photoUrl: "https://i2.wp.com/heaclub.ru/tim/1e536757940f5acd0625a8db1f4843f7/krasivaya-muzhskaya-avatarka.jpg",
                    followed: true, fullname: "Tom", status: "I am a test-manager", location: {city: "Berlin", country: "Germany"}},
            ]
        
        )
    }
        
        return (
            <div>
                {
                    props.users.map( users => <div key = {users.id}>
                        <img src={users.photoUrl} alt="avatar" className = {style.userPhoto}/>
                        <div>
                            {users.followed ? 
                                <button onClick = { () => { props.unfollow(users.id) }}>Unfollow</button> : 
                                <button onClick = { () => { props.follow(users.id) } }>Follow</button>}
                        </div>
                        <div>{users.fullname}</div>
                        <div>{users.status}</div>
                        <div>{users.location.city}</div>
                        <div>{users.location.country}</div>
                    </div>)
                }
            </div>
        )
    }

    export default Users;