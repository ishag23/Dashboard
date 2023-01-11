import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Data from './Data';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {useHistory} from 'react-router-dom';


const Dashboard = () => {
  let history = useHistory();

  const handleDelete = (id) => {
    var index = Data.map(function(e){
      return e.id
    }).indexOf(id);
    Data.splice(index,1);
    history('/admin/Dashboard');
  };
  return (
    
    <React.Fragment>
    <div class="container ">
      <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
        <div class="row ">
          <div
            class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred"
            style={{ color: "green" }}
          >
            <h2>
              <b>Bootstrap Table</b>
            </h2>
          </div>
          <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
            <Button variant="primary" onClick={() => {
            history.push("/admin/Dashboard");
          }}>
              Add New
            </Button>
          </div>
        </div>
        <div class="row">
          <div class="table-responsive ">
            <table class="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Contact</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {Data.map((row) => {
                  return(
                    <tr>
                    <td>{row.Name}</td>
                    <td>{row.Age}</td>
                    <td>{row.Contact}</td>
                    <td>{row.Email}</td>
                    <td>
                    <DropdownButton id="dropdown-basic-button-black" title="">
                    <Dropdown.Item href="" onClick={() => handleDelete(row.id)}>Delete</Dropdown.Item>
                    <Dropdown.Item href="">Edit</Dropdown.Item>
                    <Dropdown.Item href="">Action3</Dropdown.Item>
                    </DropdownButton>
                    </td>
                  </tr>
                  );
                })
              }
               
              </tbody>
            </table>
          </div>
        </div>

        </div>
      </div>


    </React.Fragment>
  );
};

export default Dashboard;
