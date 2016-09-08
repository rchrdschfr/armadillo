import React, { Component, PropTypes } from 'react';

import classNames from 'classnames/bind';
import styles from 'css/components/header';
const cx = classNames.bind(styles);

const Header = () => {
  return <div className={cx('header')}>
    <div className="container">
      <h1>Header</h1>
    </div>
  </div>
}

export default Header;
