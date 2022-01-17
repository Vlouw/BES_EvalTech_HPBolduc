import React from 'react';
import { render } from 'react-dom';
import Router from './components/Router';

import './css/normalize.css';
import './css/index.css';
import './css/map.css';

render(<Router/>, document.querySelector('#main'));