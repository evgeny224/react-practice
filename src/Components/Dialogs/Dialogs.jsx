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



const Dialogs = (props) => {
    return(
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                    <DialogItem id="1"  name="Eva"/>
                    <DialogItem id="2"  name="Olga"/>
                    <DialogItem id="3"  name="Nick"/>
                    <DialogItem id="4"  name="Petr"/>
                    <DialogItem id="5"  name="Kir"/>
                    <DialogItem id="6"  name="Alex"/>
            </div>
            <div className={style.messages}>
                <Message message="Hello every one!" />
                <Message message="Hi!" />
                <Message message="Nice to meet you!" />
                <Message message="Thank you very mutch!" />
            </div>
        </div>
    )
}

export default Dialogs;