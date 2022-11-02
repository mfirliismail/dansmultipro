// example =====================================

// // Reducers
// import studentReducer from "./slices/studentSlice";
// import authReducer from "./slices/authSlice";
// import classReducer from "./slices/classSlice";

// // Dependencies
// import { configureStore } from "@reduxjs/toolkit";

// export const store = configureStore({
// 	reducer: {
// 		student: studentReducer,
// 		auth: authReducer,
// 		class: classReducer,
// 	},
// });

// example =====================================

// Reducers
// import studentReducer from "./slices/studentSlice";
import authReducer from "./slices/authSlices";
// import classReducer from "./slices/classSlice";

// Dependencies
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // student: studentReducer,
    job_list: [],
    // auth: authReducer,
    // class: classReducer,
  },
});
