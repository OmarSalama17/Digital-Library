import React from 'react';

const BackgroundDecor = () => {
  return (
    <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute top-[-12rem] right-[-8rem] w-[645px] h-[600px] bg-orange-100 rounded-[184px] blur-blob"></div>
      <div className="absolute bottom-[-23rem] left-[-14rem] w-[800px] h-[800px] bg-blue-50 rounded-full blur-blob"></div>
      <div className="absolute top-[7rem] right-[8rem] w-48 h-48 bg-dots mask-image-linear-to-b"></div>
      <div className="absolute bottom-[6rem] left-[8rem] w-32 h-40 bg-dots opacity-40"></div>
      <div className="absolute bottom-[-10%] right-[-6%] w-[30rem] h-[27rem] rounded-full bg-stripes opacity-60"></div>
    </div>
  );
};

export default BackgroundDecor;