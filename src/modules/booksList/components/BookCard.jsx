import React from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

const BookCard = ({ book }) => {
	return (
		<>
			{book && (
				<Card
					bg="light"
					body
					style={{
						height: "100%",
					}}
				>
					<Card.Img
						variant="top"
						src={book.volumeInfo.imageLinks?.thumbnail}
					/>
					<Card.Body>
						<Badge className="fs-5 mb-3">
							{book.volumeInfo.categories &&
								book.volumeInfo?.categories[0]}
						</Badge>
						<Card.Title className="mb-3">
							{book.volumeInfo?.title}
						</Card.Title>
						{book.volumeInfo.authors &&
							book.volumeInfo?.authors.map((author) => (
								<span
									key={author + book.id}
									style={{ marginRight: "5px" }}
								>
									{author};
								</span>
							))}
					</Card.Body>
				</Card>
			)}
		</>
	);
};

export default BookCard;
