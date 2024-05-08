// "use client";
// import React from "react";

// const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
//   e.preventDefault();
//   alert("hiii");
// };

// const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   alert(e.target.value);
// };

// const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
//   alert(`Post ${id} has been deleted`);
// };

// const EventExample = () => {
//   return (
//     <div className="eventExample">
//       <form>
//         <input
//           type="text"
//           placeholder="input anything here..."
//           onChange={handleChange}
//         />
//         <button onClick={handleClick}>Search</button>
//       </form>
//       <form className="post">
//         <h1>
//           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis,
//           est. 1
//         </h1>
//         <p>
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
//           voluptate, quis dolores aspernatur magni recusandae laboriosam cum.
//           Libero, repudiandae quos!
//         </p>
//         <button onClick={(e) => handleDelete(e, 1)}>Delete</button>
//       </form>
//       <form className="post">
//         <h1>
//           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis,
//           est. 2
//         </h1>
//         <p>
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
//           voluptate, quis dolores aspernatur magni recusandae laboriosam cum.
//           Libero, repudiandae quos!
//         </p>
//         <button onClick={(e) => handleDelete(e, 2)}>Delete</button>
//       </form>
//     </div>
//   );
// };

// export default EventExample;


import React, { useState } from 'react'

const [userName, setUsername] = useState("")
const [user, setUser] = useState("")

const EventExample = () => {
  return (
    <div className='usestate'>
      <input type="text" placeholder='username' />
      <button>Login</button>
    </div>
  )
}

export default EventExample