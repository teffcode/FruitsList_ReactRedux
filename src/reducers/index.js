import { combineReducers } from 'redux';

import fruits from './fruits';

const rootReducers = combineReducers({
    fruits: fruits
});

export default rootReducers;