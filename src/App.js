import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDataFromServer } from './actions/dataActions';
import './App.css';
import BuildingsView from './components/BuildingsView';

class App extends Component {

  componentDidMount(){
    this.props.fetchDataFromServer()
  }

  render() {
    const { isFetching, fetchingError, buildingsData } = this.props;

    return (

      <div>
        <h2>Welcome</h2>
          { isFetching && <p>Loading...</p>}
          { fetchingError && <p>Error, reload page...</p>}
          <BuildingsView buildingsData={buildingsData}/>
        </div>

    );
  }
}


const mapStateToProps = (state) => {

  return {
    isFetching: state.isFetching,
    fetchingError: state.fetchingError,
    buildingsData: state.buildingsData
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    fetchDataFromServer: () => {dispatch(fetchDataFromServer());},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
