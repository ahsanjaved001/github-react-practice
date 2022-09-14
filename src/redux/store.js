import { configureStore } from "@reduxjs/toolkit";
import gitHubSlice from "./GitHubSlice";

const store = configureStore({
    reducer: {
      gitHub: gitHubSlice,
    },
});

export default store;

