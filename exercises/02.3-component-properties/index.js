import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const BootstrapCard = props => {
	// 1) replace the hard-coded image, description, link, etc. With their property variable.
	return (
		<div className="card m-5">
			<img className="card-img-top" src={props.image} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a href={props.link} className="btn btn-primary">
					{"Click Here"}
				</a>
			</div>
		</div>
	);
};
BootstrapCard.propTypes = {
	title: PropTypes.string,
	image: PropTypes.string,
	description: PropTypes.string,
	link: PropTypes.string
	// 2) add here the new properties into the proptypes object
};

// 3) Use ReactDOM to add the component into then DOM element #myDiv
ReactDOM.render(
	<>
		<BootstrapCard
			title="Test"
			image="https://www.rollingstone.com/wp-content/uploads/2018/06/rs-240736-GettyImages-91150536.jpg?resize=900,600&w=450"
			description="Lorem"
			link="http://google.com"
		/>
		,
		<BootstrapCard
			title="lllll"
			image="https://www.rollingstone.com/wp-content/uploads/2018/06/rs-179896-104410114-974d3d60-7905-485a-8935-54fb0bf8ae8f.jpg?resize=900,600&w=450"
			description="Lorfaskjfhdakjadhgkjdgahkdem"
			link="http://google.com"
		/>
	</>,
	document.querySelector("#myDiv")
);
