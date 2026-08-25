import { useEffect, useState } from "react";

const STORAGE_KEY = "lang";

// localStorage throws in private mode on some browsers, so every access is guarded.
const readStored = () => {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

const initialLanguage = () =>
  readStored() ??
  (navigator.language?.toLowerCase().startsWith("pt") ? "pt" : "en");

export const useLanguage = () => {
  const [language, setLanguage] = useState(initialLanguage);

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // choice just won't survive a reload
    }
  }, [language]);

  const toggleLanguage = () =>
    setLanguage((current) => (current === "en" ? "pt" : "en"));

  return { language, toggleLanguage };
};
