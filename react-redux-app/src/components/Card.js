import React from 'react';

const Card = (props) => {
	return (
		<div className="card">
			{props.card.imageUrl && (
				<img src={props.card.imageUrl} alt="Magic the gathering card" width="300" height="500" />
			)}
		</div>
	);
};

export default Card;
