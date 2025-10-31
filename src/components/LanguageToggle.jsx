import { Button } from '@/components/ui/button.jsx';

export function LanguageToggle({ currentLanguage, onToggle }) {
  return (
    <Button
      onClick={onToggle}
      style={{ position: 'fixed', top: '5px', left: '5px', zIndex: 9999 }}
      className="gap-1 shadow-lg bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-300 hover:border-gray-400 px-2 py-1 h-auto text-[10px] sm:text-xs sm:px-2.5 sm:py-1.5 sm:gap-1.5 !fixed"
    >
      {currentLanguage === 'ar' ? (
        <>
          <span className="text-base sm:text-xl">🇬🇧</span>
          <span className="font-semibold text-[10px] sm:text-xs">English</span>
        </>
      ) : (
        <>
          <span className="text-base sm:text-xl">🇸🇦</span>
          <span className="font-semibold text-[10px] sm:text-xs">العربية</span>
        </>
      )}
    </Button>
  );
}

