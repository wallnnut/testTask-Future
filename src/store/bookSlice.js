import { createSlice } from "@reduxjs/toolkit";
import httpService from "../services/http.service";

const bookSlice = createSlice({
	name: "book",
	initialState: {
		entities: null,
		isLoading: false,
		error: null,
		dataLoaded: false,
		startIndex: 0,
		maxResults: 10,
		totalItems: 0,
		searchQuery: "",
	},
	reducers: {
		bookRequested: (state, action) => {
			state.isLoading = true;
			console.log(action.payload);
			state.searchQuery = action.payload;
		},
		booksReceived: (state, action) => {
			state.isLoading = false;
			state.entities = action.payload.items;
			state.totalItems = action.payload.totalItems;
			state.startIndex += state.maxResults;
			state.dataLoaded = true;
		},
		booksRequestFailed: (state, action) => {
			state.error = action.payload;
			state.isLoading = false;
		},
		booksPaginationRequest: (state, action) => {
			state.isLoading = true;
			state.startIndex += state.maxResults;
		},
		booksPaginationReceived: (state, action) => {
			state.isLoading = false;
			console.log(action.payload);
			state.entities = [...state.entities, ...action.payload];
			state.dataLoaded = true;
		},
		booksPaginationRequestFailed: (state, action) => {
			state.error = action.payload;
			state.isLoading = false;
		},
	},
});

const { reducer: bookReducer, actions } = bookSlice;

const {
	bookRequested,
	booksReceived,
	booksRequestFailed,
	booksPaginationRequest,
	booksPaginationReceived,
	booksPaginationRequestFailed,
} = actions;

export const loadBooks =
	({ search, startIndex, maxResults }) =>
	async (dispatch) => {
		dispatch(bookRequested(search));
		try {
			const { items, totalItems } = await httpService.get({
				search,
				startIndex,
				maxResults,
			});
			dispatch(booksReceived({ items, totalItems }));
		} catch (error) {
			dispatch(booksRequestFailed(error));
		}
	};
export const loadMore =
	({ search, startIndex, maxResults }) =>
	async (dispatch) => {
		dispatch(booksPaginationRequest());
		try {
			const { items } = await httpService.get({
				search,
				startIndex,
				maxResults,
			});
			dispatch(booksPaginationReceived(items));
		} catch (error) {
			dispatch(booksPaginationRequestFailed());
		}
	};

export const getStartIndex = () => (state) => state.book.startIndex;
export const getMaxResults = () => (state) => state.book.maxResults;
export const getBooks = () => (state) => state.book.entities;
export const getSearchQuyery = () => (state) => state.book.searchQuery;


export default bookReducer;
