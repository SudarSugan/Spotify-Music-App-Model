// import React, { createContext, useState } from 'react'
// import { useState } from 'react';
import { createContext, useState } from 'react';
import { data } from '../assets/assets';



const Test = ({children}) => {
 const [filterData, setFilterData]=useState([]); 
 const FilterDataContext = createContext();
 

  const selectedData=(item)=>{
    console.log('event',item);
    setFilterData([...filterData,item])
    console.log(filterData)
  };
  return (
    <><div>


      <div className="form-control">
        <h1>hi this is from test page</h1>
        {data.map((item, index) => (
          // console.log('items',item);
          <>

            <p key={index}>{item.name}</p>
            <button className="btn" onClick={() => selectedData(item)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 trackable"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Button
            </button>
          </>
        ))}
      </div>


      {/* <ul>
      {data.map((item, index) => (
        <li key={index}>
          <span>{item.name}</span>
          <span>{item.description}</span>
        </li>
      ))}
    </ul> */}
    </div><FilterDataContext.Provider value={filterData}>
       {children}
      </FilterDataContext.Provider></>
  );

  

}

export default Test







// import  { useMemo, useState } from 'react';

// function Test() {
//     const [numbers] = useState(() => {
//       let arr = [];
//       for (let i = 0; i < 10000; i++) {
//         arr.push(Math.floor(Math.random() * 100));
//       }
//       console.log(arr);
//       return arr;
      
//     });
  
//     const [filter, setFilter] = useState('all');
  
//     const filteredNumbers = useMemo(() => {
//       return numbers.filter((num) => {
//         if (filter === 'even') return num % 2 === 0;
//         if (filter === 'odd') return num % 2 !== 0;
//         return true;
//       });
//     }, [numbers, filter]);
  
//     const sum = useMemo(() => {
        
//       return filteredNumbers.reduce((acc, curr) => acc + curr, 0);
      
//     }
    
//     , [filteredNumbers]);
  
//     return (
//       <div>
//         <select value={filter} onChange={(e) => setFilter(e.target.value)}>
//           <option value="all">All</option>
//           <option value="even">Even</option>
//           <option value="odd">Odd</option>
//         </select>
//         <ul>
//           {filteredNumbers.map((num, index) => (
            
//             <li key={index}>{num}</li>
            
//           ))
          
//           }
        
//         </ul>
//         <p>Sum: {sum}</p>
//       </div>
//     );
//   }
  
  

// const Test = () => {
   

    
//       const [numbers] = useState(() => {
//         let arr = [];
//         for (let i = 0; i < 10000; i++) {
//           arr.push(Math.floor(Math.random() * 100));
//         }
//         return arr;
//       });
    
//       const [filter, setFilter] = useState('all');
    
//       const filteredNumbers = numbers.filter((num) => {
//         if (filter === 'even') return num % 2 === 0;
//         if (filter === 'odd') return num % 2 !== 0;
//         return true;
//       });
    
//       const sum = filteredNumbers.reduce((acc, curr) => acc + curr, 0);
    
//       return (
//         <div>
//           <select value={filter} onChange={(e) => setFilter(e.target.value)}>
//             <option value="all">All</option>
//             <option value="even">Even</option>
//             <option value="odd">Odd</option>
//           </select>
//           <ul>
//             {filteredNumbers.map((num, index) => (
//               <li key={index}>{num}</li>
//             ))}
//           </ul>
//           <p>Sum: {sum}</p>
//         </div>
//       );
    
// }
// export default Test
