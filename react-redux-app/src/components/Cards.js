import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCards } from '../actions';

import Card from './Card';

const Cards = (props) => {
	useEffect(() => {
		props.fetchCards();
	}, []);

	if (props.isFetching) {
		//@todo...look up react-loader-spinner
		return <h2>Loading Cards...</h2>;
	}

	console.log('cards in props', props.cards);

	return (
		<div className="cards">
			{props.error && <p>{props.error}</p>}
			{props.cards.filter((card) => card.imageUrl).map((card) => <Card key={card.id} card={card} />)}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		cards: state.cards,
		isFetching: state.isFetching,
		error: state.error
	};
};

export default connect(mapStateToProps, { fetchCards })(Cards);

// {props.cards.map((card) => (
//     <Card key={card.id} card={card} />))
// }
