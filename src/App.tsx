import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Introduction from './components/Introduction';
import Examples from './components/ExampleS';
import EastVsWest from './components/EastVsWest';
import Conclusion from './components/Conclusion';
import Bibliography from './components/Bibliography';
import Footer from './components/Footer';
import './main';
import './App.css';

function App() {

  return (
    <div className="app">
      <NavigationBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="/east-vs-west" element={<EastVsWest />} />
          <Route path="/conclusion" element={<Conclusion />} />
          <Route path="/bibliography" element={<Bibliography />} />
        </Routes>
    </main>
      <Footer />
    </div>
  );
}

export default App;
