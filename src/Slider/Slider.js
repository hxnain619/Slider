import React from 'react';
import Cards from './Cards';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCard: 0,
      position: 0,
      cardStyle: {
        transform: 'translateX(0px)'
      },
      width: 0,
    };
  }
  componentWillMount() {
    let boxWidth = 308;
    this.setState({ width: boxWidth });
  }

    // func: click the slider buttons
    handleClick(type) {
      // get the card's margin-right
      let margin = window.getComputedStyle(document.getElementsByClassName("content")[0].firstChild).marginRight;
      margin = JSON.parse(margin.replace(/px/i, ''));

      const cardWidth = this.state.width; // the card's width
      const cardMargin = margin; // the card's margin
      const cardNumber = document.getElementsByClassName('content')[0].childElementCount; // the number of cards
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
      <div>
        <Cards cardStyle={this.state.cardStyle} />
        <div className='icon-btn'>
          <button onClick={() => this.handleClick('prev')}><i className='medium material-icons'>chevron_left</i></button>
          <button onClick={() => this.handleClick('next')}><i className='medium material-icons'>chevron_right</i></button>
        </div>
      </div>
    )
  }
}

export default Slider;