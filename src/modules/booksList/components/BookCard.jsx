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
						color: "#000",
					}}
				>
					<Card.Img
						variant="top"
						src={book.volumeInfo.imageLinks?.thumbnail}
					/>
					<Card.Body className="overflow-auto">
						{book.volumeInfo.categories && (
							<div className="fs-4 p-2 mb-3 bg-primary rounded text-light">
								{book.volumeInfo?.categories[0]}
							</div>
						)}

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
