import MusicCard from './MusicCard';
import './RecentlyPlayed.css';

function RecentlyPlayed() {
  const recentTracks = [
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
      title: 'Korean R&B Rewind',
      artist: 'Apple Music',
      year: ''
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
      title: 'Chill Vibes',
      artist: '플레이리스트',
      year: ''
    }
  ];

  return (
    <section className="recently-played-section">
      <div className="section-header-with-arrow">
        <h2 className="section-title">최근 재생한 음악</h2>
        <svg className="arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      <div className="cards-container">
        {recentTracks.map(track => (
          <MusicCard 
            key={track.id}
            image={track.image}
            title={track.title}
            artist={track.artist}
            year={track.year}
            size="medium"
          />
        ))}
      </div>
    </section>
  );
}

export default RecentlyPlayed;
