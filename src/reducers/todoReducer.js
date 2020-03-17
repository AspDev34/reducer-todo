export const initialState = { //my initial state value.
    todoData: [
        {item: 'Keep learning code',
        completed: false,
        id: Date.now()
        },
        {item: 'Practice React',
        completed: false,
        id: Date.now()
        }
    ],
    
};

export const todoReducer = (state, action) => {
    console.log(state.todoData);
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                todoData: [...state.todoData, {
                item: action.playload,
                completed: false,
                id: Date.now()
                }]
            }
        case 'TOGGLE_ITEM':
            return {
                ...state,
                todoData: state.todoData.map(item =>
                item.id===action.playload ? {...item, completed: !item.completed} : item)
            }
        case 'CLEAR_COMPLETED':
            return {
                todoData: state.todoData.filter(item => !item.completed)
            }
        default:
            return state;
    };
};

