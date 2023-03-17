import React from "react";
import { Col, Row } from "react-bootstrap";
import BookCard from "./components/BookCard";

const BooksList = () => {
	return (
		<Row>
			<Col>
				<BookCard />
			</Col>
			<Col>
				<BookCard />
			</Col>
			<Col>
				<BookCard />
			</Col>
			<Col>
				<BookCard />
			</Col>
		</Row>
	);
};

export default BooksList;
