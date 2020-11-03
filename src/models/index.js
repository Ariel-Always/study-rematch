import {init} from '@rematch/core';

import {count} from './count';

import thunk from 'redux-thunk';
import immerPlugin from '@rematch/immer';
import selectPlugin from '@rematch/select';
import createLoadingPlugin from '@rematch/loading';
import { createLogger } from 'redux-logger';


const middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(createLogger())
}

const store = init({

    models:{

        count

    },

    plugins: [immerPlugin(), createLoadingPlugin(), selectPlugin()],

    middlewares:middlewares

});

export default store;