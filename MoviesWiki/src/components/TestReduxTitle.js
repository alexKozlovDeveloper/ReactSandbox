import React, { Component } from "react";
import { connect } from 'react-redux'

const TestReduxTitle = (props) => {
    return  <div>
                <div>My TestReduxTitle with title '{props.title}'</div>
                <div onClick={() => {console.log("lol");props.updateTitleFunc()}}>!CLICK!</div>
            </div>;
}

const updateTitle = (newTitle) => ({
    type: 'UPDATE_TITLE',
    title: newTitle
});

function mapDispatchToProps(dispatch) {
    return {
        updateTitleFunc: () => {
            console.log("lol33");
            dispatch(updateTitle("newTitle"))
        }
    }
}

function mapStateToProps(state){
    debugger;

    var title = state.titleReducers === undefined ? '' : (state.titleReducers.length > 0 ? state.titleReducers[0].title : '');
    //const { title } = state.titleReducers[0];
    console.log("lol2" + title);
    return { title: title };
}

export default  connect(mapStateToProps, mapDispatchToProps)(TestReduxTitle);