import React from "react";
import Card from "react-bootstrap/Card";
import { IBook } from "types";

interface IBookCard {
	book: IBook;
}
const BookCard: React.FC<IBookCard> = ({ book }) => {
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
					<Card.Img variant="top" src={book.imageLinks?.thumbnail} />
					<Card.Body className="overflow-auto">
						{book.categories && (
							<div className="fs-4 p-2 mb-3 bg-primary rounded text-light">
								{book.categories[0]}
							</div>
						)}

						<Card.Title className="mb-3">{book?.title}</Card.Title>
						{book.authors &&
							book.authors.map((author) => (
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
