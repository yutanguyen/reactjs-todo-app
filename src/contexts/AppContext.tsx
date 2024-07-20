import { createContext } from "react";
import { defaultContextValue } from "../constants/context";
import { Auth } from "../interfaces/auth.interface";
import { Todo } from "../interfaces/todo.interface";

export interface StoreData {
  auth: Auth;
  todoList: Todo[];
}

export interface StoreDataContextType {
  storeData: StoreData;
  setStoreData: React.Dispatch<React.SetStateAction<StoreData>>;
}

const StoreDataContext = createContext<StoreDataContextType>({
  storeData: defaultContextValue,
  setStoreData: () => {},
});

export default StoreDataContext;
