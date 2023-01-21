import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./Users.css";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const getUsers = async () => {
    setLoading(true);
    const res = await axios.get(
      ` https://reqres.in/api/users?page=${currentPage}`
    );
    setUsers(res.data.data);
    setPageCount(res.data.total_pages);
    setLoading(false);
  };
  useEffect(() => {
    setTimeout(() => {
      getUsers();
    }, 1500);
  }, [currentPage]);

  const currentPageData = users.map((user, index) => (
 
    <section class="services">

    <div class="box-container" >

        <div class="box">
            <i class="fas fa-pills"></i>
            <h3>medicine</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate
                exercitationem ut minima itaque iusto ipsum corrupti!</p>
        </div>
        <div class="box">
            <i class="far fa-eye"></i>
            <h3>lenses</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate
                exercitationem ut minima itaque iusto ipsum corrupti!</p>
        </div>
        <div class="box">
            <i class="fas fa-microscope"></i>
            <h3>microscope</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate
                exercitationem ut minima itaque iusto ipsum corrupti!</p>
        </div>
        <div class="box">
            <i class="fas fa-clinic-medical"></i>
            <h3>clinic</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate
                exercitationem ut minima itaque iusto ipsum corrupti!</p>
        </div>
        <div class="box">
            <i class="fas fa-users"></i>
            <h3>client</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate
                exercitationem ut minima itaque iusto ipsum corrupti!</p>
        </div>
        <div class="box">
            <i class="fas fa-crutch"></i>
            <h3>injiection</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate
                exercitationem ut minima itaque iusto ipsum corrupti!</p>
        </div>

    </div>

</section>
  ));
  const handlePageClick = ({ selected: selectedPage }) => {
    ;
  };
  return (
    <div className="container">
      
      {loading ? <div class="loader"></div> : currentPageData}
      

    

    </div>
  );
};

export default Users;

