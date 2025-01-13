import React, { useState, useEffect } from "react";
import "./AnimatedPageWrapper.css";

function AnimatedPageWrapper({ children }) {
  const [animation, setAnimation] = useState("slide-in");
  useEffect(() => {
    // Trigger slide-in animation on mount
    setAnimation("slide-in");
    return () => {
      // Trigger slide-out animation on unmount
      setAnimation("slide-out");
    };
  }, []);

  return (
    <div className={`page ${animation}`}>
      {children}
    </div>
  );
}

export default AnimatedPageWrapper;
