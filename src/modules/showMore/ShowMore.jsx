import React from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import {
	getBooks,
	getMaxResults,
	getOrderQuery,
	getSearchQuery,
	getStartIndex,
	loadMore,
} from "../../store/bookSlice";

const ShowMore = () => {
	const dispatch = useDispatch();
	const startIndex = useSelector(getStartIndex());
	const maxResults = useSelector(getMaxResults());
	const search = useSelector(getSearchQuery());
	const order = useSelector(getOrderQuery());
	const books = useSelector(getBooks());

	const handleLoad = () => {
		dispatch(loadMore({ search, startIndex, maxResults, order }));
	};
	return (
		<div className="d-flex justify-content-center">
			{books !== null ? (
				<Button
					className="fs-4 text-center"
					onClick={handleLoad}
					variant="secondary"
					size="lg"
				>
					Show more
				</Button>
			) : null}
		</div>
	);
};

export default ShowMore;
