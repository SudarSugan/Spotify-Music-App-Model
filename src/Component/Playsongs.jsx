import  { useEffect, useState } from 'react'

const Playsongs = () => {
    const [isPlaying, setIsPlaying] = useState(false);  // Track if the audio is playing
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [audio] = useState(new Audio("/src/assets/song1.mp3"));  // Initialize audio object

  useEffect(() => {
    // Play or pause the song based on the isPlaying state
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    // Cleanup when component is unmounted
    return () => {
      audio.pause();
    };
  }, [isPlaying, audio]);

  const playPauseHandler = () => {
    setIsPlaying(( prevState) => !prevState); // Toggle play/pause
  };

  const stopSong = () => {
    setIsPlaying(false);
    audio.currentTime = 0; // Reset the audio to the beginning
  };

   // Backward song
   const backwardHandler = () => {
    setCurrentSongIndex((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1; // Move to the previous song
      }
      return prevIndex; // Stay at the first song
    });
  };

  // Forward song
  const forwardHandler = () => {
    setCurrentSongIndex((prevIndex) => {
      if (prevIndex < audio.length - 1) {
        return prevIndex + 1; // Move to the next song
      }
      return prevIndex; // Stay at the last song
    });
  };

  return (
    <div className=' static' style={{backgroundImage:`url('/src/assets/images/livewalpaper.webp')`,backgroundRepeat:'no-repeat', backgroundSize:'100%',  height: '29rem'}}>
      <div className=' flex rounded justify-center w-96 bg-base-200 absolute bottom-64'style={{left:'35rem'}}>
       
       <div>
        <button className='btn btn-circle' onClick={backwardHandler}>
        <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"></path>
</svg>
        </button>
       </div>
        <div className=''>
        <button className={isPlaying ? 'btn-circle' : 'btn-circle'} onClick={playPauseHandler}>
        {!isPlaying ? (
          // Show pause button when isPlaying is true
          
          <svg
          data-slot="icon"
          fill=""
          strokeWidth="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
          ></path>
        </svg>
        ) : (
          // Show play button when isPlaying is false
          <svg
            data-slot="icon"
            fill=""
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 5.25v13.5m-7.5-13.5v13.5"
            ></path>
          </svg>
        )}
      </button>
        </div>
       
       
     <div className=''>
      <button className="btn btn-circle " style={{}} onClick={stopSong}><svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z"></path>
</svg></button>
      </div>
      <div>
        <button className='btn btn-circle' onClick={forwardHandler}>
        <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"></path>
</svg>
        </button>
       </div>
      </div>
    </div>
  );
}

export default Playsongs
