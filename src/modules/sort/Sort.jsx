import React from "react";
import Form from "react-bootstrap/Form";
import { FormText, Stack } from "react-bootstrap";

const Sort = () => {
	return (
		<Form>
			<Stack direction="horizontal" gap={4}>
				<FormText className="fs-5 text-white">Sorting</FormText>
				<Form.Select>
					<option>Relevance</option>
					<option value="1">Newest</option>
				</Form.Select>
			</Stack>
		</Form>
	);
};

export default Sort;
