import React from 'react';
import { LanguageProvider } from './LanguageContext';
import AppContent from './AppContent';
import { useEffect
 } from 'react';
const App = () => {
  useEffect(() => {
    const handleUrlChange = () => {
      // Recarga la página cuando la URL cambia
      window.location.reload();
    };

    // Agrega un listener para detectar cambios en la URL
    window.addEventListener('popstate', handleUrlChange);

    // Limpia el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar el componente

  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
