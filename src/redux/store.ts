import { createStore, combineReducers, compose } from "redux";

import leaguesReducer from "./reducers/leaguesReducer";
import compareItemsReducer from "./reducers/compareItemsReducer";

const rootReducer = combineReducers({
	leagues: leaguesReducer,
	compareItems: compareItemsReducer,
});

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers());

export default store;
