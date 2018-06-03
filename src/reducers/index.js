import { combineReducers } from 'redux';
import FruitsList from '../components/FruitsList';

const rootReducers = combineReducers({
    gifs: FruitsList
});