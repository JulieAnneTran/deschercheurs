import './App.css';
import BackgroundVideo from './Components/BackgroundVideo';

function App() {
  const videoSource = "https://deschercheurs.s3.ap-southeast-2.amazonaws.com/vid_001.mp4";
  return (
    <div className="App" style={{ height: '', }} >
      <BackgroundVideo
        videoSource={videoSource} >
      </BackgroundVideo>
      <div className="content">
          <p className="App-header">Des Chercheurs
            <p className="comment">Coming soon.</p>
          </p>
      </div>
    </div>
  );
}

export default App;
