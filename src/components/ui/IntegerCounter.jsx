// En el componente IntegerCounter
import React, { useState, useEffect } from 'react';

const IntegerCounter = ({ initialValue, finalValue, duration }) => {
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
        setCount(Math.round(initialValue + increment));
        requestAnimationFrame(updateCount);
      }
    }

    const animationFrameId = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrameId);
  }, [initialValue, finalValue, duration]);

  return (
    <div>
      <h1>{count.toLocaleString()}</h1>
    </div>
  );
};

export default IntegerCounter;



  
