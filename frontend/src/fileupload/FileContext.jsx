import { createContext, useContext, useState } from 'react';

const FileContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  const setUser = (id) => {
    setUserId(id);
  };

  return (
    <FileContext.Provider value={{ userId, setUser }}>
      {children}
    </FileContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(FileContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
