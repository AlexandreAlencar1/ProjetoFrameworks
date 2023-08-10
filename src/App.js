import './App.css';
import { Component } from 'react';

class App extends Component {

  timeoutUpdate = null
  state = {
    counter: 0,
    posts: [
      {
        id: 1,
        title: 'Título 1',
        body: 'Corpo 1'
      },
      {
        id: 1,
        title: 'Título 2',
        body: 'Corpo 2'
      },
      {
        id: 1,
        title: 'Título 3',
        body: 'Corpo 3'
      },
      {
        id: 1,
        title: 'Título 4',
        body: 'Corpo 4'
      },
    ],
  };

  componentDidMount() { //executa apenas na criação do component
    this.handleTimeOut();

    // setTimeout(() => {
    //   this.setState({
    //     counter: 0,
    //     posts: [

    //     ],
    //   });
    // }, 2000)

  }

  componentDidUpdate() {//chama so pra dar update
    this.handleTimeOut();
  }

  componentWillUnmount(){
    clearTimeout(this.timeoutUpdate); //pro bagulho nao ficar rodando pra sempre
  }

  handleTimeOut() {
    const { posts, counter } = this.state;

    this.timeoutUpdate = setTimeout(() => {
      posts[0].title = "O titulo mudou..."
      this.setState({
        posts,
        counter: counter + 1
      })
    }, 2000)
  };

  render() {

    const { posts, counter } = this.state  //isso aqui é chamado de destructor 

    return (
      <div className="App">
        <h1>{counter}</h1>
        {posts.map((post) => ( //toda vez tem a arrowFunction afee
          <div key={post.id}>
            <h1>{post.title}</h1>
            <h3>{post.body}</h3>
          </div>

        ))}
      </div>


    );
  }
}

export default App;
