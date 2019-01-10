import { createAction, handleActions } from 'redux-actions';

const BOARD_CREATE = 'board/BOARD_CREATE';
const BOARD_READ  = 'board/BOARD_READ';
const BOARD_UPDATE = 'board/BOARD_UPDATE';
const BOARD_DELETE  = 'board/BOARD_DELETE';

let id = 0;
export const create = createAction(BOARD_CREATE, (item, dt) => ({ item, dt, id: id++ }));
export const update = createAction(BOARD_UPDATE, (id, item) =>({item, id}));
export const remove = createAction(BOARD_DELETE, id =>({id}));
export const read = createAction(BOARD_READ);

const initialState = {
    items: [],
};

export default handleActions(
    {
        [BOARD_CREATE]: (state, action) => ({
            items: state.items.concat(
                {id: id, today: action.payload.dt,  ...action.payload.item}
            ),
        }),
        [BOARD_UPDATE]: (state, action) => ({
            items: state.items.map( item => item.id === action.payload.id ? {...item, ...action.payload.item} : item )
        }),
        [BOARD_DELETE]: (state, action) => ({
            items: state.items.filter(item => item.id !== action.payload.id )
        }),
    },
    initialState
);
