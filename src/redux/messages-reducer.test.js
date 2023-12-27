import messagesReducer, {
  setMessages,
  sendMessageCreator,
  getDialogs,
} from "./messages-reducer";

describe("messagesReducer", () => {
  const initialState = {
    dialogs: [],
    messages: [],
  };

  it("should handle initial state", () => {
    expect(messagesReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle SET_MESSAGES", () => {
    const messages = [{ id: 1, text: "Test Message" }];
    const action = setMessages(messages);
    const expectedState = { ...initialState, messages: messages };

    expect(messagesReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle SEND_MESSAGE", () => {
    const message = { id: 2, text: "New Message" };
    const action = sendMessageCreator(message);
    const expectedState = {
      ...initialState,
      messages: [...initialState.messages, message],
    };

    expect(messagesReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle GET_DIALOGS", () => {
    const dialogs = [{ id: 1, name: "Dialog 1" }];
    const action = getDialogs(dialogs);
    const expectedState = { ...initialState, dialogs: dialogs };

    expect(messagesReducer(initialState, action)).toEqual(expectedState);
  });
});
