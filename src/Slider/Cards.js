import React from 'react';
import './styles.css';

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardsContent: []
        }
    }


    componentDidMount() {

        fetch('http://localhost:3001/cards')
            .then(res => {
                return res.json();
            })
            .then(data => {
                this.setState({
                    cardsContent: data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    ColorChange = (e) => {
        var heart = e.currentTarget;
        if (heart.style.color !== 'green') {
            heart.style.color = 'green'
        } else {
            heart.style.color = 'grey'
        }
    }
    render() {
        const cards = this.state.cardsContent;
        return (
            <div className='content'>
                {cards.map((data) => {
                    return (<div className="card"
                    key={data.id} style={this.props.cardStyle}>
                    <div className="card-image waves-effect waves-block waves-light">
                        <a href={data.href} >
                            <img className="activator" src={data.image_url} alt='' />

                            <div className="row valign-wrapper header">
                                <div className="col s3">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGTVf63Vm3XgOncMVSOy0-jSxdMT8KVJIc8WiWaevuWiPGe0Pm" alt="" className="circle responsive-img" />
                                </div>
                                <div className="col s10">
                                    <span className='title' >{data.title}</span>
                                    <br />
                                    <span className='subTitle'>{data.subtitle}</span>

                                </div>
                            </div>
                            <p className='para'>{data.text}</p>
                        </a>
                    </div>
                    <div className='card-content heart'>
                        <span className='waves-effect waves-light icon' onClick={(e) => this.ColorChange(e)}>
                            <i className='small material-icons'>favorite</i>
                        </span>
                    </div>
                </div>)
            })
            }
            </div>

        )
    }

}
export default Cards;