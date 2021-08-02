import React, { useEffect, useState } from 'react'
import axios from 'axios'
import _ from 'lodash'
const pageSize = 10
const Posts = () => {
  const [posts, setposts] = useState()
  const [pagination, setPagination] = useState()
  useEffect(() => {
    axios.get('https://reqres.in/api/users?page=2').then((res) => {
      setposts(res.data)
      setPagination(_(res.data).slice(0).take(pageSize).value())
    })
  }, [])
  const pageCount = posts ? Math.ceil(posts.length / pageSize) : 0
  if (pageCount === 1) return null
  const pages = _.range(1, pageCount + 1)
  return (
    <>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Profile Picture</th>
            </tr>
          </thead>

          {pagination ? (
            <tbody key={pagination.id}>
              {posts.data.map((content) => (
                <tr key={content.id}>
                  <td>{content.id}</td>
                  <td>{content.first_name}</td>
                  <td>{content.last_name}</td>
                  <td>{content.email}</td>
                  <td>{content.avatar}</td>
                </tr>
              ))}
            </tbody>
          ) : (
            'no data found'
          )}
        </table>
        <nav className="d-flex justify-content-center">
          <ul className="pagination">
            {pages.map((page) => (
              <li className="page-link">{page}</li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Posts
