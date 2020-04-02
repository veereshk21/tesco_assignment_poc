import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import reducers from '../client/reducers/index';

export default (req) => {
    const axiosInstance = axios.create({
        baseURL: 'https://hn.algolia.com/api/v1/',
        //headers: { cookie: req.get('cookie') || '' }
    });
    
    return createStore(reducers, {}, applyMiddleware(thunk.withExtraArgument(axiosInstance)));
};