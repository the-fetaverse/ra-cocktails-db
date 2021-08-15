import React, { useContext } from 'react';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value='hello'>{children}</AppContext.Provider>;
};

export const useGlobalState = () => {
  useContext(AppContext);
};

export { AppContext, AppProvider };