// components/LanguageContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [userLanguage, setUserLanguage] = useState("en");

  useEffect(() => {
    const browserLanguage = navigator.language || navigator.userLanguage || "en";

    // 检测浏览器语言并设置对应的语言代码
    if (browserLanguage.startsWith("zh")) {
      setUserLanguage("zh");
    } else if (browserLanguage.startsWith("ja")) {
      setUserLanguage("ja");
    } else {
      setUserLanguage("en");
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ userLanguage, setUserLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};