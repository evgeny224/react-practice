import React from "react";
import style from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";


        const DialogItem = (props) => {
            let path = "/dialogs/" + props.id;

            return(
                <div className={style.dialog + ' ' + style.active}>
                    <NavLink to={path}>{props.name}</NavLink>
                </div>
            )
        }

        const Message = (props) => {
            return(
                <div className={style.message}>
                    {props.message}
                </div>
            )
        }

        let DialogsData = [ 
                            {id: 1, name: "Eva"},
                            {id: 2, name: "Olga"},
                            {id: 3, name: "Nick"},
                            {id: 4, name: "Petr"},
                            {id: 5, name: "Kir"},
                            {id: 6, name: "Alex"},
    ]

        let MessageData = [     
                                {id: 1, message: "Hello every one!"},
                                {id: 2, message: "Hi"},
                                {id: 3, message: "Nice to meet you!"},
                                {id: 4, message: "Thank you very mutch!"},
    ]



const Dialogs = (props) => {
    return(
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                    <DialogItem id={DialogsData[0].id}  name={DialogsData[0].name}/>
                    <DialogItem id={DialogsData[1].id}  name={DialogsData[1].name}/>
                    <DialogItem id={DialogsData[2].id}  name={DialogsData[2].name}/>
                    <DialogItem id={DialogsData[3].id}  name={DialogsData[3].name}/>
                    <DialogItem id={DialogsData[4].id}  name={DialogsData[4].name}/>
                    <DialogItem id={DialogsData[5].id}  name={DialogsData[5].name}/>
            </div>
            <div className={style.messages}>
                <Message message={MessageData[0].message} />
                <Message message={MessageData[1].message} />
                <Message message={MessageData[2].message} />
                <Message message={MessageData[3].message} />
            </div>
        </div>
    )
}

export default Dialogs;