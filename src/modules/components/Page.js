/*
 * A reusable page component that centers its children horizontally
 */

import React from 'react';

const menuHeight = '75px';
const footerHeight = '54px';

const pageStyle = {
  minHeight: `calc(100vh - ${menuHeight} - ${footerHeight})`,
  display: 'flex',
  justifyContent: 'center',
};

const pageContentStyle = {
  width: '800px',
  marginTop: '30px',
};

const Page = ({children}) => (
  <div style={pageStyle}>
    <div style={pageContentStyle}>{children}</div>
  </div>
);

export default Page;
