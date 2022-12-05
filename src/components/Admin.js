import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
  const url = process.env.URL || "https://gold-poised-fox.cyclic.app";
  const [files, setFiles] = useState()
  const load = () => {
    fetch(`${url}/api/files`)
      .then(res => res.json())
      .then(data => setFiles(data))
  }
  useEffect(() => {
    load();
  }, [])
  var i = 1;

  return (
    <div>
      <header><Link to="/">Home Page</Link></header>
      <h1>Admin Panel</h1>
      <h2>List of Collection</h2>
      <table>

        <thead>
          {files ? (<tr>
            <th>S.No.</th>
            <th>Candidate Name</th>
            <th>Document Name</th>
          </tr>) : (<tr><th>No Files to Display</th></tr>)
          }
        </thead>

        <tbody>
          {
            files && Array.from(files).map(element => {

              return (<tr key={element._id}>
                <td>{i++}</td>
                <td>{element.metadata.name}</td>
                <td>{element.filename}</td>
              </tr>)
            })
          }
        </tbody>

      </table>
    </div >
  )
}

export default Admin