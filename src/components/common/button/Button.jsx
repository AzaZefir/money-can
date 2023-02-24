import React from 'react';

export const Button = ({children}) => {
  return (
    <a className="button d-flex align-items-center justify-content-center" href="">
      {children}
    </a>
  );
};
