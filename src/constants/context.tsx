import { StoreData } from "../contexts/AppContext";

export const defaultContextValue: StoreData = {
  auth: { token: "" },
  todoList: [],
};
