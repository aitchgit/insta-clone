import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: []
    }
  }

  componentDidMount() {
    this.setState({posts: dummyData})
  }

  searchPostsHandler = (event) => {
    this.setState({ filteredPosts: event.target.value })
  }

  render() {
    const posts = this.state.posts.filter(post => {
      return post.username.toLowerCase().includes(this.state.filteredPosts)
    })
    return (
      <div className="App">
        <SearchBar searchChange={this.searchPostsHandler} />
        <PostContainer postData={posts} />
      </div>
    );
  }
}

export default App;
