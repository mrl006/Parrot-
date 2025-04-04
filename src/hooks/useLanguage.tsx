
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
    // Load saved language preference from localStorage on initial mount
    const savedLanguage = localStorage.getItem('language') as LanguageType;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'tr')) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    // Update translations when language changes
    if (language === 'en') {
      setTranslations(en);
    } else if (language === 'tr') {
      setTranslations(tr);
    }
    
    // Save language preference to localStorage
    localStorage.setItem('language', language);
    
    // Force re-render by updating the document language attribute
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const t = (key: string): any => {
    if (!key) return '';
    
    const keys = key.split('.');
    let value: any = translations;
    
    try {
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k];
        } else {
          console.warn(`Translation key not found: ${key}`);
          return key;
        }
      }
      
      return value;
    } catch (error) {
      console.error(`Error accessing translation for key: ${key}`, error);
      return key;
    }
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
