import {
  sendMessageCreator,
  setMessages,
  getDialogs,
} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { dialogsAPI } from "../../api/api";

const mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
    currentUserId: state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMessages: (userId) => {
      console.log("Getting messages for user:", userId);
      dialogsAPI.getMessages(userId).then((response) => {
        console.log("Messages received:", response.data);
        dispatch(setMessages(response.data));
      });
    },
    sendMessage: (userId, newMessageBody) => {
      dialogsAPI.sendMessage(userId, newMessageBody).then((response) => {
        dispatch(sendMessageCreator(response.data));
      });
    },

    getDialogs: () => {
      dialogsAPI.getDialogs().then((response) => {
        dispatch(getDialogs(response.data));
      });
    },
    // Дополнительные функции
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
