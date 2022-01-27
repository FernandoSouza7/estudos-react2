import './index.css';
import { Component, useState } from "react";

class App extends Component {
  state = {
    counter: 0,
    posts: [
      {
        id:1,
        title: 'Title 1',
        body: 'body 1'
      },
      {
        id:2,
        title: 'Title 2',
        body: 'body 2'
      },
      {
        id:3,
        title: 'Title 3',
        body: 'body 3'
      },
    ]
  }

  componentDidMount() {
    this.handleTimeOut();
  }

  handleTimeOut() {
    const { posts, counter } = this.state;
    posts[0].title = 'The original title has changed!';

    setTimeout(() => {
      this.setState({ posts, counter: counter + 1 });
    }, 5000);
  }

  render() {
    const { posts, counter } = this.state;

    return(
      <div className='App'>
        <h1>{counter}</h1>
        {posts.map(post => (
           <div className='noNameYet' key={post.id}>
             <h1 >{post.title}</h1>
             <p>{post.body}</p>
           </div>
        ))}             
      </div>
    );
  }
}

export default App;
