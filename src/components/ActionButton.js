import React from "react";
import Icon from "@material-ui/core/Icon"
import Textarea from 'react-textarea-autosize';

import Card from "@material-ui/core/Card";
import Button from '@material-ui/core/Button';

import {connect} from "react-redux"
import {addList,addCard} from "../actions/action";

class ActionButton extends React.Component{
    state ={
        formOpen:false,
        text: ""
    }

    openForm = () => {
        this.setState({
            formOpen: true
        })
    }

    closeForm = () => {
        this.setState({
            formOpen: false
        })
    }

    handleInputChange= e =>{
        this.setState({
            text: e.target.value
        })
    }

    handleAddList = () =>{
        const {dispatch} =this.props
        const {text} =this.state

        if(text){
            this.setState({text: ""})
            dispatch(addList(text))
        }
            }

    handleAddCard =()=>{
        const {dispatch,listID} = this.props;
        const {text} = this.state;

        if(text) {
            this.setState({
                text: ""
            })

            dispatch(addCard(listID,text))
        }
    }

    renderAddButton = () => {
        const {list} = this.props;

        const buttonText = list? "Add another list": "Add another ToDo Card";
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list? "white" : "inherit"
        const buttonTextBackground = list? "rgba(0,0,0,0.15)": "inherit"

        return (

            <div onClick={this.openForm}
                 style={{
                     ...styles.openFormButtonGroup,
                     opacity:buttonTextOpacity,
                     color:buttonTextColor,
                     backgroundColor:buttonTextBackground
                 }}>
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        )
    }

    renderForm = () => {
        const { list } = this.props;
        const placeholder = list ? "Enter List Title": "Enter ToDo Card";
        const buttonTitle = list ? "Add List": "Add ToDo Card";
        return <div>
            <Card style={{
                minHeight: 80,
                minWidth:270,
                padding: "6px 8px 2px"
            }}>
                {}
                <Textarea
                    placeholder={placeholder}
                    autoFocus
                    onBlur={this.closeForm}
                    value={this.state.text}
                    onChange={this.handleInputChange}

                    style={{
                        resize:"none",
                        width:"100%",
                        overflow:"hidden",
                        outline: "none",
                        border: "none"
                    }}

                /> { }
            </Card>
            <div style={styles.formButtonGroup}>
                <Button
                    onMouseDown={list ? this.handleAddList : this.handleAddCard}
                    variant="contained"
                    style={{color:"white", backgroundColor:"#5aac44"}}
                >
                    {buttonTitle}

                </Button>

                <Button
                    variant="contained"
                    style={{color:"white", backgroundColor:"#6c757d"}}
                >
                    Close

                </Button>

            </div>
        </div>

        // return <p>hello</p>
    }

    render(){

        if (this.state.formOpen )
            return this.renderForm();
        else
            return this.renderAddButton();

    }
}

const styles= {
    openFormButtonGroup: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: 3,
        height: 35,
        width: 270,
        paddingLeft: 10
    },
    formButtonGroup: {
        marginTop: 8,
        display: "flex",
        alignItems: "center"
    }
}

export default connect()(ActionButton);

