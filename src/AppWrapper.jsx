import { useState, useEffect } from 'react'
import App from './App.jsx'
import AppEnglish from './AppEnglish.jsx'
import AppIndia from './AppIndia.jsx'
import AppIndiaEnglish from './AppIndiaEnglish.jsx'
// import AppPhilippines from './AppPhilippines.jsx'
import { LanguageSelector } from './LanguageSelector.jsx'
import { getUserCountry } from './utils/geolocation.js'

export function AppWrapper() {
  const [language, setLanguage] = useState(null) // Will be set based on country
  const [country, setCountry] = useState('DEFAULT')
  const [isLoadingCountry, setIsLoadingCountry] = useState(true)

  // Detect user's country on mount
  useEffect(() => {
    async function detectCountry() {
      try {
        const detectedCountry = await getUserCountry()
        setCountry(detectedCountry)
        console.log('User country detected:', detectedCountry)
        
        // Set default language based on country if not already set
        const savedLanguage = localStorage.getItem('selectedLanguage')
        if (!savedLanguage) {
          // India -> Hindi, Philippines -> Tagalog, others -> Arabic
          const defaultLang = detectedCountry === 'IN' ? 'hi' : (detectedCountry === 'PH' ? 'tl' : 'ar')
          setLanguage(defaultLang)
          document.documentElement.dir = defaultLang === 'ar' ? 'rtl' : 'ltr'
          document.documentElement.lang = defaultLang
        } else {
          setLanguage(savedLanguage)
        }
      } catch (error) {
        console.error('Error detecting country:', error)
        setCountry('DEFAULT')
        setLanguage('ar') // Default to Arabic
      } finally {
        setIsLoadingCountry(false)
      }
    }
    
    detectCountry()
  }, [])

  // Language initialization is now handled in detectCountry

  const handleSelectLanguage = (lang) => {
    setLanguage(lang)
    localStorage.setItem('selectedLanguage', lang)
    // Set document direction
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
  }

  const handleChangeLanguage = () => {
    // For India: toggle between Hindi (hi) and English (en)
    // For Philippines: toggle between Tagalog (tl) and English (en)
    // For others: toggle between Arabic (ar) and English (en)
    let newLanguage
    if (country === 'IN') {
      newLanguage = language === 'hi' ? 'en' : 'hi'
    } else if (country === 'PH') {
      newLanguage = language === 'tl' ? 'en' : 'tl' // Toggle between Tagalog and English
    } else {
      newLanguage = language === 'ar' ? 'en' : 'ar'
    }
    setLanguage(newLanguage)
    localStorage.setItem('selectedLanguage', newLanguage)
    // Set document direction
    document.documentElement.dir = newLanguage === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = newLanguage
  }

  // Show loading state while detecting country
  if (isLoadingCountry) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '18px'
      }}>
        Loading...
      </div>
    )
  }

  // Show appropriate version based on country and language
  // India: Hindi (hi) or English (en)
  // Others: Arabic (ar) or English (en)
  
  if (country === 'IN') {
    // India version
    if (language === 'hi') {
      return <AppIndia onChangeLanguage={handleChangeLanguage} />
    }
    return <AppIndiaEnglish onChangeLanguage={handleChangeLanguage} />
  }
  
  if (country === 'PH') {
    // Philippines version - English only for now (Tagalog coming soon)
    return <AppEnglish onChangeLanguage={handleChangeLanguage} country={country} />
  }
  
  // Saudi/Egypt/Default version
  if (language === 'ar') {
    return <App onChangeLanguage={handleChangeLanguage} country={country} language={language} />
  }
  
  return <AppEnglish onChangeLanguage={handleChangeLanguage} country={country} />
}
