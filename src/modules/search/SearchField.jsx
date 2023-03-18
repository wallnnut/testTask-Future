import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useDispatch, useSelector } from "react-redux";
import { getMaxResults, getStartIndex, loadBooks } from "../../store/bookSlice";

const SearchField = () => {
	const [search, setSearch] = useState("");
	const startIndex = useSelector(getStartIndex());
	const maxResults = useSelector(getMaxResults());
	const dispatch = useDispatch();
	const handleChange = ({ target }) => {
		setSearch(target.value);
	};
	const handleSearch = () => {
		dispatch(loadBooks({ search, startIndex, maxResults }));
	};
	return (
		<>
			<InputGroup className="mt-5 ">
				<Form.Control
					value={search}
					onChange={handleChange}
					placeholder="Search"
				/>
				<Button
					onClick={handleSearch}
					variant="secondary"
					id="button-addon2"
				>
					<i className="bi bi-search"></i>
				</Button>
			</InputGroup>
		</>
	);
};

export default SearchField;
