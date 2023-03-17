import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import BooksList from "../modules/booksList/BooksList";
import Filter from "../modules/filter/Filter";
import SearchField from "../modules/search/SearchField";
import Sort from "../modules/sort/Sort";
import "./main-page.css";

const MainPage = () => {
	return (
		<>
			<header>
				<Container fluid="lg">
					<Row className="justify-content-md-center">
						<Col className="mt-5" md="auto">
							<h1 className="fs-1">Search for Books</h1>
						</Col>
					</Row>
					<Row className="justify-content-md-center">
						<Col md={6}>
							<SearchField />
						</Col>
					</Row>
					<Row className="pb-5 mt-5 justify-content-md-center">
						<Col md={4}>
							<Filter />
						</Col>
						<Col md={4}>
							<Sort />
						</Col>
					</Row>
				</Container>
			</header>
			<main>
				<Container fluid="lg" className="mt-5">
					<Row>
						<Col>
							<BooksList />
						</Col>
					</Row>
				</Container>
			</main>
		</>
	);
};

export default MainPage;
