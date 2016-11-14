import React from 'react'
import NewChirp from './NewChirp'
import Chirp from './Chirp'

class Chirps extends React.Component {
  constructor(props) {
    super(props)
    this.updateChirps = this.updateChirps.bind(this)

    this.state = {
      chirps: []
    }
  }

  componentDidMount() {
    this.updateChirps()
  }

  updateChirps() {
    fetch(`${window.apiServer}/all?api_token=${window.apiToken}`)
    .then(response => response.json())
    // .then(response => console.log(response))
    .then(data => this.setState({chirps: data.posts}))
  }

  render() {
    const chirps = this.state.chirps.map((chirp, i) => <Chirp file={chirp.file} chirp={chirp.chirp} key={i} />)

    return <div>
      <NewChirp updateChirps={this.updateChirps} />
      <ul className="list-group">
        {chirps}
      </ul>
    </div>
  }
}

export default Chirps
