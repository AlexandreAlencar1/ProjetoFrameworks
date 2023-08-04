
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {//criamos um estado de posts, dentro dele um array de objetos
    posts: [
      {
        id: 1,
        title: "Titulo 1 ",
        body: "Corpo 1",
      },
      {
        id: 2,
        title: "Titulo 2 ",
        body: "Corpo 2",
      },
      {
        id: 3,
        title: "Titulo 3 ",
        body: "Corpo 3",
      }
    ]
  }

  render() {

    const { posts } = this.state;

    return (
      <div className="App">
        {posts.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <h3>{post.body}</h3>
          </div>
        ))
        }
      </div>
    );
  }
}

export default App;
