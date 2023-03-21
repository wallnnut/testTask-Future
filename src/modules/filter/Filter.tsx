import React from "react";
import { FormText, Stack } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import { useAppDispatch } from "store/store";
import { ECategoryBooks } from "types";
import {
	filter,
	getOrderQuery,
	getSearchQuery,
	loadBooks,
} from "../../store/bookSlice";

const Filter: React.FC = () => {
	const search = useSelector(getSearchQuery());
	const order = useSelector(getOrderQuery());
	const dispatch = useAppDispatch();
	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		if (search !== "") {
			dispatch(
				loadBooks({
					search,
					startIndex: 0,
					maxResults: 30,
					order,
					filter: ECategoryBooks[e.target.value],
				})
			);
		}

		dispatch(filter(ECategoryBooks[e.target.value]));
	};
	return (
		<Form>
			<Stack direction="horizontal" gap={4}>
				<FormText className="fs-5 text-white">Categories</FormText>
				<Form.Select onChange={handleChange} name="categoryFilter">
					<option value={ECategoryBooks.all}>All</option>
					<option value={ECategoryBooks.art}>Art</option>
					<option value={ECategoryBooks.biography}>Biography</option>
					<option value={ECategoryBooks.computers}>Computers</option>
					<option value={ECategoryBooks.history}>History</option>
					<option value={ECategoryBooks.medical}>Medical</option>
					<option value={ECategoryBooks.poetry}>Poetry</option>
				</Form.Select>
			</Stack>
		</Form>
	);
};

export default Filter;
