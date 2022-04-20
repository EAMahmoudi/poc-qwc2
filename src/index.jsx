import React from 'react';
import Index from './qwc2-demo-app/index';
import Qwc2 from  './qwc2-demo-app/js/app';

// eslint-disable-next-line new-cap

const CRA = () =>{
    return  (
        <div>
            <h1> Application CRA  </h1>
            <div>
                <Qwc2/>
            </div>
        </div>
    );
};

Index(CRA);
