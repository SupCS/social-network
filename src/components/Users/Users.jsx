import React from "react";
import styles from "./users.module.css";

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
    {
      id: 1,
      photoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
      followed: false,
      fullName: "Dmytro",
      status: "I am the boss",
      location: { city: "Kyiv", country: "Ukraine" },
    },
    {
      id: 2,
      photoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
      followed: true,
      fullName: "Olexandr",
      status: "I am his brother",
      location: { city: "Sumy", country: "Ukraine" },
    },
    {
      id: 3,
      photoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
      followed: false,
      fullName: "Katerina",
      status: "His wife",
      location: { city: "Amsterdam", country: "Netherlands" },
    },
    {
      id: 4,
      photoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
      followed: false,
      fullName: "Nataliia",
      status: "Mother",
      location: { city: "Cologne", country: "Germany" },
    },
    {
      id: 5,
      photoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
      followed: false,
      fullName: "Serhiy",
      status: "Father",
      location: { city: "Yerevan", country: "Armenia" },
    },
  ]);
  };
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={styles.userPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
