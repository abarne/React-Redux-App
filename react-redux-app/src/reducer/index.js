import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from '../actions';

const initialState = {
	cards: [],
	savedCards: [],
	isFetching: false,
	error: ''
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default reducer;
