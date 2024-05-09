"use client";
import React, { useState } from "react";

type UserType = {
  sessionId: number;
  name: string;
};

const EventExample = () => {
  const [userName, setUsername] = useState("");
  const [user, setUser] = useState<UserType | null>(null);

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
      {/* illustration  */}
      {user?.name}
    </div>
  );
};

export default EventExample;
