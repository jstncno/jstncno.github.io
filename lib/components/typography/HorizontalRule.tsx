import React from 'react';

const HorizontalRule: React.FC <React.PropsWithChildren>= ({children, ...props}) => {
  return (
    <hr className="w-[90%] mx-auto my-20 border-gray-800 dark:border-gray-400 rounded" {...props} />
  );
};
export default HorizontalRule;
