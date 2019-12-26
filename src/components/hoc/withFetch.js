import React, { Component } from 'react';

import Server from '../../firebase-server';
import Loader from '../modules/loader';
import ErrorScreen from '../modules/errorScreen';

export default (Wrapped) => (requestName, isPath) => {
  return class extends Component {
	  state = {
    loading: true,
    error: false,
    errorMsg: '',
    data: {}
  }
	componentDidMount () {
    const path = isPath && this.props.match.params.id
    Server[requestName](path).then((data) => {
      this.setState({
          loading: false,
          error: false,
          errorMsg: '',
          data: data.data()
        });
    }).catch((error) => {
      console.log(error);
      this.setState({
        loading: false,
        error: true,
        errorMsg: error.message,
        data: {}
      });
    });
	}

	render () {
		if(this.state.loading)   
      return (<Loader />);
    if(this.state.error)
      return (<ErrorScreen message={this.state.errorMsg}/>);
    return (
      <Wrapped {...this.props} data={this.state.data}/>
		);
	}
}
}