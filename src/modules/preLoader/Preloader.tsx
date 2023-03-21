import React from "react";
import { Spinner } from "react-bootstrap";

const Preloader:React.FC<any> = ({ style }) => {
	return (
		<div className="d-flex justify-content-center">
			<Spinner animation="border" variant="dark" style={style} />;
		</div>
	);
};

export default Preloader;
