import React from "react";
import Form from "react-bootstrap/Form";
import { FormText, Stack } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getSearchQuery, loadBooks, sort } from "../../store/bookSlice";
import { useAppDispatch } from "store/store";
import { ESortBooks } from "types";

const Sort: React.FC = () => {
	const search = useSelector(getSearchQuery());
	const dispatch = useAppDispatch();
	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		if (search !== "") {
			dispatch(
				loadBooks({
					search,
					startIndex: 0,
					maxResults: 30,
					order: ESortBooks[e.target.value],
				})
			);
		}
		dispatch(sort(ESortBooks[e.target.value]));
	};
	return (
		<Form>
			<Stack direction="horizontal" gap={4}>
				<FormText className="fs-5 text-white">Sorting</FormText>
				<Form.Select onChange={handleChange} name="orderBy">
					<option value={ESortBooks.relevance}>Relevance</option>
					<option value={ESortBooks.newest}>Newest</option>
				</Form.Select>
			</Stack>
		</Form>
	);
};

export default Sort;
