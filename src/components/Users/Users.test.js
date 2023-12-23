import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Users from "./Users";
import { BrowserRouter as Router } from "react-router-dom";
import fetchMock from "jest-fetch-mock";
fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks();
});

describe("Users Component", () => {
  const mockUsers = [
    {
      id: 1,
      name: "John Doe",
      status: "Active",
      followed: false,
      photos: { small: null },
    },
    {
      id: 2,
      name: "Jane Doe",
      status: "Inactive",
      followed: true,
      photos: { small: null },
    },
  ];

  it("renders Users component", () => {
    render(
      <Router>
        <Users
          users={mockUsers}
          pageSize={5}
          totalUsersCount={10}
          currentPage={1}
          onPageChanged={() => {}}
          onSearchChange={() => {}}
          followingInProgress={[]}
        />
      </Router>
    );

    expect(
      screen.getByPlaceholderText("Search by name...")
    ).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
  });

  it("allows to input search term", () => {
    render(
      <Router>
        <Users
          users={mockUsers}
          pageSize={5}
          totalUsersCount={10}
          currentPage={1}
          onPageChanged={() => {}}
          onSearchChange={() => {}}
          followingInProgress={[]}
        />
      </Router>
    );

    fireEvent.change(screen.getByPlaceholderText("Search by name..."), {
      target: { value: "John" },
    });
    expect(screen.getByPlaceholderText("Search by name...").value).toBe("John");
  });
  fetchMock.enableMocks();

  beforeEach(() => {
    fetchMock.resetMocks();
  });
});
