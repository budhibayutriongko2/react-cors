import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    name: '',
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      code: this.state.name,
      api: '/tippers-util/api/v2/getParameter'
    };

    const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer 985224a6-636a-4472-abd4-dfb649b811b1'
    }

    axios.post('https://dev-tippers.homecredit.co.id/tippers-auth/routes/postApi',  user, {
        headers}) 
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            code:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}