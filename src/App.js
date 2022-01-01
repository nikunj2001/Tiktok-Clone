import { useEffect, useState } from 'react';
import './App.css';
import Video from './Video';
import db from './firebase';
function App() {
  const [videos,setVideos] =useState([])
  useEffect(()=>{
    db.collection('videos').onSnapshot(snapshot=>(
      setVideos[snapshot.docs.map(doc=>doc.data)]
    ))
  },[videos])
  return (
    <div className="App">
      <h1>Hello</h1>
      {videos.map(({url,channel,likes,description,messages,shares,song})=>(
          <div className="app__videos">
        <Video likes={likes} url={url} messages={messages} shares={shares} description={description} channel={channel} song={song} />
      </div>
      ))}
      
    </div>
  );
}
export default App;
