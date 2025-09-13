import { createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "./language.model";

const initialState: IInitialState = {
	language: "en",
};

const languageSlice = createSlice({
	name: "language",
	initialState,
	reducers: {
		setLanguage(state, action) {
			state.language = action.payload;
		},
		resetFields() {
			return initialState;
		},
	},
});

export const { resetFields, setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
