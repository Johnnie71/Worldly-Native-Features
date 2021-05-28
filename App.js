import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import PlacesNavigator from './navigation/PlacesNavigator';

export default function App() {

  return (

    <PlacesNavigator />
    
  )
}

