import {combineReducers} from "redux";

import metadataReducer from "./metadataReducer";

export default combineReducers({
	metadata: metadataReducer,
});