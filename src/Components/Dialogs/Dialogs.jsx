import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


    

const Dialogs = (props) => {


    let DialogsElements = props.state.DialogsData.map( element => <DialogItem id={element.id}  name={element.name} key = {element.id} picture={element.picture}/>);
    
    let DialogsMessages = props.state.MessageData.map( element => <Message message={element.message} key = {element.id}/>)

    let AddingMessage = React.createRef()

    let addMessageText = () => {
        props.addMessage();
    }

    let onMessageChangeText = () => {
        let text = AddingMessage.current.value;
        props.onMessageChange(text);
    }


    return(

        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                    {DialogsElements}
            </div>
            <div className={style.messages}>
                {DialogsMessages}
                <div className={style.addmessage}>
                    <div>
                        <textarea onChange={onMessageChangeText} className={style.text} ref={AddingMessage} value={props.state.newMessageText}></textarea>
                    </div>
                    <div>
                        <button className={style.button} onClick={addMessageText}>Добавить сообщение</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;