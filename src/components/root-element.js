import React from 'react';

const RootElement = ({ children }) => {
  return <main className="mx-auto px-2 sm:px-4 prose prose-sm sm:prose">{children}</main>;
};

export default RootElement;
