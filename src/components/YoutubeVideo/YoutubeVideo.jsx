import { useState } from 'react';

function YoutubeVideo() {
  const [videoUrl, setVideoUrl] = useState('');
  const [videoId, setVideoId] = useState('');
  const [startTime, setStartTime] = useState('');
  const [stopTime, setStopTime] = useState('');

  const handleUrlChange = (event) => {
    const url = event.target.value;
    const id = extractVideoId(url);

    setVideoUrl(url);
    setVideoId(id);
  }

  const handleStartTimeChange = (event) => {
    const time = event.target.value;
    
    setStartTime(time);
  }

  const handleStopTimeChange = (event) => {
    const time = event.target.value;
    
    setStopTime(time);
  }

  const extractVideoId = (url) => {
        // Logic to extract the YouTube video ID from the URL, you can use regex or any other method here
    // Example: https://www.youtube.com/watch?v=ABCDEFGHIJK -> ABCDEFGHIJK

    // Assuming the URL will always be in the format `https://www.youtube.com/watch?v=<VIDEO_ID>`
    const match = url.match(/^[^v]+v=(.{11}).*/);
    
    return (match && match[1]) ? match[1] : '';
    return videoId;
  }

  return (
    <div>
      <div className='flex gap-x-1'>
          <input className="text-xs rounded-sm border-0 opacity-30 w-20 hover:opacity-100" type="text" onChange={handleUrlChange} placeholder="Enter YouTube Video URL" />
          <br />
          <input className="text-xs rounded-sm border-0 opacity-30 w-20 hover:opacity-100" type="text" onChange={handleStartTimeChange} placeholder="Enter Start Time (optional)" />
          <br />
          <input className="text-xs rounded-sm border-0 opacity-30 w-20 hover:opacity-100" type="text" onChange={handleStopTimeChange} placeholder="Enter Stop Time (optional)" />
      </div>
      
      {videoId && (
        <iframe
        //   width="400"
        //   height="315"
          className='w-full h-[300px] rounded-lg'
          src={`https://www.youtube.com/embed/${videoId}?start=${encodeURIComponent(startTime)}&end=${encodeURIComponent(stopTime)}`}
          title="YouTube Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}

export default YoutubeVideo;