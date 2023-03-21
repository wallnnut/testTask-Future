import { useDispatch } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice";

const rootReducer = combineReducers({
	book: bookReducer,
});
export const store = configureStore({
	reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof rootReducer>;
