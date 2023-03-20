import axios from "axios";
import configFile from "../config.json";

const http = axios.create({
	baseURL: configFile.apiEndpoint,
});

const httpService = {
	get: async ({ search, startIndex, maxResults, order, filter }) => {
		if (filter) {
			const { data } = await http.get(
				search +
					"+subject:" +
					filter +
					"&orderBy=" +
					order +
					"&startIndex=" +
					startIndex +
					"&maxResults=" +
					maxResults +
					"&key=" +
					process.env.REACT_APP_BOOKS_API_KEY
			);
			return data;
		} else {
		}
		const { data } = await http.get(
			search +
				"&orderBy=" +
				order +
				"&startIndex=" +
				startIndex +
				"&maxResults=" +
				maxResults +
				"&key=" +
				process.env.REACT_APP_BOOKS_API_KEY
		);
		return data;
	},
};

export default httpService;
