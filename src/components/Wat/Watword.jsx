import React, { useState } from "react";
function Watword({ words }) {
  const [showWord, setShowWord] = useState(true);
  const [url, setUrl] = useState(words[0]);
  const [wordNo, setWordNo] = useState(1);
  let idx = 0;
  setInterval(() => {
    setShowWord(true);
    setTimeout(() => {
      setShowWord(false);
      setWordNo(1 + wordNo);
      setUrl(words[++idx]);
    }, 10000);
    
  }, 30000);
  return (
    <div>
      <div className="container w-50 mt-3 ps-5">
        <h3 className="text-center text-muted">Word: {wordNo}</h3>
        {showWord ? (
          <div>
            {url}
          </div>
        ) : (
          <div
            height="500"
            width="100"
            className=" bg-dark text-white text-center"
          >
            Counter
          </div>
        )}
      </div>
    </div>
  );
}

export default Watword;