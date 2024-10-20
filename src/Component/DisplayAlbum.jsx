import  {  useEffect, useRef, useState,  } from 'react'
import {   assets, data, songsData } from '../assets/assets';
import { Link, useLocation } from 'react-router-dom';

const DisplayAlbum = () => {
    const [like, setLikes]= useState(256)
    const [status, setStatus] = useState(null); // 'like' or 'dislike'
    const [dislikeCount, setDislikeCount] = useState(0);
    const displayRef = useRef();
    const location = useLocation();
    console.log('location',location );
    const isAlbum = location.pathname.includes('displayalbum');
    const albumId= isAlbum ? location.pathname.slice(-1) : "";
    const bgColor = data[Number(albumId)].bgColor;
   
    const downloadSong = (file) => {
        if (!file) {
          console.log('File is undefined');
          return;
        }
        
        console.log('file', file);  // Log the correct file path
      
        const link = document.createElement('a');
        link.href = file;
        link.download = file.split('/').pop();  // Extracts filename from the file path
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);  // Clean up the DOM
      };

      const handleToggle = () => {
        if (status === null || status === 'dislike') {
          // If currently disliked or neutral, switch to like
          if (status === 'dislike') {
            setDislikeCount(dislikeCount - 1);
          }
          setLikes(like + 1);
          setStatus('like');
        } else if (status === 'like') {
          // If currently liked, switch to dislike
          setLikes(like - 1);
          setDislikeCount(dislikeCount + 1);
          setStatus('dislike');
        }
      };
      

      // const decrement = useCallback(() => {
      //   setLikes((prevCount) => prevCount - 1);
      // }, []);
   
    useEffect(()=>{
        if(isAlbum){
            displayRef.current.style.background =`linear-gradient(${bgColor},#121212)`
          }
          else{
            displayRef.current.style.background =``
          }

          if(isAlbum){
            displayRef.current.style.color ="white"
          }
          else{
            displayRef.current.style.color =''
          }
        },[isAlbum]);

        
        
      //  const playsongs =()=>{
      //   songsData.map((item, index)=>{
      //     console.log('audio',item.file);
      //     const fileName = item.file.split('/').pop();
      //   console.log(fileName);
      //   });
      //   // console.log('audio',audio);
        
      //  }

  return (
    <div >
      <div ref={displayRef} className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
  <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
        <img className="max-w-sm rounded-lg shadow-2xl" src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" alt="" />
        <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <div className='mb-4'>
      <Link to={'/playsongs'}>
      <button className="btn btn-primary mx-auto" >Click for play songs</button>
     </Link>
      </div>
        <div className="stats shadow">
  <div className="stat">
    <div className="stat-figure text-primary btn btn-circle">
    <button className="btn btn-circle" onClick={handleToggle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={ status === 'like' ? 'pink' : 'currentColor'}
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
      </svg>
      </button>
      
    </div>
    <div className="stat-title">Total Likes</div>
    <div className="stat-value text-primary">{like}K</div>
    <div className="stat-desc">21% more than last month</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary" >
    <button className="btn btn-circle" >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={''}
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"></path>
      </svg>
      </button>
    </div>
    <div className="stat-title">Page Views</div>
    <div className="stat-value text-secondary">2.6M</div>
    <div className="stat-desc">21% more than last month</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
    </div>
    <div className="stat-value">86%</div>
    <div className="stat-title">Tasks done</div>
    <div className="stat-desc text-secondary">31 tasks remaining</div>
  </div>
</div>
</div>
      </div>
  </div>
</div>

<div className="divider"></div>
    {
       <div className="overflow-x-auto">
       <table className="table table-xs ">
         <thead className='mx-auto'>
           <tr>
             <th></th>
             <th>Title</th>
             <th>Album</th>
             <th>Date Added</th>
             <th>
             <div className="flex items-center gap-3">
                Duration  <img className='mx-0 w-4' src={assets.clock_icon} alt="" /> </div> </th>
             <th>Download</th>
            
           </tr>
         </thead>
         <tbody>       
           
      {songsData.map((song, index) => (
          <tr key={index}>
            <th>{index + 1}</th> {/* Row Number */}
            <td>{song.name}</td> {/* Song Title */}
            <td>{song.desc}</td> {/* Album Name */}
            <td>{song.file}</td> {/* Date Added */}
            <td>{song.duration}</td> {/* Duration */}
            <td className='btn btn-circle'>
            <button onClick={() => downloadSong(song.file)}> {/* Passing song.file */}
                      <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="20" height="20">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                      </svg>
                    </button>
</td> {/* Download */}
          </tr>
        ))}
      </tbody>
        
       </table>
     </div>
    }

    </div>
  )
}

export default DisplayAlbum
