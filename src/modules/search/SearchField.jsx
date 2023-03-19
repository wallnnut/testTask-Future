import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useDispatch, useSelector } from "react-redux";
import {
	getMaxResults,
	getOrderQuery,
	getStartIndex,
	loadBooks,
} from "../../store/bookSlice";

const SearchField = () => {
	const [search, setSearch] = useState("");
	const startIndex = useSelector(getStartIndex());
	const maxResults = useSelector(getMaxResults());
	const order = useSelector(getOrderQuery());
	const dispatch = useDispatch();
	const handleChange = ({ target }) => {
		setSearch(target.value);
	};
	const handleSearch = (event) => {
		event.preventDefault();

		dispatch(loadBooks({ search, startIndex, maxResults, order }));
	};
	return (
		<Form>
			<InputGroup className="mt-5">
				<Form.Control
					value={search}
					onChange={handleChange}
					placeholder="Search"
				/>
				<Button
					type="submit"
					onClick={handleSearch}
					variant="secondary"
					id="button-addon2"
				>
					<i className="bi bi-search"></i>
				</Button>
			</InputGroup>
		</Form>
	);
};

export default SearchField;
