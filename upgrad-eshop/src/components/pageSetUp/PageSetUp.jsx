import BroadcastMessage from "../broadcastMessage/BroadcastMessage";

import Container from '@mui/material/Container';

import ErrorPage from "../errorPage/ErrorPage";

import Footer from "../footer/Footer";

import Grid from '@mui/material/Grid';

import Home from "../home/Home";

import Login from "../login/Login";

import NavigationBar from "../navigationbar/NavigationBar";

import PlaceOrder from "../placeOrder/PlaceOrder";
import ProductDetails from "../productDetails/ProductDetails";
import ProtectedRoute from "../protectedRoute/ProtectedRoute";
import ProductPage from "../productPage/ProductPage";

import SignUp from "../signup/SignUp";

import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import {createProduct, modifyProduct} from "../../api/productAPIs";

const PageSetUp = () => {

	return (
		<Router>
			<NavigationBar />
			<Container maxWidth={false} sx={{marginBottom: "30px", marginTop: "85px"}}>
				<Grid container spacing={2} sx={{paddingTop: "24px"}}>
					<Routes>
						<Route
							path="/"
							element={
								<Navigate to="/home" />
							}
						/>
						<Route
							path="/home"
							element={
								<ProtectedRoute>
									<Home/>
								</ProtectedRoute>
							}
						/>
						<Route
							path="/login"
							element={
								<Login/>
							}
						/>
						<Route
							path="/signup"
							element={
								<SignUp/>
							}
						/>
						<Route
							path="/product/add"
							element={
								<ProtectedRoute role={["ADMIN"]}>
									<ProductPage
										mode={"CREATE"}
										buttonText="SAVE PRODUCT"
										headingText="Add Product"
										callbackFunction={createProduct}
									/>
								</ProtectedRoute>
							}
						/>
						<Route
							path="/product/modify"
							element={
								<ProtectedRoute role={["ADMIN"]}>
									<ProductPage
										mode={"MODIFY"}
										buttonText="MODIFY PRODUCT"
										headingText="Modify Product"
										callbackFunction={modifyProduct}
									/>
								</ProtectedRoute>
							}
						/>
						<Route
							path="/product/view"
							element={
								<ProtectedRoute >
									<ProductDetails	/>
								</ProtectedRoute>
							}
						/>
						<Route
							path="/product/order"
							element={
								<ProtectedRoute >
									<PlaceOrder	/>
								</ProtectedRoute>
							}
						/>
						<Route
							path="*"
							element={
								<ErrorPage />
							}
						/>
					</Routes>
				</Grid>
			</Container>
			<Footer />
			<BroadcastMessage />
		</Router>
	);
};

export default PageSetUp;