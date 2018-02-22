import React from 'react';
import ReactDOM from 'react-dom';

function Home () {
  
    return (
      <div className="title">
      <h1>Movie Titles</h1>
      {this.props.movies.title.map((movie) => {})}
      </div>
    );
  
}

ReactDOM.render(<Home />, document.getElementById('root'));