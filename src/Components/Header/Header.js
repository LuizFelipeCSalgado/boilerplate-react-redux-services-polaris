import React from 'react';
import PropTypes from 'prop-types';

import PageHeader from 'Components/PageHeader';

import './Header.scss';

function Header({ children }) {
  return (
    <header>
      <PageHeader />
      {children}
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Header.defaultProps = {
  children: null,
};

export default Header;
