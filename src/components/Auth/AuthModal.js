import React from 'react';

class AuthModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {},
      openModal: false,
    }
  }
  componentDidUpdate(prevProps){
    if(this.props.openModal !== prevProps.openModal){
      this.setState({openModal: this.props.openModal})
    }
  }
  render(){
    return(
      <div></div>
    )
  }
}
