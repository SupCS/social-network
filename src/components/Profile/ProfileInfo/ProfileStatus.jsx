import React from "react";
// // import classes from "./ProfileInfo.module.css";
// import { useState } from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
    console.log("componentDidUpdate");
  }

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status || "This user has no status yet"}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              value={this.state.status}
            ></input>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;

// const ProfileStatus = () => {
//   const [editMode, setEditMode] = useState(false);

//   const editStatus = () => {
//     setEditMode(!editMode);
//   };

//   return (
//     <div>
//       {editMode ? (
//         <div>
//           <input
//             autoFocus
//             onBlur={editStatus}
//             value={"Write your new status here"}
//           />
//         </div>
//       ) : (
//         <div>
//           <span onDoubleClick={editStatus}>
//             Hello, thats a default status! Double Click to change
//           </span>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfileStatus;
