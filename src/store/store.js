import { configureStore, combineReducers } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice";

const rootReducer = combineReducers({
	book: bookReducer,
});

export function createStore() {
	return configureStore({
		reducer: rootReducer,
	});
}
