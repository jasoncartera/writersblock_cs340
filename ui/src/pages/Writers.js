import React from 'react';
import { Link } from "react-router-dom";


function Writers() {
  return (
    <>
      <div className="Entity-header">
        <h1>Manage Writers</h1>
        <Link to="/">Home</Link>
      </div>
      <div className="Entity-page">

        <div className="right-panel">
          <form>
            <label for="writer-search">Search Writers by Username</label>
            <input type="text" name="writer-search" id="writer-search"></input>
          </form>
          <table className="Entity-page-table">
            <thead>
              <tr calssName="Entity-page-row">
                <th>Id</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Photo</th>
                <th>DateJoined</th>
              </tr>
            </thead>
            <tbody>
              <tr className="Entity-page-row">
                <td>1</td>
                <td>Placeholder</td>
                <td>Placeholder</td>
                <td>/path</td>
                <td>2022-02-05</td>
                <td><button>Delete</button></td>
                <td><button>Update</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="left-panel">
          <form className="Entity-page-form" id="add-writer-form">
            <label for="writer-input-username">Username:</label>
            <input type="text" name="writer-input-username" id="writer-input-username"></input>

            <label for="writer-input-email">Email:</label>
            <input type="text" name="writer-input-email" id="writer-input-email"></input>

            <label for="upload-photo">Upload photo:</label>
            <input type="file" name="writer-upload-photo" id="writer-upload-photo"></input>

            <label for="writer-date-joined">Date Joined:</label>
            <input type="date" name="writer-date-joined" id="writer-date-joined"></input>

            <input type="submit"></input>
          </form>
        </div>
      </div>
    </>
  );
}

export default Writers;