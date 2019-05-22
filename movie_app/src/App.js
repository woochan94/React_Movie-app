import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'; 

const movies = [
  "IRON MAN", 
  "SPIDER MAN : HomeComing", 
  "THOR : Ragnarok", 
  "AVENGERS : EndGame"
]

const movieImages = [
  "http://mblogthumb3.phinf.naver.net/20141117_174/kimmisung08_1416159902342OA03t_JPEG/Iron_Man_poster%2Cmovie_poster%2C%BE%C6%C0%CC%BE%F0%B8%C7_%C6%F7%BD%BA%C5%CD%2C%BF%B5%C8%AD_%C6%F7%BD%BA%C5%CDdjfkl3jjdlkjflsdkf.jpg?type=w2",
  "https://upload.wikimedia.org/wikipedia/ko/c/cb/%EC%8A%A4%ED%8C%8C%EC%9D%B4%EB%8D%94%EB%A7%A8_%ED%99%88%EC%BB%A4%EB%B0%8D.jpg",
  "http://image.chosun.com/sitedata/image/201709/05/2017090500598_0.jpg",
  "https://file.mk.co.kr/meet/neds/2019/04/image_readtop_2019_245869_15557132063718502.jpg"
]

// 모든 컴포넌트는 render를 가지고 있다. 
// render의 기능은 뭔가를 보여주는, 출력하는 기능이다. 
class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movies[0]} poster={movieImages[0]}/>
        <Movie title={movies[1]} poster={movieImages[1]}/>
        <Movie title={movies[2]} poster={movieImages[2]}/>
        <Movie title={movies[3]} poster={movieImages[3]}/>
      </div>
    );
  }
}

export default App;
