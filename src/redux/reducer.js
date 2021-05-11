import {Increment} from "./actionType";

const initialState = {
    count: 10
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Increment: return {
            ...state,
            count: state.count + 1
        }
        default: return state
    }
}