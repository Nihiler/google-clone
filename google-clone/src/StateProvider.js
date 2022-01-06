import React, {createContext, useContext, useReducer} from "react";

export const StateContext = createContext(); //Preparing DataLayer

export const StateProvider =({reducer, initialState, children}) => (
<StateContext.Provider value ={useReducer(reducer,initialState)}>
{children}
</StateContext.Provider>

);

//Hook which allow us to pull information from the datalayer
export const useStateValue = () => useContext(StateContext);