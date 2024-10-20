
import { createContext, useEffect, useState } from 'react';
import {albumsData, songsData} from '../assets/assets'
import { Link } from 'react-router-dom';
// import Favourite from '../Component/Favourite';



export const FavouriteDataContext = createContext()|| {};

const Home = ({children}) => {
  const [favorites, setFavorites] = useState([]);
   const [data, setData]= useState([]);
  const [songsdata, setSongs]=useState([]);
 

  useEffect(()=>{
  const  mapData = albumsData.map(items=>({
    id:items.id,
    desc: items.desc,
    image: items.image,
    name:items.name
    }));
    setData(mapData);
console.log(mapData);
},[])

useEffect(()=>{
  const songs = songsData.map(items=>({
    id:items.id,
    desc: items.desc,
    image: items.image,
    name:items.name
    }));
    setSongs(songs);
    console.log(songs);
    },[])

    
    // Function to handle favorite click
    const toggleFavorite = (id) => {
      // If the song is already in favorites, remove it; otherwise, add it
      if (favorites.includes(id)) {
        setFavorites(favorites.filter((favId) => favId !== id));
        
      } else {
        setFavorites([...favorites, id]);
        console.log('favourites',favorites);
      }
     
      
    };
    useEffect(()=>{

    },[favorites])
  return (
    <>
    <div>
    <h1 className='text-4xl font-bold'>Featured Songs</h1>
    </div>
   
    <div className='flex carousel'>
    
    {data.map((items)=>(      
    <div key={items.id} className="carousel-item card bg-base-100 w-96 shadow-xl mx-2 mt-2" >
      
      <button className="btn btn-circle btn-outline" 
                onClick={() => toggleFavorite(items.id)}>
      <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill={favorites.includes(items.id) ? 'pink' : 'currentColor'}
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
</button>
  
      <figure className="px-10 pt-10">
        
        <img
          src={items.image}
          alt="Shoes"
          className="rounded-xl" />
      </figure><div className="card-body items-center text-center">
          <h2 className="card-title">{items.name}</h2>
          <p>{items.desc}</p>
          <Link to={`/displayalbum/${items.id}`}>
   <div className="card-actions">
        <button className="btn btn-circle">
        <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"></path>
</svg>
  </button>
      </div>
      </Link>  
        </div>

  
  </div>
      ))}
      </div>
  
  <div className="divider"></div>
  <div>
    <h1 className='text-4xl font-bold'>Today Hits</h1>
    </div>
   
    <div className='flex carousel'>
    
    {songsdata.map((items)=>(      
    <div key={items.id} className="carousel-item card bg-base-100 w-96 shadow-xl mx-2 mt-2" >
      <figure className="px-10 pt-10">
        
        <img
          src={items.image}
          alt="Shoes"
          className="rounded-xl" />
      </figure><div className="card-body items-center text-center">
          <h2 className="card-title">{items.name}</h2>
          <p>{items.desc}</p>
          <Link to={`/displayalbum/${items.id}`}>
   <div className="card-actions">
        <button className="btn btn-circle">
        <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"></path>
</svg>
  </button>
      </div>
      </Link>  
        </div>

  
  </div>
      ))}
      </div>

      <FavouriteDataContext.Provider value ={{favorites, toggleFavorite}}>
        
        {children}
       
      </FavouriteDataContext.Provider>
</>
  );

}

export default Home
