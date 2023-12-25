import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  // Тест 1: Перевірка що стан з пропсів знаходиться в стейті
  it("status from props should be in the state", () => {
    const status = "Test status";
    render(<ProfileStatus status={status} />);
    expect(screen.getByText(status)).toBeInTheDocument();
  });

  // Тест 2: Перевірка відображення спан зі статусом після створення
  it("after creation span with status should be displayed", () => {
    render(<ProfileStatus status="Test status" />);
    expect(screen.getByText(/Test status/)).toBeInTheDocument();
  });

  // Тест 3: Перевірка що спан містить вірний статус
  it("after creation span should contain correct status", () => {
    const status = "Test status";
    render(<ProfileStatus status={status} />);
    expect(screen.getByText(status)).toBeInTheDocument();
  });

  // Тест 4: Перевірка що після створення інпута його немає на сторінці
  it("after creation input should not be displayed", () => {
    render(<ProfileStatus status="Test status" />);
    expect(screen.queryByRole("textbox")).toBeNull();
  });

  // Тест 5: Перевірка відображення інпута замість спан
  it("input should be displayed in editMode instead of span", async () => {
    render(<ProfileStatus status="Test status" isOwner={true} />);
    fireEvent.doubleClick(screen.getByText(/Test status/));
    await waitFor(() => {
      expect(screen.queryByRole("textbox")).toBeInTheDocument();
    });
    expect(screen.queryByText(/Test status/)).toBeNull();
  });

  // Тест 6: Перевірка виклику колбеку
  it("callback should be called", async () => {
    const mockUpdateStatus = jest.fn();
    render(
      <ProfileStatus
        status="Test status"
        updateStatus={mockUpdateStatus}
        isOwner={true}
      />
    );
    fireEvent.doubleClick(screen.getByText(/Test status/));
    await waitFor(() => {
      fireEvent.blur(screen.getByRole("textbox"));
    });
    expect(mockUpdateStatus).toHaveBeenCalled();
  });
});
