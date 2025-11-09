import './Player.css';

function Player() {
  return (
    <div className="player">
      <div className="player-content">
        <div className="player-info">
          <img 
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop" 
            alt="Album cover" 
            className="player-thumbnail"
          />
          <div className="player-text">
            <h4 className="player-title">For You (feat. Crush)</h4>
            <p className="player-artist">이하이</p>
          </div>
        </div>
        
        <div className="player-controls">
          <button className="control-btn play-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button>
          <button className="control-btn next-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 4l10 8-10 8V4zm12 0v16h2V4h-2z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
