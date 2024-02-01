import { createContext, useContext, useState } from "react";

const contextApp = createContext();

export const useContextApp = () => useContext(contextApp);

export const ContextProvider = ({ children }) => {
  const [listTodo, setListTodo] = useState([]);
  const [modifyItem, setModifyItem] = useState(null);
  const [listUsers, setListUsers] = useState([]);
  return (
    <contextApp.Provider
      value={{
        listTodo,
        setListTodo,
        listUsers,
        setListUsers,
        modifyItem,
        setModifyItem,
      }}
    >
      {children}
    </contextApp.Provider>
  );
};
