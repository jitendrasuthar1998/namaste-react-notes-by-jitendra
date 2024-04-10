import React from 'react';

const WithFetch = (WrappedComponent) => {
  class DataFetch extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        movies: [],
      };
    }

    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/albums')
        .then((response) => response.json())
        .then((data) => {
            console.log('data from jsonplaceholder',data );
          this.setState({movies:data})
        });
    }

    render() {
      return (
        <>
          {this.state.movies.length > 0 && (
            <WrappedComponent movies={this.state.movies} />
          )}
        </>
      );
    }
  }

  DataFetch.displayName = `DataFetch(${DataFetch.name})`;

  return DataFetch;
};

export default WithFetch;
