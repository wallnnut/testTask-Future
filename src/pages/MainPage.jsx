import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import BooksList from "../modules/booksList/BooksList";
import Filter from "../modules/filter/Filter";
import SearchField from "../modules/search/SearchField";
import Sort from "../modules/sort/Sort";
import "./main-page.css";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import ShowMore from "../modules/showMore/ShowMore";
import BookCount from "../modules/bookCount/BookCount";
import { useSelector } from "react-redux";
import { getBooks, getLoadingStatus } from "../store/bookSlice";
import Preloader from "../modules/preLoader/Preloader";

const MainPage = () => {
	const isLoading = useSelector(getLoadingStatus());
	const books = useSelector(getBooks());
	return (
		<ThemeProvider
			breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
			minBreakpoint="xxs"
		>
			<header>
				<Container fluid>
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
						<Stack
							direction="horizontal"
							className="justify-content-center"
							gap={4}
						>
							<Filter />
							<Sort />
						</Stack>
					</Row>
				</Container>
			</header>
			<main>
				<Container fluid="sm" className="mt-5">
					<Row>
						<Col className="mb-5" md={12} sm={12}>
							{isLoading ? <Preloader /> : <BookCount />}
						</Col>
						<Col md={12} sm={12} lg={12}>
							<BooksList />
						</Col>
					</Row>
				</Container>
			</main>
			<footer>
				<Container fluid="md">
					<Row className="d-flex justify-content-center">
						<Col sm={12} md={8}>
							{isLoading && books !== null ? (
								<Preloader />
							) : (
								<ShowMore />
							)}
						</Col>
					</Row>
				</Container>
			</footer>
		</ThemeProvider>
	);
};

export default MainPage;
