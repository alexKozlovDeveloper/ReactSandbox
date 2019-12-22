import React from "react";
import { connect } from 'react-redux'
import { updateTitle } from '../actions'

const Home = ({ title }) => {
    return <div>This ]Home[ page [{title}]</div>
}

function mapStateToProps(state) {
    const { title } = state.TitleReducer;
    console.log(state, "home");
    return {
        title
    };
}

export default connect(
    mapStateToProps
)(Home)
