import axios from 'axios';

const SET_INVENTORY = 'SET_INVENTORY'
const ADD_INVENTORY = 'ADD_INVENTORY'
const REMOVE_INVENTORY = "REMOVE_INVENTORY"
const UPDATE_INVENTORY = 'UPDATE_INVENTORY'

export const setInventory = (inventory) => ({
    type: SET_INVENTORY,
    inventory
})

export const addInventory = (inventory) => ({
    type: ADD_INVENTORY,
    inventory
})

export const _deleteInventory = (inventory) => ({
    type: REMOVE_INVENTORY,
    inventory
  })
 
  export const _updateInventory = (inventory) => ({
    type: UPDATE_INVENTORY,
    inventory
  })

export const fetchInventory = () => {
    return async (dispatch) => {
        try {
            const { data: inventory } = await axios.get('/api/inventory');
            dispatch(setInventory(inventory));
        } catch (err) {
            console.log(err);
        }
    }
}

export const createInventory = (inventory, history) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post('/api/inventory', inventory);
            dispatch(addInventory(data));
            history.push('/inventory');
        } catch (err) {
            console.log(err)
        }
    }
}

export const deleteInventory = (name, history) => {
    return async (dispatch) => {
        try { const { data: inventory } = await axios.delete(`/api/campuses/${name}`);
        dispatch(_deleteInventory(inventory));
        history.push('/');
        } catch (err) {
            console.log(err);
        }
    }
}

export const updateCampus = (name, history) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.put(`/api/campuses/${name}`);
            dispatch(_updateCampus(data));
            history.push('/')
        } catch (err) {
            console.log(err);
        }
    }
}

export default function inventoryReducer (state = [], action) {
    switch (action.type) {
        case SET_INVENTORY:
            return action.inventory;
        case ADD_INVENTORY:
            return [...state, action.inventory];
        case REMOVE_INVENTORY:
            return state.filter(inventory => {
                return inventory.name !== action.inventory.name;
            });
        case UPDATE_INVENTORY:
            return state.map((inventory) => {
                return inventory.name === action.inventory.name ? action.inventory : inventory});
        default:
            return state;
    }
}