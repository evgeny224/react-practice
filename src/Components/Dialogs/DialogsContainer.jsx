import { addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/message-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


    

    let mapStateToProps = (state) => {
        return {
            state: state.messagePage,
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

    //Функция compose соеденяет все обработчики вместе

export default compose(
    connect (mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);