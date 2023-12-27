import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import DialogItem from "./DialogItem";
import "@testing-library/jest-dom";

describe("DialogItem component", () => {
  // Тест 1: перевірка чи компонент відображає назву діалогу
  it("displays the dialog name", () => {
    render(
      <BrowserRouter>
        <DialogItem id="1" name="Test Dialog" />
      </BrowserRouter>
    );
    expect(screen.getByText("Test Dialog")).toBeInTheDocument();
  });

  // Тест 2: перевірка чи правильно формується шлях до діалогу
  it("links to the correct dialog path", () => {
    render(
      <BrowserRouter>
        <DialogItem id="1" name="Test Dialog" />
      </BrowserRouter>
    );
    expect(screen.getByRole("link")).toHaveAttribute("href", "/dialogs/1");
  });

  // Тест 3: перевірка стилю активного діалогу
  it("has correct active style for active dialog", () => {
    render(
      <BrowserRouter>
        <DialogItem id="1" name="Test Dialog" />
      </BrowserRouter>
    );
    const linkElement = screen.getByRole("link");
    fireEvent.click(linkElement);
    expect(linkElement).toHaveClass("activeDialog");
  });
});
