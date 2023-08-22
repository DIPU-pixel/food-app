import React from "react";
import "./loading.css";

const Loading = () => {
  return (
    <div>
      {Array(10)
        .fill()
        .map((val, index) => {
          return (
            <div className="shimmer-card" key={index}>
              <div className="shimmer-image"></div>
              <div className="shimmer-text">
                <div className="shimmer-line"></div>
                <div className="shimmer-line"></div>
                <div className="shimmer-line"></div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Loading;
