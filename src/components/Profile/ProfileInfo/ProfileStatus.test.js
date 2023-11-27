import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  // Тест 1: Проверка, что статус из пропсов находится в состоянии
  it("status from props should be in the state", () => {
    const status = "Test status";
    render(<ProfileStatus status={status} />);
    expect(screen.getByText(status)).toBeInTheDocument();
  });

  // Тест 2: Проверка отображения span со статусом после создания
  it("after creation span with status should be displayed", () => {
    render(<ProfileStatus status="Test status" />);
    expect(screen.getByText(/Test status/)).toBeInTheDocument();
  });

  // Тест 3: Проверка, что span содержит правильный статус
  it("after creation span should contain correct status", () => {
    const status = "Test status";
    render(<ProfileStatus status={status} />);
    expect(screen.getByText(status)).toBeInTheDocument();
  });

  // Тест 4: Проверка, что после создания инпута его нет на странице
  it("after creation input should not be displayed", () => {
    render(<ProfileStatus status="Test status" />);
    expect(screen.queryByRole("textbox")).toBeNull();
  });

  // Тест 5: Проверка отображения инпута в editMode вместо span
  it("input should be displayed in editMode instead of span", () => {
    render(<ProfileStatus status="Test status" />);
    fireEvent.doubleClick(screen.getByText(/Test status/));
    expect(screen.queryByRole("textbox")).toBeInTheDocument();
    expect(screen.queryByText(/Test status/)).toBeNull();
  });

  // Тест 6: Проверка вызова коллбека updateStatus
  it("callback should be called", () => {
    const mockUpdateStatus = jest.fn();
    render(
      <ProfileStatus status="Test status" updateStatus={mockUpdateStatus} />
    );
    fireEvent.doubleClick(screen.getByText(/Test status/));
    fireEvent.blur(screen.getByRole("textbox"));
    expect(mockUpdateStatus).toHaveBeenCalled();
  });
});
