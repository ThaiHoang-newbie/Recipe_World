import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "./receivers/User";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
      axios.get("http://127.0.0.1:8000/api/getAllObtainers").then((res) => {
        const data = res.data;
        setUsers(data);
      }).catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {users && users.length > 0 ? (
        <div className="container-fluid">
          <table className="table table-responsive">
            <thead>
              <tr>
                <th>#</th>
                <th>Username</th>
                <th>Email</th>
                <th>Full Name</th>
                <th>Birthday</th>
                <th>Phone</th>
                <th>Followers</th>
                <th>Image</th>
                <th>Option</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <User
                  key={user.id}
                  id={index + 1}
                  username={user.username}
                  email={user.email}
                  full_name={user.full_name}
                  birthday={user.date_of_birth}
                  phone={user.phone_number}
                  followers={user.followers_count}
                  profile_image={user.profile_image_url}
                  isActive={user.isActive}
                />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No users found.</p>
      )}
    </>
  );
}
