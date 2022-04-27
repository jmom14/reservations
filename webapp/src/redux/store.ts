import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import authSlice from './authSlice';
import { watchAuthSaga } from './sagas/auth';

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];


export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(middleware),
});
sagaMiddleware.run(watchAuthSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch