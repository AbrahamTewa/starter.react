// ============================================================
// Import packages
import { combineReducers, createStore } from 'redux';
import { routerReducer } from 'react-router-redux';

// ============================================================
// Import modules
import actionReducer, * as actions from './actions';

// ============================================================
// Module constants and variables
const reducers = combineReducers({
    action: actionReducer,
    routing: routerReducer,
});

let store;

// ============================================================
// Functions
function configureStore(initialState = {}) {
    store = createStore(reducers, initialState);
}

function getStore() {
    return store;
}

// ============================================================
// Exports
export {
    actions,
    configureStore,
    getStore,
};
