let initialState = {
    categories: [],
    products: [],
	selectedCategory: null,
	selectedSortBy: "DEFAULT",
};

const actionReducer = (state = initialState, action) => {
	let data;
	switch (action.type) {
        case "CLEAR_FILTER": {
			data = {
				...state,
				selectedCategory: null,
			};
			break;
		}

        case "CLEAR_ALL": {
			data = initialState;
			break;
		}

        case "INIT_CATALOG": {
			data = {
				...state,
				categories: action.categories,
				products: action.products,
			};
			break;
		}

		case "SET_FILTER": {
			data = {
				...state,
				selectedCategory: action.category,
			};
			break;
		}
		
		case "SET_SORTING": {
			data = {
				...state,
				selectedSortBy: action.sortBy,
			};
			break;
		}
		
		
		default: {
			data = state;
		}
	}
	localStorage.setItem("ecommerce_upgrad_metadata", JSON.stringify(data));
	return data;
};

export default actionReducer;