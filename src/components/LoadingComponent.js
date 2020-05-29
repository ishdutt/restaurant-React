// import React from 'react';

// export const Loading = () => {
//     return(
//         <div className="col-12">
//             <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
//             <p>Loading . . .</p>
//         </div>
//     );
// };

import React from "react"
import ContentLoader from "react-content-loader" 

export const Loading = () => (
  <ContentLoader 
    speed={2}
    width={400}
    height={475}
    viewBox="0 0 400 475"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    {/* <circle cx="31" cy="31" r="15" />  */}
    
    <rect x="0" y="60" rx="2" ry="2" width="400" height="400" />
    <rect x="58" y="18" rx="2" ry="2" width="140" height="10" /> 
    <rect x="58" y="34" rx="2" ry="2" width="140" height="10" /> 
  </ContentLoader>
)