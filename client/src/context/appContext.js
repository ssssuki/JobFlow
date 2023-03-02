import React, { useReducer, useContext, useEffect, useState } from "react";

const initialState = {
  userLoading: true,
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext)
}

export {AppProvider, initialState, useAppContext}