import React from 'react'

const User = (props) => {
  console.log(props.user)
  return <li className="list-group-item">
    <div className="row">
      <div className="col-sm-9">
        {props.user.name}
      </div>
      <div className="col-sm-3">
        <button type="button" className="btn btn-default btn-sm btn-block" onClick={props.followUser}>Follow</button>
      </div>
    </div>
  </li>
}

export default User
