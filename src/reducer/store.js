import { applyMiddleware, createStore } from "redux";

import {recipesReducer} from "./reducer";
import thunk from "redux-thunk";
const enhancer = applyMiddleware(thunk)
const devtools=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store = createStore(recipesReducer,enhancer,devtools);


