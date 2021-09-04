import './App.css';
import BackgroundVideo from './Components/BackgroundVideo';

function App() {
  const videoSource = "https://deschercheurs.s3.ap-southeast-2.amazonaws.com/vid_001.mp4";
  return (
    <div className="App">
      <BackgroundVideo
        videoSource={videoSource} >
      </BackgroundVideo>
      <div className="content">
          <p className="App-header">Des Chercheurs
            <p className="coming-soon">Coming soon.</p>
            <p className="footer creators">Created by Julie Tran.<br></br>Produced by Jace Chua.</p>
          </p>
      </div>
    </div>
  );
}

export default App;
