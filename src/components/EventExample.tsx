"use client"
import React, { useState } from "react";

const [userName, setUsername] = useState("");
const [user, setUser] = useState(null);

const EventExample = () => {
  return (
    <div className="usestate">
      <input type="text" placeholder="username" />
      <button>Login</button>
    </div>
  );
};

export default EventExample;
