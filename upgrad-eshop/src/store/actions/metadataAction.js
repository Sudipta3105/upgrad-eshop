import {fetchAllCategories} from "../../api/categoryAPIs";
import {fetchAllProducts} from "../../api/productAPIs";


export const clearAllMetadata = () => {
	return {
		type: "CLEAR_ALL",
	}
};


export const clearFilter = () => {
	return {
		type: "CLEAR_FILTER",
	}
};


export const initCatalog = (accessToken) => dispatch => {
	Promise.all([fetchAllCategories(accessToken), fetchAllProducts(accessToken)]).then(json => {
		dispatch({
			type: "INIT_CATALOG",
			categories: json[0].data,
			products: json[1].data,
		});
	}).catch(() => {
		dispatch({
			type: "INIT_CATALOG",
			categories: ["ALL"],
			products: [],
		});
	});
};


export const setSortBy = (sortBy) => {
	return {
		type: "SET_SORTING",
		sortBy: sortBy,
	}
};


export const setFilter = (category) => {
	return {
		type: "SET_FILTER",
		category: category,
	}
};



