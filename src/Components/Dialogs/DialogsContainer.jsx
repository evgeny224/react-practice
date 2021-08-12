import { addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/message-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";


    

    let mapStateToProps = (state) => {
        return {
            state: state.messagePage,
            isAuth: state.auth.isAuth,
        }
    }

    let mapDispatchToProps = (dispatch) => {
        return {
            addMessage: () => {
                dispatch(addMessageActionCreator());
            },
            onMessageChange: (text) => {
                dispatch(onMessageChangeActionCreator(text));
            }

        }
    }

    let DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;