import { combineReducers } from "@reduxjs/toolkit";
import LanguageReducer from "./language/language.slice";

export const rootReducer = combineReducers({
	language: LanguageReducer,
});
