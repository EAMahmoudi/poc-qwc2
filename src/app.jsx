/**
 * Copyright 2016-2021 Sourcepole AG
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import StandardApp from './qwc2-demo-app/qwc2/components/StandardApp';
import appConfig from './qwc2-demo-app/js/appConfig';


function App() {
    return (
        <StandardApp appConfig={appConfig}/>
    );
}

export default App;

