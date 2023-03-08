import React from 'react';
import {Link} from 'react-router-dom'

export const Button = ({children,...props}) => {
  return (
    <Link {...props} className="button d-flex align-items-center justify-content-center" href="">
      {children}
    </Link>
  );
};
// import React from 'react';

// export const Button = ({ className,children,...props}) => {
//   return (
//     <button
//     {...props}
//       className={`${className} button`}>
//       {children}
//     </button>
//   );
// };
