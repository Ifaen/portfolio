import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Router from "./components/Router.tsx";
import LanguageProvider from "./components/LanguageContext.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <Router />
    </LanguageProvider>
  </StrictMode>,
)
