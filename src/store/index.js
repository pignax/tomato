import { createStore, applyMiddleware, compose } from 'redux'
import persistReduce from './reducers'
import thunk from 'redux-thunk'
import { persistStore } from "redux-persist";

export const store = createStore(persistReduce, compose(
    applyMiddleware(thunk)
  ))

export const persistor = persistStore(store);
