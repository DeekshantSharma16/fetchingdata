import React, { useEffect, useState } from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setposts] = useState();
  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=2").then((res) => {
      setposts(res.data);
    });
  }, []);
  return (
    <div>
      <h1>
        {!posts ? (
          "no data found"
        ) : (
          <table>
            <thead>
              <tr>
                      <th>ID</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Profile Picture</th>
              </tr>
            </thead>
            <tbody>
                    {
                            posts.map((post, index) =>(
                                    <tr key={index}>
                                            <td>{post.id}</td>
                                            <td>{post.first_name}</td>
                                            <td>{post.last_name}</td>
                                            <td>{post.email}</td>
                                            <td>{post.avatar}</td>
                                    </tr>
                            ))
                    }
            </tbody>
          </table>
        )}
      </h1>
    </div>
  );
};

export default Posts;
