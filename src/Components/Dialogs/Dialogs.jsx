import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


    

const Dialogs = (props) => {


    let DialogsElements = props.state.DialogsData.map( element => <DialogItem id={element.id}  name={element.name} picture={element.picture}/>);
    
    let DialogsMessages = props.state.MessageData.map( element => <Message message={element.message} />)

    let AddingMessage = React.createRef()
    
    let addMessage = () => {
        props.dispatch({ type: "ADD-MESSAGE"});
    }

    let onMessageChange = () => {
        let text = AddingMessage.current.value;
        let action = { type: "UPDATE-NEWMESSAGETEXT", newMessage: text };
        props.dispatch(action);
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
                        <textarea onChange={onMessageChange} className={style.text} ref={AddingMessage} value={props.state.newMessageText}></textarea>
                    </div>
                    <div>
                        <button className={style.button} onClick={addMessage}>Добавить сообщение</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;