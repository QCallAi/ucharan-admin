// import React from "react";

// const Loader = () => {
//   return (
//     <div className="bg-black fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-opacity-50">
//       <div className="border-primary-color custom-loader h-32 w-32 animate-spin rounded-full border-8 border-t-8 border-gray-300"></div>
//     </div>
//   );
// };

// export default Loader;

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="custom-loader"></div>
    </div>
  );
};

export default Loader;
