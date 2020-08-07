import React from 'react';
import Navbar from './Navbar/Navbar'
import AppContextProducer from './Context/AppContextProducer'
import PublicRoutes from './Router/PublicRoutes'
import Footer from './Navbar/footer'

function App() {
  return (
    <AppContextProducer>
      <Navbar />
      <PublicRoutes />
      <Footer/>
    </AppContextProducer>
  );
}

export default App;

