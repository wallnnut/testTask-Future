import React from "react";
import { Badge, CardImg, Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import { getBookById } from "../../store/bookSlice";

const BookDetails = ({ id }) => {
	const book = useSelector(getBookById(id));
	return (
		<Stack direction="horizontal" gap={5}>
			<Card>
				<Card.Body>
					<Card.Img
						className="px-5 py-5"
						height="500px"
						src={book.volumeInfo.imageLinks?.thumbnail}
					/>
				</Card.Body>
			</Card>

			<div className="w-50">
				<h3>{book.volumeInfo.title}</h3>

				{book.volumeInfo?.categories.map((category) => (
					<Badge className="fs-5 mb-3">{category}</Badge>
				))}
				<p className="fs-4">
					Authors: <br />
					{book.volumeInfo.authors &&
						book.volumeInfo?.authors.map((author) => (
							<span
								key={author + book.id}
								style={{ marginRight: "5px" }}
							>
								{author};
							</span>
						))}
				</p>
				<p>{book.volumeInfo.description}</p>
			</div>
		</Stack>
	);
};

export default BookDetails;
