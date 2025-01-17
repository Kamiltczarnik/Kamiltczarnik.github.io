import "../css/Projects.css";

function SpotifyDataAnalysis({ navigateBack }) {
  return (
    <div className="project-detail">
      <button className="button scrolly" onClick={navigateBack}>
        ← Back to Home
      </button>
      <div className="project-content">
        <div className="title-bar">
          <h1>Spotify data stuff</h1>
          <img
            src="/assets/images/Spotify.png"
            alt="logo "
            className="title-image"></img>
        </div>
      </div>
    </div>
  );
}

export default SpotifyDataAnalysis;
