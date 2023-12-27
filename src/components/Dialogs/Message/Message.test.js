/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render, screen } from "@testing-library/react";
import Message from "./Message";
import "@testing-library/jest-dom";

describe("Message component", () => {
  const testMessage = "Hello, World!";
  const testSenderId = "123";
  const testSenderName = "John";
  const testCurrentUserId = "123";

  // Перевірка відображення тексту повідомлення
  it("displays the correct message text", () => {
    render(
      <Message
        message={testMessage}
        senderId={testSenderId}
        senderName={testSenderName}
        currentUserId={testCurrentUserId}
      />
    );
    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });

  // Перевірка відображення імені автора повідомлення
  it("displays the correct author name", () => {
    render(
      <Message
        message={testMessage}
        senderId={testSenderId}
        senderName={testSenderName}
        currentUserId={testCurrentUserId}
      />
    );
    expect(screen.getByText("You:")).toBeInTheDocument();
  });

  // Перевірка стилізації повідомлення
  it("applies correct style based on sender", () => {
    const { container } = render(
      <Message
        message={testMessage}
        senderId={testSenderId}
        senderName={testSenderName}
        currentUserId={testCurrentUserId}
      />
    );
    const messageElement = container.firstChild;
    expect(messageElement).toHaveStyle("textAlign: right");
  });
});
