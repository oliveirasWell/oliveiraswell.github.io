import { useEffect, useState } from "react";

const STORAGE_KEY = "lang";

// Render order of the switcher. `name` is the endonym, so it works as the
// accessible label whatever language the page is currently in.
export const languages = [
  { code: "en", label: "EN", htmlLang: "en", name: "English" },
  { code: "pt", label: "PT", htmlLang: "pt-BR", name: "Português" },
  { code: "es", label: "ES", htmlLang: "es", name: "Español" },
  { code: "fr", label: "FR", htmlLang: "fr", name: "Français" },
];

const codes = languages.map((language) => language.code);

// localStorage throws in private mode on some browsers, so every access is guarded.
const readStored = () => {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

// English is the default; the browser locale is deliberately ignored. An
// unknown stored value falls back rather than rendering an undefined page -
// which is what a value left over from an older build would otherwise do.
const initialLanguage = () => {
  const stored = readStored();

  return codes.includes(stored) ? stored : "en";
};

export const useLanguage = () => {
  const [language, setLanguage] = useState(initialLanguage);

  useEffect(() => {
    document.documentElement.lang = languages.find(
      (entry) => entry.code === language,
    ).htmlLang;

    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // choice just won't survive a reload
    }
  }, [language]);

  return { language, setLanguage };
};
