import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from '../actions';

const initialState = {
	cards: [],
	savedCards: [],
	isFetching: false,
	error: ''
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case START_FETCHING:
			return {
				...state,
				isFetching: true,
				error: ''
			};
		case FETCH_SUCCESS:
			console.log('payload', action.payload);
			return {
				...state,
				isFetching: false,
				error: '',
				cards: action.payload
			};
		case FETCH_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default reducer;
