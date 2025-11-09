import { useState } from 'react';
import Header from './components/Header';
import RecommendedSection from './components/RecommendedSection';
import RecentlyPlayed from './components/RecentlyPlayed';
import Player from './components/Player';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="app">
      <div className="app-container">
        <Header />
        
        <main className="main-content">
          <RecommendedSection />
          <RecentlyPlayed />
        </main>
        
        <Player />
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}

export default App;
