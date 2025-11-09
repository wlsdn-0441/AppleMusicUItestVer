import { useState } from 'react';
import MusicCard from './MusicCard';
import './RecommendedSection.css';

function RecommendedSection() {
  const [activeTab, setActiveTab] = useState('recent');

  const recentReleases = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop',
      title: '시지프 신화 - EP',
      artist: '윤지영',
      year: '2025년'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&h=500&fit=crop',
      title: 'Summer Vibes',
      artist: '아티스트',
      year: '2025년'
    }
  ];

  const forYou = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
      title: '진우의 스테이션',
      artist: '',
      year: ''
    }
  ];

  return (
    <section className="recommended-section">
      <div className="section-header">
        <h2 className="section-title">인기 추천곡</h2>
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'recent' ? 'active' : ''}`}
            onClick={() => setActiveTab('recent')}
          >
            최신 발매
          </button>
          <button 
            className={`tab ${activeTab === 'foryou' ? 'active' : ''}`}
            onClick={() => setActiveTab('foryou')}
          >
            나만을 위한 추천
          </button>
        </div>
      </div>
      
      <div className="cards-container">
        {activeTab === 'recent' ? (
          recentReleases.map(item => (
            <MusicCard 
              key={item.id}
              image={item.image}
              title={item.title}
              artist={item.artist}
              year={item.year}
              size="large"
            />
          ))
        ) : (
          forYou.map(item => (
            <MusicCard 
              key={item.id}
              image={item.image}
              title={item.title}
              artist={item.artist}
              year={item.year}
              size="large"
            />
          ))
        )}
      </div>
    </section>
  );
}

export default RecommendedSection;
