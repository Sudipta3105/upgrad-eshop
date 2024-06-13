import './App.css';

import PageSetUp from "./components/pageSetUp/PageSetUp";
import useAuthentication from "./hooks/useAuthentication";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import {initCatalog} from "./store/actions/metadataAction";

import {useDispatch} from "react-redux";
import {useCallback, useContext, useEffect} from "react";


const theme = createTheme({
	palette: {
		primary: {
			main: '#3f51b5',
		},
		secondary: {
			main: '#f50057',
		},
		disabled: {
			main: "#56595c",
		}
	},
});

function App() {

	const {AuthCtx} = useAuthentication();
	const {accessToken} = useContext(AuthCtx);
	const dispatch = useDispatch();

	const initPageData = useCallback(() => {
		dispatch(initCatalog(accessToken));
	}, [dispatch, accessToken]);

	useEffect(() => {
		initPageData();
	}, [initPageData]);

	return (
		<ThemeProvider theme={theme}>
			<PageSetUp />
		</ThemeProvider>
	);
}

export default App;