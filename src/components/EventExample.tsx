"use client";
import React, { useState } from "react";

type UserType = {
  sessionId: number;
  name: string;
};

const EventExample = () => {
  return <div className="useRefHook">
    <input type="text" placeholder="focus on here ...." />
    <input type="text" placeholder="username" />
    <button>Send</button>
  </div>;
};

export default EventExample;
 