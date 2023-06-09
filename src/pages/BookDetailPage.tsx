import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import BookDetails from "../modules/bookDetails/BookDetails";

const BookDetailPage: React.FC = () => {
	const { id } = useParams();

	return (
		<>
			<Container className="mt-3" fluid>
				<Row>
					<Col>
						<BookDetails id={id} />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default BookDetailPage;
