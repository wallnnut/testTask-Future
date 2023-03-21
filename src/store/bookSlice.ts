import {
	ECategoryBooks,
	ESortBooks,
	IBooksState,
	IRequest,
	IResultBooksRequest,
	IBook,
} from "types";
import { createSlice } from "@reduxjs/toolkit";
import httpService from "../services/http.service";
import type { PayloadAction } from "@reduxjs/toolkit";
const state: IBooksState = {
	entities: null,
	isLoading: false,
	error: null,
	dataLoaded: false,
	startIndex: 0,
	maxResults: 30,
	totalItems: 0,
	searchQuery: "",
	orderBy: ESortBooks.relevance,
	filterQuery: ECategoryBooks.all,
};

const bookSlice = createSlice({
	name: "book",
	initialState: state,
	reducers: {
		bookRequested: (state, action: PayloadAction<string>) => {
			state.isLoading = true;
			state.searchQuery = action.payload;
		},
		booksReceived: (state, action: PayloadAction<IResultBooksRequest>) => {
			state.isLoading = false;
			if (action.payload.books) {
				state.entities = action.payload.books;
				state.entities = state.entities.reduce(
					(arr, el) => (
						arr.find(({ id }) => el.id === id) || arr.push(el), arr
					),
					[]
				);
			} else {
				state.error = "Can`t find this book try another one";
			}
			state.totalItems = action.payload.totalBooks;
			state.startIndex = state.maxResults;
			state.dataLoaded = true;
		},
		booksRequestFailed: (state, action: PayloadAction<string>) => {
			state.error = action.payload;
			state.isLoading = false;
		},
		booksPaginationRequest: (state) => {
			state.isLoading = true;
			state.startIndex += state.maxResults;
		},
		booksPaginationReceived: (state, action: PayloadAction<IBook[]>) => {
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
		booksPaginationRequestFailed: (
			state,
			action: PayloadAction<string>
		) => {
			state.error = action.payload;
			state.isLoading = false;
		},
		orderByChanged: (state, action: PayloadAction<ESortBooks>) => {
			state.orderBy = action.payload;
		},
		filterChanged: (state, action: PayloadAction<ECategoryBooks>) => {
			state.filterQuery = action.payload;
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
	filterChanged,
} = actions;

export const loadBooks =
	({ search, startIndex, maxResults, order, filter }: IRequest) =>
	async (dispatch) => {
		if (search === "") {
			dispatch(booksRequestFailed("Type something in search field"));
		} else {
			dispatch(booksRequestFailed(null));

			dispatch(bookRequested(search));
			try {
				const { items, totalItems } = await httpService.get({
					search,
					startIndex,
					maxResults,
					order,
					filter,
				});
				console.log(items);
				const books: IBook[] = items
					? items.reduce(
							(prev, item) => [
								...prev,
								{
									...item.volumeInfo,
									id: item.id,
								},
							],
							[]
					  )
					: null;
				console.log(books);
				const totalBooks = totalItems;
				dispatch(booksReceived({ books, totalBooks }));
			} catch (error) {
				dispatch(booksRequestFailed(error));
			}
		}
	};
export const loadMore =
	({ search, startIndex, maxResults, order, filter }: IRequest) =>
	async (dispatch) => {
		dispatch(booksPaginationRequest());
		try {
			const { items } = await httpService.get({
				search,
				startIndex,
				maxResults,
				order,
				filter,
			});
			const books: IBook[] = items
				? items.reduce(
						(prev, item) => [
							...prev,
							{
								...item.volumeInfo,
								id: item.id,
							},
						],
						[]
				  )
				: null;
			dispatch(booksPaginationReceived(books));
		} catch (error) {
			dispatch(booksPaginationRequestFailed(error));
		}
	};

export const sort = (sortQuery: ESortBooks) => (dispatch) => {
	dispatch(orderByChanged(sortQuery));
};
export const filter = (filterQuery: ECategoryBooks) => (dispatch) => {
	dispatch(filterChanged(filterQuery));
};

export const getStartIndex =
	() =>
	(state): number =>
		state.book.startIndex;
export const getMaxResults =
	() =>
	(state): number =>
		state.book.maxResults;
export const getBooks =
	() =>
	(state): IBook[] =>
		state.book.entities;
export const getSearchQuery =
	() =>
	(state): string =>
		state.book.searchQuery;
export const getOrderQuery =
	() =>
	(state): ESortBooks =>
		state.book.orderBy;
export const getFilterQuery =
	() =>
	(state): ECategoryBooks =>
		state.book.filterQuery;
export const getTotalItems =
	() =>
	(state): number =>
		state.book.totalItems;
export const getLoadingStatus =
	() =>
	(state): boolean =>
		state.book.isLoading;
export const getErrors =
	() =>
	(state): string =>
		state.book.error;

export default bookReducer;
