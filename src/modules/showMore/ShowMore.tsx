import React from "react";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { useAppDispatch } from "store/store";
import {
	getBooks,
	getMaxResults,
	getOrderQuery,
	getSearchQuery,
	getStartIndex,
	getTotalItems,
	loadMore,
} from "../../store/bookSlice";

const ShowMore: React.FC = () => {
	const dispatch = useAppDispatch();
	const startIndex = useSelector(getStartIndex());
	const maxResults = useSelector(getMaxResults());
	const search = useSelector(getSearchQuery());
	const order = useSelector(getOrderQuery());
	const books = useSelector(getBooks());
	const totalItems = useSelector(getTotalItems());
	const disabled = books && books.length >= totalItems;

	const handleLoad = () => {
		dispatch(loadMore({ search, startIndex, maxResults, order }));
	};
	return (
		<div className="d-flex justify-content-center">
			{books !== null ? (
				<Button
					disabled={disabled}
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
