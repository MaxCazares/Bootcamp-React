const initialState = [{
    id: 1,
    todo: 'comprar pan',
    done: false,
}];

const todoReducer = (state = initialState, action) => {

    if(action?.type === 'agregar'){
        return [...state, action.payload]
    }
    // return state;
}

let toDos = todoReducer();
// console.log(toDos);

const newState = {
    id: 2,
    todo: 'comprar leche',
    done: false,
};

const agregarToDo = {
    type: 'agregar',
    payload: newState,
}

toDos = todoReducer(toDos, agregarToDo);

console.log(toDos);