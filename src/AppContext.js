import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export function useAppProvider() {
  return useContext(AppContext);
}

function GlobalContext({ children }) {
  const [currency, setCurrency] = useState('usd');
  const [symbol, setSymbol] = useState("$");
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (currency === "usd") setSymbol("$");
    else if (currency === "eur") setSymbol("€");
  }, [currency]);

  const contextValue = {
    currency,
    setCurrency,
    symbol,
    isDark,
    setIsDark,
    toggleDark: () => {
      localStorage.setItem('ThemeContext:isDark', String(!isDark));
      setIsDark(!isDark);
    },
  }

  useEffect(() => {
    const lsDark = JSON.parse(localStorage.getItem('ThemeContext:isDark'));
    if (lsDark !== undefined && lsDark !== null) {
      setIsDark(lsDark);
    }
  }, []);

  return (
    <AppContext.Provider value={contextValue}>
      {/* <div className={`${isDark ? "theme--dark" : " theme--light"}`} id="theme"> */}
      {children}
      {/* </div> */}

    </AppContext.Provider>
  )
}

export default GlobalContext;