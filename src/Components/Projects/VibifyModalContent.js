import React from "react";

const VibifyModalContent = () => {
  return (
    <>
      <p>
        A full-stack web app that enhances your Spotify experience with
        personalized insights and social recommendations. Explore top artists,
        tracks, and recently played songs. Discover new music, share favorites,
        and seamlessly add them to your Spotify playlists.
      </p>

      <div className="feature-section">
        <h2>Features</h2>
        <ul>
          <li>
            Explore top artists and tracks and filter by time period and number
            of items
          </li>
          <li>Discover music through feed recommendations</li>
          <li>
            Share and recommend tracks, artists, albums, or playlists to the app
          </li>
          <li>Seamlessly add recommendations to your Spotify playlists</li>
          <li>
            Handle music playback control and play a track directly from the app
          </li>
        </ul>
      </div>

      <div className="media-section">
        <h2>Explore the App</h2>
        <div className="media-gallery">
          <div className="media-item">
            <h3>Dashboard Page</h3>
            <img src="/projects/Vibify/dashboard.png" alt="Dashboard" />
          </div>
          <div className="media-item">
            <h3>Recommendations Feed Page</h3>
            <img
              src="/projects/Vibify/feed.png"
              alt="Recommendations Feed Page"
            />
          </div>
          <div className="media-item">
            <h3>Recommending Page</h3>
            <img
              src="/projects/Vibify/recommending.png"
              alt="Recommending Page"
            />
          </div>
          <div className="media-item">
            <h3>Playlists Page</h3>
            <img
              src="/projects/Vibify/playlists.png"
              alt="Spotify Playlists Page"
            />
          </div>
          <div className="media-item">
            <h3>Top Tracks Page</h3>
            <img src="/projects/Vibify/tracks.png" alt="Top Tracks Page" />
          </div>
          <div className="media-item">
            <h3>Top Artists Page</h3>
            <img src="/projects/Vibify/artists.png" alt="Top Artists Page" />
          </div>
        </div>
      </div>
    </>
  );
};

export default VibifyModalContent;
