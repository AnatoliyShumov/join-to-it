import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Routes from "./routers";
import configureStore from "./redux/store/configureStore";


const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes store={store} />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);


serviceWorker.unregister();
