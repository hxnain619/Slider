import React from 'react';
import Content from './Content';
import RightIcon from '@material-ui/icons/ArrowForwardIosRounded';
import LeftIcon from '@material-ui/icons/ArrowForwardIosRounded';

import './styles.css';
import Data from '../db.json';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCard: 0,
      position: 0,
      cardStyle: {
        transform: 'translateX(0px)',
        transition: 'transform 1s ease-in'
      },
      width: 0,
    };
  }

  componentDidMount() {
    let boxWidth = document.getElementById("card").clientWidth;
    this.setState({ width: boxWidth });
  }

  // func: click the slider buttons
  handleClick(type) {
    // get the card's margin-right
    let margin = window.getComputedStyle(document.getElementById("card")).marginRight;
    margin = JSON.parse(margin.replace(/px/i, ''));

    const cardWidth = this.state.width; // the card's width
    const cardMargin = margin; // the card's margin
    const cardNumber = Data.cards.length; // the number of cards
    let currentCard = this.state.currentCard; // the index of the current card
    let position = this.state.position; // the position of the cards

    // slide cards
    if (type === 'next' && currentCard < cardNumber - 1) {
      currentCard++;
      position -= (cardWidth + cardMargin);
    } else if (type === 'prev' && currentCard > 0) {
      currentCard--;
      position += (cardWidth + cardMargin);
    }
    this.setCard(currentCard, position);
  }

  setCard(currentCard, position) {
    this.setState({
      currentCard: currentCard,
      position: position,
      cardStyle: {
        transform: `translateX(${position}px)`,
        transition: 'transform .3s ease-out'
      }
    })
  }

  render() {
    return (
      <div className="cards-slider">
        <div className="slider-btns">
          <button className="slider-btn btn-l" onClick={() => this.handleClick('prev')}><LeftIcon className='leftIcon' /></button>
          <button className="slider-btn btn-r" onClick={() => this.handleClick('next')}><RightIcon /></button>
        </div>
        <Content cardStyle={this.state.cardStyle} />
      </div>
    )
  }
}

export default Display;