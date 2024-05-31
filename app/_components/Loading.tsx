import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="bg-white-100 flex h-screen items-center justify-center space-x-2">
      <span className="sr-only">Loading...</span>
      <div className="bg-grey-200 h-8 w-8 animate-bounce rounded-full [animation-delay:-0.3s]"></div>
      <div className="bg-grey-200 h-8 w-8 animate-bounce rounded-full [animation-delay:-0.15s]"></div>
      <div className="bg-grey-200 h-8 w-8 animate-bounce rounded-full"></div>
    </div>
  );
};

export default Loading;
