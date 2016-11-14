import React from 'react'

const Profile = (props) => <aside>
  <img src={window.apiHost + props.user.file} className="thumbnail" style={{width: '100%'}} />
  <h2>{props.user.name}</h2>
  <p>{props.user.email}</p>
  <button type="button" className="btn btn-default btn-sm btn-block" onClick={props.viewChirps}>Chirps</button>
  <button type="button" className="btn btn-default btn-sm btn-block" onClick={props.viewFollowers}>Followers</button>
</aside>

export default Profile
