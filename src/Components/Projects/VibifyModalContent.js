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
            <img src="/projects/Vibify/dashboard.png" alt="Dashboard" />
            <p>Dashboard</p>
          </div>
          <div className="media-item">
            <img
              src="/projects/Vibify/feed.png"
              alt="Feed Recommendations Page"
            />
            <p>Feed Recommendations</p>
          </div>
          <div className="media-item">
            <img
              src="/projects/Vibify/recommending.png"
              alt="Recommending Page"
            />
            <p>Recommending Page</p>
          </div>
          <div className="media-item">
            <img
              src="/projects/Vibify/playlists.png"
              alt="Spotify Playlists Page"
            />
            <p>Spotify Playlists</p>
          </div>
          <div className="media-item">
            <img src="/projects/Vibify/tracks.png" alt="Top Tracks Page" />
            <p>Top Tracks</p>
          </div>
          <div className="media-item">
            <img src="/projects/Vibify/artists.png" alt="Top Artists Page" />
            <p>Top Artists</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VibifyModalContent;
