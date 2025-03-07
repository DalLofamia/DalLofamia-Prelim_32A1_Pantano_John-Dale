import { createContext, useState } from "react";

// Create UserContext
export const UserContext = createContext();

export function UserProvider({ children }) {
  const [userName, setUserName] = useState("Dale Pantano");
  const [section, setSection] = useState("BSIT-32A1");
  const [year, setYear] = useState("3rd Year");

  return (
    <UserContext.Provider value={{ userName, setUserName, section, setSection, year, setYear }}>
      {children}
    </UserContext.Provider>
  );
}
