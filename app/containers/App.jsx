import React, { PropTypes } from 'react';

import Header from 'components/Header';

import classNames from 'classnames/bind';
import styles from 'css/app';
const cx = classNames.bind(styles);

const App = ({children}) => {
  return (
    <div className={cx('app')}>
      <Header />
      {children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object
};

export default App;
