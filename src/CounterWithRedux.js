import React, {useState} from "react";
import {connect} from "react-redux";
import {increment} from "./redux/action";

const CounterWithRedux = (props) => {
    return(
        <div>
            <h3>count: {props.count}</h3>
            <button onClick={props.increment}>Increase</button>
        </div>
    )
}

//store state
const mapStateToProps = state => {
    return {
        count: state.count
    }
}

//store action
const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch(increment())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterWithRedux);