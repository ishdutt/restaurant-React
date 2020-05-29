import React from 'react'
import ContentLoader from 'react-content-loader'

export const LoadingMenu = props => (
  <ContentLoader
    speed={2}
    width={700}
    height={400}
    viewBox="0 0 700 300"
    backgroundColor="#f5f5f5"
    foregroundColor="#dbdbdb"
    {...props}
  >
    <rect x="25" y="140" rx="16" ry="16" width="268" height="222.6" />
    <rect x="25" y="100" rx="3" ry="3" width="700" height="4" />
    <rect x="412" y="172" rx="3" ry="3" width="102" height="7" />
    <rect x="402" y="150" rx="3" ry="3" width="178" height="6" />
    <rect x="405" y="196" rx="3" ry="3" width="178" height="6" />
    <rect x="416" y="220" rx="3" ry="3" width="102" height="7" />
    <rect x="405" y="242" rx="3" ry="3" width="178" height="6" />
    <rect x="25" y="60" rx="3" ry="3" width="209" height="30" />
  </ContentLoader>
)

