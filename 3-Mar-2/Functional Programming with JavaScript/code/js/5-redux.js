"use strict";
const initState = {
    todos: [],
    other: {}
};
function addTodoReducer(state, action) {
    if (action.text === 'ADD_TODO') {
        // Object.assign clones state
        return Object.assign({}, state, {
            todos: [
                ...state.todos,
                {
                    text: action.text,
                    finished: false
                }
            ]
        });
    }
    else {
        return state;
    }
}
