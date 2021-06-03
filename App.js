import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import PlacesNavigator from './navigation/PlacesNavigator';
import placesReducer from './store/places-reducer';

const rootReducer = combineReducers({
  places: placesReducer
});

const store = createStore()

export default function App() {

  return (

    <PlacesNavigator />
    
  )
}

