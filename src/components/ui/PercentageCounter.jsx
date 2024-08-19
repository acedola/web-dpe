import React, { useState, useEffect } from 'react';

const PercentageCounter = ({ initialValue, finalValue, duration }) => {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    const range = finalValue - initialValue;
    const startTime = Date.now();

    function updateCount() {
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime >= duration) {
        setCount(finalValue);
      } else {
        const increment = range * (elapsedTime / duration);
        setCount((initialValue + increment).toFixed(1));
        requestAnimationFrame(updateCount);
      }
    }

    const animationFrameId = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrameId);
  }, [initialValue, finalValue, duration]);

  return (
    <div>
      <h1>{count}%</h1>
    </div>
  );
};

export default PercentageCounter;
