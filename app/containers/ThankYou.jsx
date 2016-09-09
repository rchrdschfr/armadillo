import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Konami from 'react-konami';

import ThankYouMessage from 'components/ThankYouMessage';
import ButtonGame from 'components/ButtonGame';

import classNames from 'classnames/bind';
import styles from 'css/components/thank-you';
const cx = classNames.bind(styles);

import { buttonClick, revealGame } from 'actions/button';

class ThankYou extends Component {
  render() {
    const { numClicks, buttonClick, revealGame, showGame } = this.props;

    return <div className={cx('container')}>
      <ThankYouMessage />
      
      <Konami easterEgg={revealGame} />
      <ButtonGame onClickButton={buttonClick} numClicks={numClicks} showGame={showGame} />
    </div>
  }
}

export default connect(
  (state) => {
    return {
      numClicks: state.button.numClicks,
      showGame: state.button.showGame
    }
  },
  { buttonClick, revealGame }
)(ThankYou);
