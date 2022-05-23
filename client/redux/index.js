import { combineReducers } from 'redux'
import inventoryReducer from './inventory'

const appReducer = combineReducers({
    inventory: inventoryReducer,
  })

export default appReducer;
