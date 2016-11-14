import React from 'react'
import User from './User'

class Users extends React.Component {
  constructor(props) {
    super(props)
    this.followUser = this.followUser.bind(this)

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    // fetch(`${window.apiServer}/users/index?api_token=${window.apiToken}`)
    // .then(response => response.json())
    // .then()
    // fetch(`${window.apiServer}/followees?api_token=${window.apiToken}&id=${window.apiUser.id}`)
    // .then(response => response.json())
    // .then(response => console.log(response))
    // .then(data => this.setState({users: data.users}))
  }

  followUser(e) {
    // 1. fetch
    // 2. change of user state
  }

  render() {
    const users = this.state.users.map((user, i) => <User user={user} key={i} followUser={this.followUser} />)

    return <div>
      <h1>Users</h1>
      <ul className="list-group">
        {users}
      </ul>
    </div>
  }
}

export default Users
