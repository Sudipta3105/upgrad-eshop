import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";

import ProductCategory from "../productCategory/ProductCategory";
import ProductListing from "../productListing/ProductListing";
import ProductSorting from "../productSorting/ProductSorting";

import useAuthentication from "../../hooks/useAuthentication";

import {useContext} from "react";


const Home = () => {
	const {AuthCtx} = useAuthentication();
	const {hasRole} = useContext(AuthCtx);
	let mode = (hasRole(["ADMIN"])) ? "EDIT" : "VIEW";

	return (
		<Box sx={{flexGrow: 1}}>
			<Grid container spacing={1}>
				<Grid container item spacing={3}>
					<Grid item xs={12}>
						<div style={{display: 'flex', justifyContent: 'center'}}>
							<ProductCategory />
						</div>
					</Grid>
					<Grid item xs={12}>
						<div style={{display: 'flex', justifyContent: 'left', paddingLeft: "1%"}}>
							<ProductSorting />
						</div>
					</Grid>
					<ProductListing mode={mode}/>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Home;