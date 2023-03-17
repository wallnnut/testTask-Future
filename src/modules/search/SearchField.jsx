import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const SearchField = () => {
	return (
		<>
			<InputGroup className="mt-5 ">
				<Form.Control placeholder="Search" />
				<Button variant="secondary" id="button-addon2">
					<i class="bi bi-search"></i>
				</Button>
			</InputGroup>
		</>
	);
};

export default SearchField;
