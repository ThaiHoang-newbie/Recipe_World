import React from "react";

export default function User({
  id,
  username,
  email,
  full_name,
  birthday,
  profile_image,
  phone,
  followers,
  isActive,
  changeStatus,
}) {
  const handleStatusChange = () => {
    changeStatus(!isActive); 
  };

  return (
    <tr className="align-middle">
      <td>{id}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>{full_name}</td>
      <td>{birthday}</td>
      <td>{phone}</td>
      <td>{followers}</td>
      <td>
        <img
          src={profile_image}
          alt=""
          className="img-fluid object-fit"
          width={90}
          height={90}
        />
      </td>
      <td>
        {isActive ? (
          <button onClick={handleStatusChange} className="btn btn-danger">
            Ban
          </button>
        ) : (
          <button onClick={handleStatusChange} className="btn btn-success">
            Unban
          </button>
        )}
      </td>
    </tr>
  );
}
