import React from 'react'
import Profile from './Profile'
import Chirps from './Chirps'
import Users from './Users'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.viewChirps = this.viewChirps.bind(this)
    this.viewFollowers = this.viewFollowers.bind(this)

    this.state = {
      view: 'users'
    }
  }

  viewChirps() {
    this.setState({
      view: 'chirps'
    })
  }

  viewFollowers() {
    this.setState({
      view: 'users'
    })
  }

  render() {
    var view = this.state.view === 'chirps' ? <Chirps /> : <Users />

    return <main className="container">
      <br />
      <div className="row">
        <div className="col-sm-3">
          <Profile user={window.apiUser} viewChirps={this.viewChirps} viewFollowers={this.viewFollowers} />
        </div>
        <div className="col-sm-9">
          {view}
        </div>
      </div>
    </main>
  }
}

export default App
