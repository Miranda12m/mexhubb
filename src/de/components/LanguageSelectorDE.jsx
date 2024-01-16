import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../../LanguageContext';
import Flag from 'react-world-flags'

const LanguageSelectorDE = () => {
    const { language, changeLanguage } = useLanguage();
    const navigate = useNavigate();
    const location = useLocation();
  
    const handleLanguageChange = (newLanguage) => {
      changeLanguage(newLanguage);
      
      const currentPath = location.pathname;
      const newPath = currentPath.replace(`/${language}/`, `/${newLanguage}/`);
      
      navigate(newPath);
    };
  

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="language-dropdown" class="nav-item dropdown" >
        {language.toUpperCase()}
      </Dropdown.Toggle>
      <Dropdown.Menu class="dropdown-menu show" data-bs-popper="static">
        <Dropdown.Item class="dropdown-item" onClick={() => handleLanguageChange('en')} style={{color: 'black'}}>English <Flag code="US" height="12" style={{maxHeight:'12px'}} /></Dropdown.Item>
        <Dropdown.Item class="dropdown-item" onClick={() => handleLanguageChange('fr')} style={{color: 'black'}}>Français <Flag code="FR" height="12" style={{maxHeight:'12px'}} /></Dropdown.Item>
        <Dropdown.Item class="dropdown-item" onClick={() => handleLanguageChange('es')} style={{color: 'black'}}>Español <Flag code="ES" height="12" style={{maxHeight:'12px'}} /></Dropdown.Item>
        <Dropdown.Item class="dropdown-item" onClick={() => handleLanguageChange('de')} style={{color: 'black'}}>Deutsch <Flag code="DE" height="12" style={{maxHeight:'12px'}} /></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageSelectorDE;