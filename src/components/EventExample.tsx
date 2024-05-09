"use client";
import React, { useState } from "react";

type UserType = {
  sessionId: number;
  name: string;
};

const [userName, setUsername] = useState("");
const [user, setUser] = useState<UserType | null>(null);

const EventExample = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleCick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setUser({
      name: userName,
      sessionId: Math.random(),
    });
  };

  return (
    <div className="usestate">
      {user ? (
        `${user.name} logged in`
      ) : (
        <form>
          <input type="text" placeholder="username" onChange={handleChange} />
          <button onClick={handleCick}>Login</button>
        </form>
      )}
    </div>
  );
};

export default EventExample;
