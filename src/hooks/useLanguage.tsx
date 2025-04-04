
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { en } from '../i18n/en';
import { tr } from '../i18n/tr';

type LanguageType = 'en' | 'tr';
type TranslationsType = typeof en;

interface LanguageContextType {
  language: LanguageType;
  setLanguage: (language: LanguageType) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<LanguageType>('en');
  const [translations, setTranslations] = useState<TranslationsType>(en);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as LanguageType;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    if (language === 'en') {
      setTranslations(en);
    } else {
      setTranslations(tr);
    }
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): any => {
    const keys = key.split('.');
    let value: any = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
