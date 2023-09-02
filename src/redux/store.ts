import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import topicsReducer from "./reducers/topicsSlice.ts";
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: { topicsReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
export type RootState = ReturnType<typeof store.getState>;
