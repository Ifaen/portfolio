import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App.tsx'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ToeicCertificate from "./pages/certificates/toeic-bridge.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/certificates/toeic-bridge" element={<ToeicCertificate />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
