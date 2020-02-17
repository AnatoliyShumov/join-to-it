import * as types from "../actions/actionTypes";

const initialState = {
    loading: false,
    data: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ITEM_USER_REQUEST:
            return {
                ...state,
                loading: true,
                data: []
            };
        case types.GET_ITEM_USER_SUCCESS:
            const {data} = action
            return {
                ...state,
                loading: false,
                data
            };
        case types.GET_ITEM_USER_FAILURE:
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