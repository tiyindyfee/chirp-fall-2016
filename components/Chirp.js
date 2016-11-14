import React from 'react'

const Chirp = (props) => {
  var photo = props.file ? window.apiHost + props.file : 'http://robohash.org/default'

  return <li className="list-group-item">
    <img src={photo} style={{width:'60px'}} className="thumbnail" />
    {props.chirp}
  </li>
}

export default Chirp
