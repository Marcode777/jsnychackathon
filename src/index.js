console.log ("this message shows it's working");
let message = "this message also shows jsx is working";
console.log(message);

import React from 'react';
import {render} from 'react-dom';
import App from 'components/app';

render(<App/>, document.getElementById('app'));