import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
	name: "book",
	initialState: {
		entities: null,
		isLoading: false,
		error: null,
		dataLoaded: false,
		startIndex: 0,
		maxResults: 20,
		totalItems: 0,
	},
	reducers: {
		bookRequested: (state) => {
			state.isLoading = true;
		},
		booksReceived: (state, action) => {
			state.isLoading = false;
			state.entities = action.payload.items;
			state.entities = action.payload.totalItems;
			state.dataLoaded = true;
		},
		booksRequestFailed: (state, action) => {
			state.error = action.payload;
			state.isLoading = false;
		},
	},
});

const { reducer: bookReducer, actions } = bookSlice;

const { bookRequested, booksReceived, booksRequestFailed } = actions;

export default bookReducer;
