import { useContext } from 'react'
import {  FavouriteDataContext } from '../Pages/Home'


const Favourite = () => {
  const { favorites, toggleFavorite } = useContext(FavouriteDataContext)|| {} ;

  return (
    
    
    <div>
      <h1>{favorites}</h1>
      <ul>
        {favorites.map((item, index) => (
          <li key={index}>{item}</li>
          
        ))}
      </ul>
      <button onClick={() => toggleFavorite()}>Toggle Favorite</button>
    </div>
  );
};

export default Favourite
