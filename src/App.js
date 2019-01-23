import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDataFromServer } from './actions/dataActions';
import { MeinSectionDivSV } from './lib/styledComponents';
import './App.css';
import BuildingView from './components/BuildingView';

class App extends Component {

  componentDidMount() {
    this.props.fetchDataFromServer();
  }

  render() {
    const { isFetching, fetchingError, buildingsData } = this.props;

    const buildingView = buildingsData && buildingsData.length > 0 ? buildingsData.map((item, i) => {
      return (
        <BuildingView key={i} buildingToShow={item}/>
      );
    }) : <p>all buildings saled:)</p>;

    return (

      <MeinSectionDivSV>
        <h2>Welcome</h2>
        { isFetching && <p>Loading...</p>}
        { fetchingError && <p>Error, reload page...</p>}
        {buildingView}
      </MeinSectionDivSV>

    );
  }
}


const mapStateToProps = (state) => {

  return {
    isFetching: state.isFetching,
    fetchingError: state.fetchingError,
    buildingsData: state.buildingsData,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    fetchDataFromServer: () => { dispatch(fetchDataFromServer()); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
