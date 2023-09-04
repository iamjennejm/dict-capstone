import React, { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="flex items-center">
      <p className="mr-2">Rate me:</p>
      {Array.from({ length: 5 }).map((_, index) => (
        <button2
          key={index}
          onMouseEnter={() => handleRatingChange(index + 1)}
          onMouseLeave={() => handleRatingChange(0)}
          onClick={() => setRating(index + 1)}
          className={`text-3xl ${
            index + 1 <= rating ? "text-yellow-500" : "text-gray-500"
          }`}
        >
          ★
        </button2>
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <StarRating />
    </div>
  );
}

export default App;
