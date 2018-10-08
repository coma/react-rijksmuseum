import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import reducer from './reducer';
import saga from './saga';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(routerMiddleware(history), sagaMiddleware);
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f;
const composed = compose(middleware, devTools);
const create = composed(createStore);
const store = create(connectRouter(history)(reducer));

sagaMiddleware.run(saga);

export default store;
