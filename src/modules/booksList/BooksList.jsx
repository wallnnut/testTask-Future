import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getBooks } from "../../store/bookSlice";
import BookCard from "./components/BookCard";
import { Link } from "react-router-dom";
const BooksList = () => {
	const books = useSelector(getBooks());
	return (
		<Row>
			{books &&
				books.map((book) => (
					<Col key={book.id} className="mb-5" md={6} lg={3}>
						<Link
							style={{
								textDecoration: "none",
							}}
							to={`/details/${book.id}`}
						>
							<BookCard book={book} />
						</Link>
					</Col>
				))}
		</Row>
	);
};

export default BooksList;
