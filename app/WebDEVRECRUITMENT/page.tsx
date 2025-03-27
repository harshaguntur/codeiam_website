import React from 'react';

const Page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen mt-40 bg-gradient-to-br from-blue-400 via-blue-300 to-blue-500 p-4">
      <div className="backdrop-blur-lg bg-white/20 shadow-lg rounded-2xl p-6 w-full max-w-md border border-white/30 text-center">
        <h1 className="text-xl font-semibold text-white mb-4">AR/VR, APP & WEB DEV CHAPTER RECRUITMENT 2.0</h1>
        <iframe 
          src="https://ubiquitous-elderberry-49b.notion.site/ebd/1c3c5c15897080429a6ad7c9f52fa4f4" 
          width="100%" 
          height="600" 
          frameBorder="0" 
          allowFullScreen
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Page;
