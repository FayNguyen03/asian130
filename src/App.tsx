import { useState } from 'react';
import Navigation from './components/Navigation';
import Introduction from './components/Introduction';
import CaseStudies from './components/CaseStudies';
import EastVsWest from './components/EastVsWest';
import Conclusion from './components/Conclusion';
import Bibliography from './components/Bibliography';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('introduction');

  const renderContent = () => {
    switch (activeTab) {
      case 'introduction':
        return <Introduction />;
      case 'case-studies':
        return <CaseStudies />;
      case 'east-vs-west':
        return <EastVsWest />;
      case 'conclusion':
        return <Conclusion />;
      case 'bibliography':
        return <Bibliography />;
      default:
        return <Introduction />;
    }
  };

  return (
    <div className="app">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="main-content">
        {renderContent()}
      </main>
      <footer className="footer">
        <p>Collective Warriors From The East: Technology, Society, and The Doctrine of Unity</p>
      </footer>
    </div>
  );
}

export default App;
