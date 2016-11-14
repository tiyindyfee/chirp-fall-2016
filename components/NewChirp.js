import React from 'react'

class NewChirp extends React.Component {
  constructor(props) {
    super(props)
    this.postChirp = this.postChirp.bind(this)

    this.state = {
      newChirp: '',
      updateChirps: props.updateChirps
    }
  }

  postChirp(e) {
    if (e.key === 'Enter') {
      var newChirp = this.state.newChirp

      this.setState({
        newChirp: ''
      })

      fetch(`${window.apiServer}/chirp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          api_token: window.apiToken,
          chirp: newChirp
        })
      })
      .then(response => response.json())
      .then(this.state.updateChirps)
    }
  }

  render() {
    return <div className="form-group">
      <input type="text" className="form-control" onChange={(e) => this.setState({newChirp: e.target.value})} value={this.state.newChirp} onKeyPress={this.postChirp} />
    </div>
  }
}

export default NewChirp
