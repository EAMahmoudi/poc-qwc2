/**
 * Copyright 2016-2021 Sourcepole AG
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import ReactDOM from 'react-dom';

const Index = (CRA) => {
   return  ReactDOM.render(
                <CRA/>
        ,
        document.getElementById('root')
    );
}

export default Index
