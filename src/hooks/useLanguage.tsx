
import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback, useMemo } from 'react';
import { en } from '../i18n/en';
import { tr } from '../i18n/tr';

type LanguageType = 'en' | 'tr';
type TranslationsType = typeof en;

interface LanguageContextType {
  language: LanguageType;
  setLanguage: (language: LanguageType) => void;
  t: (key: string) => any;
  isLoaded: boolean;
  forceUpdate: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<LanguageType>('en');
  const [translations, setTranslations] = useState<TranslationsType>(en);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [renderKey, setRenderKey] = useState<number>(0); // Force re-render when needed

  // Load language preference when component mounts
  useEffect(() => {
    // Load saved language preference from localStorage on initial mount
    const savedLanguage = localStorage.getItem('language') as LanguageType;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'tr')) {
      setLanguage(savedLanguage);
    }
    setIsLoaded(true);
  }, []);

  // Update translations when language changes
  useEffect(() => {
    const updateTranslations = async () => {
      try {
        if (language === 'en') {
          setTranslations(en);
        } else if (language === 'tr') {
          setTranslations(tr);
        }
        
        // Save language preference to localStorage
        localStorage.setItem('language', language);
        
        // Force re-render by updating the document language attribute
        document.documentElement.setAttribute('lang', language);
        
        // Force re-render of all components using translations
        setRenderKey(prev => prev + 1);
        
        // Trigger a global event for components that might not be directly using the hook
        window.dispatchEvent(new Event('languagechange'));
      } catch (error) {
        console.error("Failed to update translations:", error);
      }
    };
    
    updateTranslations();
  }, [language]);

  // Function to force update from any component
  const forceUpdate = useCallback(() => {
    setRenderKey(prev => prev + 1);
  }, []);

  // Memoized translation function to improve performance
  const t = useCallback((key: string): any => {
    if (!key) return '';
    
    const keys = key.split('.');
    let value: any = translations;
    
    try {
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k];
        } else {
          console.warn(`Translation key not found: ${key} in current language: ${language}`);
          return key;
        }
      }
      
      return value;
    } catch (error) {
      console.error(`Error accessing translation for key: ${key}`, error);
      return key;
    }
  }, [translations, language]);

  // Create a memoized context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    language,
    setLanguage,
    t,
    isLoaded,
    forceUpdate
  }), [language, t, isLoaded, forceUpdate]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {/* Use key to force re-render all children when language changes */}
      <React.Fragment key={`language-wrapper-${renderKey}`}>
        {children}
      </React.Fragment>
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
