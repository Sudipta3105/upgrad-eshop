import MenuItem from "@mui/material/MenuItem";

import {connect} from "react-redux";

import {FormControl, InputLabel, Select} from "@mui/material";

import {setSortBy} from "../../store/actions/metadataAction";

import {useState} from "react";



const ProductSorting = ({selectedSortBy, saveSortBy}) => {

	const [sortBy, setSortBy] = useState(selectedSortBy);
	const handleChange = (event) => {
		setSortBy(event.target.value);
		saveSortBy(event.target.value);
	};

	const options = [
		{
			label: "Default",
			value: "DEFAULT",
		},
		{
			label: "Price high to low",
			value: "PRICE_DESC",
		},
		{
			label: "Price low to high",
			value: "PRICE_ASC",
		},
		{
			label: "Newest",
			value: "NEWEST",
		},
	];

	return (
		<FormControl sx={{ m: 1, minWidth: 240 }} size={"small"}>
			<InputLabel id="demo-simple-select-label">Sort By</InputLabel>
			<Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				value={sortBy}
				label="Sort By"
				onChange={handleChange}
			>
				{options.map((element, index) => {
					return (
						<MenuItem
							key={"sortBy_" + index}
							value={element.value}
						>
							{element.label}
						</MenuItem>
					);
				})}
			</Select>
		</FormControl>
	);
};

const mapStateToProps = (state) => {
	return {
		selectedSortBy: state.metadata.selectedSortBy,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		saveSortBy: (sortBy) => dispatch(setSortBy(sortBy)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductSorting);