// import React, { useEffect, useRef, useState } from 'react'
// import NavBar from './NavBar'
// import Home from './Home';
// import axios from 'axios';
// import data from '/src/assets';

// const HomeRoot = () => {

//     const [listings, setListings] = useState([]);
//     const [isLoading, setIsLoading]= useState(true);
//     const[errormessage , setErrormessage]=useState('');
//     const [filters, setFilters]= useState();
//     const abortController= useRef(null); 
//     useEffect(()=>{
//         const featchListings= async ()=> {
//             setIsLoading(true);
//             setErrormessage(null);
//             abortController.current= new AbortController();
//             try{

//                 const response = await api.get('/src/assets/assets.js',{params:filters, signal: abortController.current?.signal,});
               
//                 setListings(response.data);
//             }
//            catch (error){
//             if(axios.isCancel(error)){
//                 return;
//             }
        
           
//             setErrormessage('Something wet wrong. Please check try again later.');
//         }
//            finally{
//             setIsLoading(false);
//            }
            
           
//         };
//         featchListings();
//         return()=>{
//             abortController.current?.abort();
//         };
//     },[filters]);



//     const handleFilters = (filters) =>{

//         setFilters(filters);
//     }

//     const renderListingList=()=>{

//         if (isLoading){
//             return (
//               <div className='flex justify-center'>
//               <span className="loading loading-dots loading-lg"></span>
//               </div>  
//             );
//         }
//         if(errormessage){
//             return(
//                 <div className="text-center">
//                     {errormessage}
//                 </div>
//             )
//         }

        
//         return <Home listings={listings} />;
//     }
//   return (
//     <div className="container py-4">
//     <div className='mb-4'>
//    <NavBar onChange={handleFilters} />
//    {/* <Separator className='my-4' /> */}
// </div>
// {renderListingList()}
//  {/* <ListingList listings={listings} /> */}
//    {/* <Link to="/categories">Categories</Link> */}
//    {/* <UseEffectArticle/> */}
// </div>
//   )
// }

// export default HomeRoot
