import React, { Component } from 'react';

export default class CreateProof extends Component {
  state = {
    text: ''
  };

  render() {
    const { onSubmit } = this.props;
    return (
      <form onSubmit={ event => {event.preventDefault(); onSubmit(this.state.text);  }  }>
        <h2>Create Proof</h2>
        <textarea value={this.state.text} onChange={ event => this.setState({text: event.target.value } )}>
        </textarea><br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
