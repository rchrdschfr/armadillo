import React, { Component, PropTypes } from 'react';

import classNames from 'classnames/bind';
import styles from 'css/components/header';
const cx = classNames.bind(styles);

const Header = () => {
  return <div className="container">
    <div className={cx('header')}>
      <div className={cx('header__logo')}>
        <a href="http://www.tradegecko.com"><img src="https://resources.tradegecko.com/hs-fs/hub/407937/file-2215222386-png/tradegecko_images/logo2x.png" width="236"/></a>
      </div>
      <ul className={cx('header__nav')}>
        <li><a href="#">Overview</a></li>
        <li><a href="#">Add-Ons</a></li>
        <li><a href="#">Customers</a></li>
      </ul>
    </div>
  </div>
}

export default Header;
