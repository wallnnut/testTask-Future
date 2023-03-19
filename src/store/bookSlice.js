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
		maxResults: 30,
		totalItems: 0,
		searchQuery: "",
		orderBy: "relevance",
	},
	reducers: {
		bookRequested: (state, action) => {
			state.isLoading = true;
			state.searchQuery = action.payload;
		},
		booksReceived: (state, action) => {
			state.isLoading = false;
			state.entities = action.payload.items;
			state.totalItems = 0;
			state.totalItems = action.totalItems;
			state.startIndex = state.maxResults;
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
			state.entities = [...state.entities, ...action.payload];
			state.entities = state.entities.reduce(
				(arr, el) => (
					arr.find(({ id }) => el.id === id) || arr.push(el), arr
				),
				[]
			);
			state.dataLoaded = true;
		},
		booksPaginationRequestFailed: (state, action) => {
			state.error = action.payload;
			state.isLoading = false;
		},
		orderByChanged: (state, action) => {
			state.orderBy = action.payload;
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
	orderByChanged,
} = actions;

export const loadBooks =
	({ search, startIndex, maxResults, order }) =>
	async (dispatch) => {
		dispatch(bookRequested(search));
		try {
			const { items, totalItems } = await httpService.get({
				search,
				startIndex,
				maxResults,
				order,
			});
			dispatch(booksReceived({ items, totalItems }));
		} catch (error) {
			dispatch(booksRequestFailed(error));
		}
	};
export const loadMore =
	({ search, startIndex, maxResults, order }) =>
	async (dispatch) => {
		dispatch(booksPaginationRequest());
		try {
			const { items } = await httpService.get({
				search,
				startIndex,
				maxResults,
				order,
			});
			dispatch(booksPaginationReceived(items));
		} catch (error) {
			dispatch(booksPaginationRequestFailed());
		}
	};
export const sort = (sortQuery) => (dispatch) => {
	dispatch(orderByChanged(sortQuery));
};

export const getStartIndex = () => (state) => state.book.startIndex;
export const getMaxResults = () => (state) => state.book.maxResults;
export const getBooks = () => (state) => state.book.entities;
export const getSearchQuery = () => (state) => state.book.searchQuery;
export const getOrderQuery = () => (state) => state.book.orderBy;
export const getBookById = (id) => (state) =>
	state.book.entities.find((book) => book.id === id);


export default bookReducer;
