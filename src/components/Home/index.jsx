/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-useless-constructor */
import { loadPosts } from "../../utils/load-posts";
import { Button } from "../Button";
import { PostCard } from "../PostCard";
import "./styles.css";

const [posts, setPosts] = useState 
{
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 10,
    searchValue: "",
  };

  // fetch aqui
  // componentDidMount() { //funcao exclusiva pra componente baseado em classe
  //   this.loadPosts();
  // }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const photosAndPosts = await loadPosts();

    this.setState({
      posts: photosAndPosts.slice(page, postsPerPage),
      allPosts: photosAndPosts,
    });
  };

  loadMorePosts = () => {
    const { page, postsPerPage, allPosts, posts } = this.state;

    const nextPage = page + postsPerPage;

    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    this.setState({ posts: [...posts, ...nextPosts], page: nextPage });
  };

  handleSearch = (e) => {//pra acessar oque ta aqui dentro
    const {value} = e.target;
    this.setState({searchValue: value});
 //   console.log(this.state.searchValue);
  }

  return (
    <section className="container">
        <input 
        type="text"
        id="txtSearch" 
        name="name" 
        placeholder="Search..." 
        onChange={this.handleSearch} 
        value={searchValue} />
        
      <div className="posts">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <Button text="Load more posts" action={this.loadMorePosts} />
    </section>
  );

  // render() {//rendeliza a pag toda
  //   const { posts, searchValue } = this.state;
  //   const filteredPosts = !!searchValue
  //   ? posts.filter((post) => {
  //     return post.title.toLowerCase().includes(searchValue.toLowerCase());
  //   })
  //   : posts;
  // }
}

export default Home;