import './MusicCard.css';

function MusicCard({ image, title, artist, year, size = 'medium' }) {
  return (
    <div className={`music-card ${size}`}>
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-info">
        <h3 className="card-title">{title}</h3>
        {artist && <p className="card-artist">{artist}</p>}
        {year && <p className="card-year">{year}</p>}
      </div>
    </div>
  );
}

export default MusicCard;
