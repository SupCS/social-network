import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

describe("Navbar Component", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
  });

  const links = [
    { text: "Profile", to: "/profile" },
    { text: "Messages", to: "/dialogs" },
    { text: "Users", to: "/users" },
    { text: "News", to: "/news" },
    { text: "Music", to: "/music" },
    { text: "Settings", to: "/settings" },
  ];

  links.forEach((link) => {
    test(`should have a NavLink to "${link.to}" with text "${link.text}"`, () => {
      const navbarLink = screen.getByRole("link", { name: link.text });
      expect(navbarLink).toBeInTheDocument();
      expect(navbarLink).toHaveAttribute("href", link.to);
    });
  });
  test("active link should change color", () => {
    window.history.pushState({}, "", "/profile"); // Устанавливаем активный путь

    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const links = screen.getAllByRole("link", { name: "Profile" });
    const activeLink = links.find(
      (link) => link.getAttribute("aria-current") === "page"
    );
    expect(activeLink).toHaveClass("active"); // Здесь 'active' - имя класса для активной ссылки
  });
});
