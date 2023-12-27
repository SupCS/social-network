import React, { useState } from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import styles from "./users.module.css";

let Users = ({
  currentPage,
  totalUsersCount,
  pageSize,
  onPageChanged,
  users,
  onSearchChange,
  ...props
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputValue);
    onSearchChange(inputValue);
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit} style={{ marginBottom: "10px" }}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search by name..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className={styles.searchButton} type="submit">
          Search
        </button>
      </form>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
      />
      <div>
        {users
          .filter((u) =>
            u.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((u) => (
            <User
              isAuth={props.isAuth}
              user={u}
              followingInProgress={props.followingInProgress}
              key={u.id}
              unfollow={props.unfollow}
              follow={props.follow}
            />
          ))}
      </div>
    </div>
  );
};

export default Users;
