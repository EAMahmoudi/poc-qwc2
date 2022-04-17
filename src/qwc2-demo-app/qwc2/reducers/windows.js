/**
 * Copyright 2020-2021 Sourcepole AG
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
    SHOW_IFRAME_DIALOG,
    SHOW_NOTIFICATION,
    CLOSE_WINDOW,
    CLOSE_ALL_WINDOWS,
    REGISTER_WINDOW,
    UNREGISTER_WINDOW,
    RAISE_WINDOW
} from '../actions/windows';

const defaultState = {
    stacking: [],
    entries: {}
};

export default function windows(state = defaultState, action) {
    switch (action.type) {
    case SHOW_IFRAME_DIALOG: {
        return {
            ...state,
            entries: {
                ...state.entries,
                [action.name]: {type: 'iframedialog', url: action.url, options: action.options || {}}
            }
        };
    }
    case SHOW_NOTIFICATION: {
        return {
            ...state,
            entries: {
                ...state.entries,
                [action.name]: {type: 'notification', text: action.text}
            }
        };
    }
    case CLOSE_WINDOW: {
        const newState = {
            ...state,
            entries: {...state.entries}
        };
        delete newState.entries[action.name];
        return newState;
    }
    case CLOSE_ALL_WINDOWS: {
        return {
            ...state,
            entries: {}
        };
    }
    case REGISTER_WINDOW: {
        return {
            ...state,
            stacking: [...state.stacking, action.id]
        };
    }
    case UNREGISTER_WINDOW: {
        return {
            ...state,
            stacking: state.stacking.filter(x => x !== action.id)
        };
    }
    case RAISE_WINDOW: {
        return {
            ...state,
            stacking: [...state.stacking.filter(x => x !== action.id), action.id]
        };
    }
    default:
        return state;
    }
}
