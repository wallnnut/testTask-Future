import React from "react";
import { Badge, Col, Container, Row, Stack } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import { getBookById } from "../../store/bookSlice";
import Nav from "react-bootstrap/Nav";
import { Link, useNavigate } from "react-router-dom";

const BookDetails = ({ id }) => {
	const book = useSelector(getBookById(id));
	const navigate = useNavigate();
	return (
		<Container>
			<Row>
				<Link to={navigate(-1)} className="my-4">
					Go back
				</Link>

				<Col className="p-5 border bg-light" md={6}>
					<img
						width="80%"
						style={{ display: "block", margin: "0 auto" }}
						src={book.volumeInfo.imageLinks?.thumbnail}
						alt=""
					/>
				</Col>
				<Col className="p-5 " md={6}>
					{book.volumeInfo?.categories.map((category) => (
						<Badge className="fs-5 mb-3">{category}</Badge>
					))}
					<Card.Title className="fs-3 mb-2">
						{book.volumeInfo.title}
					</Card.Title>
					{book.volumeInfo?.authors.map((author) => (
						<Card.Text
							key={author + book.id}
							style={{ marginRight: "5px" }}
						>
							{author}
						</Card.Text>
					))}
					<hr />
					<Card.Text>
						<span className="fw-semibold fs-3 mb-2">Описание:</span>{" "}
						<br />
						{book.volumeInfo.description}
					</Card.Text>
				</Col>
			</Row>
		</Container>
	);
};

export default BookDetails;
{
	/* <Stack
			className="justify-content-around align-items-stretch"
			direction="horizontal"
			gap={2}
		>
			<Card>
				<Card.Body>
					<Card.Img
						className="px-5 py-5"
						style={{ minHeight: "500px" }}
						src={book.volumeInfo.imageLinks?.thumbnail}
					/>
				</Card.Body>
			</Card>

			
		</Stack> */
}

{
	/* <Container style={{ heigth: "100%" }}>
			<Row className="h-100">
				<Col className="h-100 w-50">
					<img
						style={{ heigth: "100%" }}
						src={book.volumeInfo.imageLinks?.thumbnail}
						alt=""
					/>
				</Col>
				<Col className="h-100 w-50">
					<div className="bg-light border p-4">
						<div className="fs-4 fw-semibold d-flex">
							<span className="me-2">Title:</span>
							<h3 className="fw-bold">{book.volumeInfo.title}</h3>
						</div>

						<div className="fs-4">
							<span className="me-2 fw-semibold">
								Categories:
							</span>
							{book.volumeInfo?.categories.map((category) => (
								<Badge className="fs-5 mb-3">{category}</Badge>
							))}
						</div>

						<p className="fs-4">
							<span className="me-2 fw-semibold">Authors:</span>
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
						<div className="fs-4  d-flex">
							<span className="me-2 fw-semibold">
								Description:
							</span>
							<span className="fs-5">
								{book.volumeInfo.description}
							</span>
						</div>
					</div>
				</Col>
			</Row>
		</Container> */
}