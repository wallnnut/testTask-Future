import React from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import {
	getMaxResults,
	getSearchQuyery,
	getStartIndex,
	loadMore,
} from "../../store/bookSlice";

const ShowMore = () => {
	const dispatch = useDispatch();
	const startIndex = useSelector(getStartIndex());
	const maxResults = useSelector(getMaxResults());
	const search = useSelector(getSearchQuyery());

	const handleLoad = () => {
		dispatch(loadMore({ search, startIndex, maxResults }));
	};
	return (
		<Button onClick={handleLoad} variant="secondary" size="lg">
			Показать еще
		</Button>
	);
};

export default ShowMore;
