import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CustomerGatewayLayout } from './components/customer/CustomerGatewayLayout';
import { Services } from './pages/Services';
import { Reviews } from './pages/Reviews';
import { SplashScreen } from './components/common/SplashScreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <BrowserRouter>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      <Routes>
        {/* Main User Review Flow on root */}
        <Route path="/" element={<CustomerGatewayLayout />} />

        {/* Dynamic Shop URL Review Flow: /r/:shopSlug */}
        <Route path="/r/:shopSlug" element={<CustomerGatewayLayout />} />

        {/* Services Page */}
        <Route path="/services" element={<Services />} />

        {/* Reviews & Testimonials Page */}
        <Route path="/reviews" element={<Reviews />} />

        {/* Catch-all redirect to user panel */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
