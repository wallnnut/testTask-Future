import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import BooksList from "../modules/booksList/BooksList";
import Filter from "../modules/filter/Filter";
import SearchField from "../modules/search/SearchField";
import Sort from "../modules/sort/Sort";
import "./main-page.css";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import ShowMore from "../modules/showMore/ShowMore";

const MainPage = () => {
	return (
		<ThemeProvider
			breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
			minBreakpoint="xxs"
		>
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
				<Container fluid="sm" className="mt-5">
					<Row>
						<Col md={12} sm={12}>
							<BooksList />
						</Col>
					</Row>
				</Container>
			</main>
			<footer>
				<Container fluid="md">
					<Row>
						<Col sm={12} md={8}>
							<ShowMore />
						</Col>
					</Row>
				</Container>
			</footer>
		</ThemeProvider>
	);
};

export default MainPage;
