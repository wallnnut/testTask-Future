import React from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import {
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

	const handleLoad = () => {
		dispatch(loadMore({ search, startIndex, maxResults, order }));
	};
	return (
		<Button onClick={handleLoad} variant="secondary" size="lg">
			Show more
		</Button>
	);
};

export default ShowMore;
