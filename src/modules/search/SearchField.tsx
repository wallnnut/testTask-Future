import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useSelector } from "react-redux";
import { useAppDispatch } from "store/store";
import {
	getErrors,
	getMaxResults,
	getOrderQuery,
	getStartIndex,
	loadBooks,
} from "../../store/bookSlice";

const SearchField: React.FC = () => {
	const [search, setSearch] = useState("");
	const startIndex = useSelector(getStartIndex());
	const maxResults = useSelector(getMaxResults());
	const order = useSelector(getOrderQuery());
	const dispatch = useAppDispatch();
	const error = useSelector(getErrors());
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};
	const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		dispatch(loadBooks({ search, startIndex, maxResults, order }));
	};
	return (
		<Form>
			<InputGroup className="mt-5 mb-2">
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
			{error && <Alert variant="danger">{error}</Alert>}
		</Form>
	);
};

export default SearchField;
