import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DataSet from './DataSet';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(<DataSet />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/*DataSet is Meteorite Landing DataSet found at
 https://data.nasa.gov/Space-Science/Meteorite-Landings/gh4g-9sfh*/