import { ReactNode, useState } from "react";
import StoreDataContext, { StoreData } from "../contexts/AppContext";

// Define a type for the props, including children
interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [storeData, setStoreData] = useState<StoreData>({
    auth: { token: "" },
    todoList: [],
  });

  return (
    <StoreDataContext.Provider value={{ storeData, setStoreData }}>
      {children}
    </StoreDataContext.Provider>
  );
};

export default AppProvider;
