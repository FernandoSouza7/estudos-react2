import './index.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.handlerPClick = this.handlerPClick.bind(this);
    this.handlerAClick = this.handlerAClick.bind(this);

    this.state = {
      name: 'Matheus',
      counter: 0
    };
  }

  handlerPClick() {
      this.setState({ name: 'Fernando' });
  }

  handlerAClick(event) {
    event.preventDefault();
    const { counter } = this.state;
    this.setState({counter: counter + 1});
  }

  render() {
    const { name, counter } = this.state;

    return(
      <div className='mainContainer'>
          <p onClick={this.handlerPClick}>
            {name} {counter}
          </p>
          <a 
             onClick={this.handlerAClick}
             href="https://www.google.com/search?q=digimon&sxsrf=AOaemvJxi4CvTIvC8x7lJIRmMsFFdliDWg:1643119624153&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjB7pTMic31AhUKqpUCHYApAo4Q_AUoAnoECAEQBA&biw=1366&bih=657&dpr=1#imgrc=J62FAEjUv85UtM"
             target={'_blank'}
          >
            Digimon é maior que pokemon
          </a>
      </div>
    );
  }

  
}

export default App;
