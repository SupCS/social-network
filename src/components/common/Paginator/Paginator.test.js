import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Paginator from "./Paginator";

describe("Paginator component tests", () => {
  const totalUsersCount = 50;
  const pageSize = 5;

  test("should display the correct number of pages", () => {
    render(
      <Paginator
        currentPage={1}
        onPageChanged={() => {}}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
      />
    );
    const pages = screen.getAllByText(/^[1-9][0-9]*$/); // Regex to match only page numbers
    let expectedNumberOfPages = Math.min(
      6,
      Math.ceil(totalUsersCount / pageSize)
    );
    expect(pages).toHaveLength(expectedNumberOfPages);
  });

  test("should handle page change on next button click", () => {
    const handlePageChange = jest.fn();
    render(
      <Paginator
        currentPage={1}
        onPageChanged={handlePageChange}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
      />
    );
    fireEvent.click(screen.getByText(">"));
    expect(handlePageChange).toHaveBeenCalledWith(2);
  });

  test("should handle page change on previous button click", () => {
    const handlePageChange = jest.fn();
    render(
      <Paginator
        currentPage={2}
        onPageChanged={handlePageChange}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
      />
    );
    fireEvent.click(screen.getByText("<"));
    expect(handlePageChange).toHaveBeenCalledWith(1);
  });

  test("should change page on input enter", () => {
    const handlePageChange = jest.fn();
    render(
      <Paginator
        currentPage={1}
        onPageChanged={handlePageChange}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
      />
    );
    const input = screen.getByRole("spinbutton");
    fireEvent.change(input, { target: { value: "3" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });
    expect(handlePageChange).toHaveBeenCalledWith(3);
  });
});
