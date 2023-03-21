export interface IBooksState {
	entities: IBook[] | null;
	isLoading: boolean;
	error: string | null;
	dataLoaded: boolean;
	startIndex: number;
	maxResults: number;
	totalItems: number;
	searchQuery: string;
	orderBy: ESortBooks;
	filterQuery: ECategoryBooks;
}
export interface IResultBooksRequest {
	totalBooks: number;
	books: IBook[];
}
export enum ECategoryBooks {
	all = "",
	art = "art",
	biography = "biography",
	computers = "computers",
	history = "history",
	medical = "medical",
	poetry = "poetry",
}

export interface IBook {
	id: string;
	title: string;
	authors: string[];
	publishedDate: string;
	industryIdentifiers: { type: string; identifier: string }[];
	readingModes: { text: boolean; image: boolean };
	printType: string;
	maturityRating: string;
	allowAnonLogging: boolean;
	contentVersion: string;
	panelizationSummary: {
		containsEpubBubbles: boolean;
		containsImageBubbles: boolean;
	};
	imageLinks: { smallThumbnail: string; thumbnail: string };
	language: string;
	previewLink: string;
	infoLink: string;
	canonicalVolumeLink: string;
	categories: string[];
	description: string;
}
export enum ESortBooks {
	relevance = "relevance",
	newest = "newest",
}

export interface IRequest {
	search: string;
	startIndex: number;
	maxResults: number;
	order: ESortBooks;
	filter?: ECategoryBooks;
}
