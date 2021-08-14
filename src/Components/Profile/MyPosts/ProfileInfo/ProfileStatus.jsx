import React from "react";






class ProfileStatus extends React.Component {

    //Локальный стейт нашего класса
    state = {
        editMode: false
    }
    //Метод нашего класса для изменения состояния нашего стейта
    activeEditMode = () => {
        this.setState({
            editMode: true
    })
}

    deactiveEditMode = () => {
        this.setState({
            editMode: false
    })
}
    
    render(){
    
        return(
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick = {this.activeEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus = {true} onBlur = {this.deactiveEditMode} value = {this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;