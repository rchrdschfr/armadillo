import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import ThankYouMessage from 'components/ThankYouMessage';
import ButtonGame from 'components/ButtonGame';

import classNames from 'classnames/bind';
import styles from 'css/components/thank-you';
const cx = classNames.bind(styles);

import { buttonClick } from 'actions/button';

class ThankYou extends Component {
  render() {
    const { numClicks, buttonClick } = this.props;

    return <div className={cx('container')}>
      <ThankYouMessage />
      <ButtonGame onClickButton={buttonClick} numClicks={numClicks} />
    </div>
  }
}

export default connect(
  (state) => {
    return {
      numClicks: state.button.numClicks
    }
  }, {
    buttonClick
  })(ThankYou);
