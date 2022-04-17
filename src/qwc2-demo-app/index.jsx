/**
 * Copyright 2016-2021 Sourcepole AG
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from  './js/app';

const Index = (App2) => {
   return  ReactDOM.render(
                <App/>
        ,
        document.getElementById('demo')
    );
}

export  default Index
