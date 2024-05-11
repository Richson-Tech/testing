"use client";
import React, { useState, useRef, useEffect } from "react";

const EventExample = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const userNameinputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleClick = () => {
    console.log("The userName name is" + userNameinputRef.current?.value);
  };

  return (
    <div className="useRefHook">
      <input ref={inputRef} type="text" placeholder="focus on here ...." />
      <input ref={userNameinputRef} type="text" placeholder="username" />
      <button onClick={handleClick}>Send</button>
    </div>
  );
};

export default EventExample;
