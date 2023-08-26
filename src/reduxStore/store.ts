// Import necessary modules
import { configureStore } from "@reduxjs/toolkit"; // Importing Redux Toolkit's store configuration function
import contactReducer from "../features/contact/contactSlice"; // Importing the contactReducer from the specified path

// Create and configure the Redux store
export const store = configureStore({
    reducer: contactReducer, // Set the reducer for the store to the contactReducer
});