import { IRequest } from "./../types/index";
import axios from "axios";
import configFile from "../config.json";

const http = axios.create({
	baseURL: configFile.apiEndpoint,
	params: {
		key: process.env.REACT_APP_BOOKS_API_KEY,
	},
});

const httpService = {
	get: async ({
		search,
		startIndex,
		maxResults,
		order,
		filter,
	}: IRequest) => {
		if (filter) {
			const { data } = await http.get(
				"?q=" +
					search +
					"+subject:" +
					filter +
					"&orderBy=" +
					order +
					"&startIndex=" +
					startIndex +
					"&maxResults=" +
					maxResults
			);
			return data;
		} else {
			const { data } = await http.get(
				"?q=" +
					search +
					"&orderBy=" +
					order +
					"&startIndex=" +
					startIndex +
					"&maxResults=" +
					maxResults
			);
			return data;
		}
	},
	getById: async (id: string) => {
		const { data } = await http.get(id);
		return data;
	},
};

export default httpService;
