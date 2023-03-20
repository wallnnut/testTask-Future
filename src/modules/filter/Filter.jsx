import React from "react";
import { FormText, Stack } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import {
	filter,
	getOrderQuery,
	getSearchQuery,
	loadBooks,
} from "../../store/bookSlice";

const Filter = () => {
	const search = useSelector(getSearchQuery());
	const order = useSelector(getOrderQuery());
	const dispatch = useDispatch();
	const handleChange = ({ target }) => {
		dispatch(
			loadBooks({
				search,
				startIndex: 0,
				maxResults: 30,
				order,
				filter: target.value,
			})
		);
		dispatch(filter(target.value));
	};
	return (
		<Form>
			<Stack direction="horizontal" gap={4}>
				<FormText className="fs-5 text-white">Categories</FormText>
				<Form.Select onChange={handleChange} name="categoryFilter">
					<option value="">All</option>
					<option value="art">Art</option>
					<option value="biography">Biography</option>
					<option value="computers">Computers</option>
					<option value="history">History</option>
					<option value="medical">Medical</option>
					<option value="poetry">Poetry</option>
				</Form.Select>
			</Stack>
		</Form>
	);
};

export default Filter;
