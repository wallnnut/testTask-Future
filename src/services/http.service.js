import axios from "axios";
import configFile from "../config.json";
console.log(configFile.apiEndpoint);

const http = axios.create({
	baseURL: configFile.apiEndpoint,
});

const httpService = {
	get: async ({ search, startIndex, maxResults, order }) => {
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
		console.log(data);
		return data;
	},
};

export default httpService;
