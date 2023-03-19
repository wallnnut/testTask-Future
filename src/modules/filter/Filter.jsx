import React, { useState } from "react";
import { FormText, Stack } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const Filter = () => {
	const [filter, setFilter] = useState({
		orderBy: "",
	});
	const handleChange = ({ target }) => {
		setFilter((prevState) => ({
			...prevState,
			[target.name]: target.value,
		}));
	};
	return (
		<Form>
			<Stack direction="horizontal" gap={4}>
				<FormText className="fs-5 text-white">Categories</FormText>
				<Form.Select>
					<option>All</option>
					<option>Art</option>
					<option>Biography</option>
					<option>Computers</option>
					<option>History</option>
					<option>Medical</option>
					<option>Poetry</option>
				</Form.Select>
			</Stack>
		</Form>
	);
};

export default Filter;
