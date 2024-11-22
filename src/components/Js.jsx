
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Axios import karna

import './Js.css';

const Js = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Axios ka use karke data fetch kar rahe hain
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setData(response.data); // Axios response mein data ko access karna
        setLoading(false);       // Data load hone par loading ko false karna
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
        setLoading(false); // Agar error hota hai toh loading ko false karna
      });
  }, []);

  // Jab loading true hota hai, tab loading message dikhana
  if (loading) {
    return <p>Loading data...</p>;
  }

  return (
    <div className='text-center'>
      <h1>User List</h1>
      {data ? (
        <table className='table-border rounded-table'>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data is available</p>
      )}
    </div>
  );
};

export default Js;













// api intrigation using promise 

// import React, { useState, useEffect } from 'react';
// import './Js.css';

// const Js = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((json) => {
//         setData(json);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log("Error fetching data:", error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <p>Loading data...</p>;
//   }

//   return (
//     <div className='text-center'>
//       <h1>User List</h1>
//       {data ? (
//         <table className='table-border rounded-table'>
//           <thead>
//             <tr>
//               <th>Username</th>
//               <th>Email</th>
//               <th>Name</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((user) => (
//               <tr key={user.id}>
//                 <td>{user.username}</td>
//                 <td>{user.email}</td>
//                 <td>{user.name}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No data is available</p>
//       )}
//     </div>
//   );
// };

// export default Js;



//useEffect







// import React, { useEffect, useState } from "react";

// function Users() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // Fetch data when the component loads
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => response.json())
//       .then(data => setUsers(data));
//   }, []); // Empty array = run only once

//   return (
//     <ul>
//       {users.map(user => (
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </ul>
//   );
// }

