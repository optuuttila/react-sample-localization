import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import './App.css';

const items = [
  { value: 'en', label: 'English' },
  { value: 'fi', label: 'Finnish' },
  { value: 'se', label: 'Swedish (no translations)' }
]

function App() {  
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(null);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);   
    setLang(language);
  };

  return (
    <div className="App">      
      <select value={lang} onChange={e => changeLanguage(e.currentTarget.value)}>
        {items.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>

      <header className="App-header">
        <div><h1>{t('page.header')}</h1></div>
        <div>{t('content.name')} React Int8-next</div>
      </header>
    </div>
  );
}

export default (App);
