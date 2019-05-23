import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'; 

// 모든 컴포넌트는 render를 가지고 있다. 
// render의 기능은 뭔가를 보여주는, 출력하는 기능이다. 
class App extends Component {

  // React 생명주기 
  // Render : componentWillMount() -> render() -> componentDidMount()
  // Update : Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
  
  // State 
  // Component 안에 state가 바뀔 때 마다 render가 발생한다.
  
  state = {
    // greeting: 'Hello',
    
  }


  componentWillMount = () => {
    console.log('will mount'); 
  }

  componentDidMount = () => {
    console.log('did mount'); 
    // setTimeout(() => {
    //   this.setState({
    //     greeting: 'Hello again!'
    //   })
    // }, 5000)

    // setTimeout(() => {
    //   this.setState({
    //     movies: [
    //       // 이전 state는 그대로 두고, 다음의 것을 추가하라는 것 
    //       // ... 이 없으면 이전의 영화 리스트는 모두 없어지고 새로운 영화만 나타나게 됨 
    //       ...this.state.movies, 
    //       {
    //         title: "GUARDIANS OF THE GALAXY2", 
    //         poster: "https://post-phinf.pstatic.net/MjAxNzA1MDJfMTQ1/MDAxNDkzNjc3MDY1NTk5.7CzKn-qdgdKupsBGgano7zjPsz5K_VyK2edMxqXaOJsg.DqbcL2o5uSceBXF-abho1_2-_JbN5IXZc-TZEBAE-CEg.JPEG/movie_image.jpg?type=w1200"
    //       }
    //     ]
    //   })
    // },5000)

    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "IRON MAN",
            poster: "http://mblogthumb3.phinf.naver.net/20141117_174/kimmisung08_1416159902342OA03t_JPEG/Iron_Man_poster%2Cmovie_poster%2C%BE%C6%C0%CC%BE%F0%B8%C7_%C6%F7%BD%BA%C5%CD%2C%BF%B5%C8%AD_%C6%F7%BD%BA%C5%CDdjfkl3jjdlkjflsdkf.jpg?type=w2"
          },
          {
            title: "SPIDER MAN : HomeComing",
            poster: "https://upload.wikimedia.org/wikipedia/ko/c/cb/%EC%8A%A4%ED%8C%8C%EC%9D%B4%EB%8D%94%EB%A7%A8_%ED%99%88%EC%BB%A4%EB%B0%8D.jpg"
          },
          {
            title: "THOR : Ragnarok",
            poster: "http://image.chosun.com/sitedata/image/201709/05/2017090500598_0.jpg"
          },
          {
            title: "AVENGERS : EndGame",
            poster: "https://file.mk.co.kr/meet/neds/2019/04/image_readtop_2019_245869_15557132063718502.jpg"
          }, 
          {
            title: "GUARDIANS OF THE GALAXY2", 
            poster: "https://post-phinf.pstatic.net/MjAxNzA1MDJfMTQ1/MDAxNDkzNjc3MDY1NTk5.7CzKn-qdgdKupsBGgano7zjPsz5K_VyK2edMxqXaOJsg.DqbcL2o5uSceBXF-abho1_2-_JbN5IXZc-TZEBAE-CEg.JPEG/movie_image.jpg?type=w1200"
          }
        ]
      })
    }, 5000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies;
  }

  render() {
    console.log('render');
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
