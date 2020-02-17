import * as types from "../actions/actionTypes";

const initialState = {
    toogle: false,
    loading: false,
    data: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_HIDE_SIDEBAR:
            return {
                ...state,
                toogle: !state.toogle
            };
        case types.GET_ITEM_REQUEST:
            return {
                ...state,
                loading: true,
                data: []
            };
        case types.GET_ITEM_SUCCESS:
            const {data} = action
            return {
                ...state,
                loading: false,
                data
            };
        case types.GET_ITEM_FAILURE:
            const {error} = action
            return {
                ...state,
                loading: false,
                error
            };
        default:
            return state;
    }
};