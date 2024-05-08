"use client";
import React from "react";

const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
};

const EventExample = () => {
  return (
    <div className="eventExample">
      <form>
        <input type="text" placeholder="input anything here..." />
        <button onClick={handleClick}>Search</button>
      </form>
      <form className="post">
        <h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis,
          est. 1
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
          voluptate, quis dolores aspernatur magni recusandae laboriosam cum.
          Libero, repudiandae quos!
        </p>
        <button>Delete</button>
      </form>
      <form className="post">
        <h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis,
          est. 2
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
          voluptate, quis dolores aspernatur magni recusandae laboriosam cum.
          Libero, repudiandae quos!
        </p>
        <button>Delete</button>
      </form>
    </div>
  );
};

export default EventExample;
