const BOARD_CREATE = 'board/BOARD_CREATE';
const BOARD_READ  = 'board/BOARD_READ';
const BOARD_UPDATE = 'board/BOARD_UPDATE';
const BOARD_DELETE  = 'board/BOARD_DELETE';

export const create = (item, dt) => ({type:BOARD_CREATE, item, dt});
export const update = (id, item) => ({type:BOARD_UPDATE, item, id});
export const remove = (id) => ({type:BOARD_DELETE, id});
export const read = () => ({type:BOARD_READ});

const initialState = {
    items: [],
    id:1,
};

export default function board (state=initialState, action) {
    switch (action.type) {
        case BOARD_CREATE:
            return {
                items: state.items.concat(
                    {id: state.id++, today: action.dt,  ...action.item}
                ),
                id: state.id ++,
            };
        case BOARD_UPDATE:
            return {
                items: state.items.map( item => item.id === action.id ? {...item, ...action.item} : item )
            };
        case BOARD_DELETE:
            return {
                items: state.items.filter(item => item.id !== action.id )
            };
        case BOARD_READ:
        default:
            return state;
    }
}
