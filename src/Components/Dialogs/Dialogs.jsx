import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


    

const Dialogs = (props) => {


    let DialogsElements = props.Dialog.map( element => <DialogItem id={element.id}  name={element.name}/>);
    
    let DialogsMessages = props.Message.map( element => <Message message={element.message} />)
    

    return(

        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                    {DialogsElements}
            </div>
            <div className={style.messages}>
                {DialogsMessages}
            </div>
        </div>
    )
}

export default Dialogs;