import React, { PropTypes } from 'react';

import classNames from 'classnames/bind';
import styles from 'css/components/thank-you-message';
const cx = classNames.bind(styles);

const ThankYouMessage = () => {
  return <div className={cx('thank-you-message')}>
    Thank you message goes here.
  </div>
}

export default ThankYouMessage;
