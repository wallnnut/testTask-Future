import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getTotalItems } from "../../store/bookSlice";

const BookCount = () => {
	const count = useSelector(getTotalItems());
	return (
		<div className="d-flex justify-content-center">
			{count !== 0 ? (
				<Badge className="fs-4" bg="secondary">
					Found {count} results
				</Badge>
			) : null}
		</div>
	);
};

export default BookCount;
