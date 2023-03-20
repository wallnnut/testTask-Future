import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { FormText, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getSearchQuery, loadBooks, sort } from "../../store/bookSlice";

const Sort = () => {
	const search = useSelector(getSearchQuery());
	const dispatch = useDispatch();
	const handleChange = ({ target }) => {
		dispatch(
			loadBooks({
				search,
				startIndex: 0,
				maxResults: 30,
				order: target.value,
			})
		);

		dispatch(sort(target.value));
	};
	return (
		<Form>
			<Stack direction="horizontal" gap={4}>
				<FormText className="fs-5 text-white">Sorting</FormText>
				<Form.Select onChange={handleChange} name="orderBy">
					<option value="relevance">Relevance</option>
					<option value="newest">Newest</option>
				</Form.Select>
			</Stack>
		</Form>
	);
};

export default Sort;
