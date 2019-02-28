interface State {
    todos: Todo[],
    other: any
}

interface Action {
    type: string,
    text: string
}

interface Todo {
    text: string,
    finished: boolean
}

const initState: State = {
    todos: [],
    other: {}
};

function addTodoReducer(state: State, action: Action): State {
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
    } else {
        return state;
    }
}