import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({children}) =>{
     
     return(
          <AppContext.Provider value={"Raghav"}>
               {children}
          </AppContext.Provider>
     )
}
export {AppContext,AppProvider}