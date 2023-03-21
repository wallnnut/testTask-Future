import React, { useEffect, useState } from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import httpService from "../../services/http.service";
import Preloader from "../preLoader/Preloader";
import { IBook } from "types";
interface IBookDetails {
	id: string;
}

const BookDetails: React.FC<IBookDetails> = ({ id }) => {
	const [book, setBook] = useState<IBook>();
	const navigate = useNavigate();
	useEffect(() => {
		getBookById();
	}, []);
	const getBookById = async () => {
		try {
			const { volumeInfo } = await httpService.getById(id);
			setBook(volumeInfo);
		} catch (error) {}
	};
	return (
		<Container>
			{book ? (
				<Row>
					<p
						onClick={() => {
							navigate(-1);
						}}
						className="my-4"
						style={{ cursor: "pointer", color: "#50b0e1" }}
					>
						Go back
					</p>

					<Col className="p-5 border bg-light" md={6}>
						<img
							width="80%"
							style={{ display: "block", margin: "0 auto" }}
							src={book.imageLinks.thumbnail}
							alt="bookImage"
						/>
					</Col>
					<Col className="p-5 " md={6}>
						{book.categories &&
							book?.categories.map((category) => (
								<Badge
									key={book.id + category}
									className="fs-5 mb-3"
								>
									{category}
								</Badge>
							))}
						{book.title && (
							<Card.Title className="fs-3 mb-2">
								{book.title}
							</Card.Title>
						)}

						{book.authors &&
							book.authors.map((author) => (
								<Card.Text
									key={author + book.id}
									style={{ marginRight: "5px" }}
								>
									{author}
								</Card.Text>
							))}
						<hr />
						<Card.Text>
							<span className="fw-semibold fs-3 mb-2">
								Описание:
							</span>
							<br />
							{book.description}
						</Card.Text>
					</Col>
				</Row>
			) : (
				<Preloader
					style={{
						position: "absolute",
						top: "0",
						left: "0",
						right: "0",
						bottom: "0",
						margin: "auto",
					}}
				/>
			)}
		</Container>
	);
};

export default BookDetails;
