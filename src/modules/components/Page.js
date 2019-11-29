/*
 * A reusable page component that centers its children horizontally
 */

import React from 'react';
import PropTypes from 'prop-types';

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

const Page = ({children, wide}) => (
  <div style={{...pageStyle, ...(wide ? {width: '1200px'} : {})}}>
    <div style={pageContentStyle}>{children}</div>
  </div>
);

Page.propTypes = {
  wide: PropTypes.bool
}

export default Page;
