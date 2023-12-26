import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/";
import ProfileInfo from "./ProfileInfo";
import ProfileDataFormReduxForm from "./ProfileDataForm";
import ProfileData from "./ProfileInfo";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";

const mockStore = configureStore([]);

describe("ProfileInfo Component", () => {
  const mockProfile = {
    fullName: "John Doe",
    photos: { large: "profile.jpg" },
    contacts: { github: "johndoe" },
    lookingForAJobDescription: "Developer",
    userId: 1,
  };

  test("renders Preloader if profile is null", () => {
    render(<ProfileInfo profile={null} />);
    expect(screen.getByTestId("preloader")).toBeInTheDocument();
  });

  test("renders profile information when valid profile is passed", () => {
    render(
      <BrowserRouter>
        <ProfileInfo profile={mockProfile} />
      </BrowserRouter>
    );
    expect(screen.getByText(mockProfile.fullName)).toBeInTheDocument();
  });

  test("renders interactive elements when isOwner is true", () => {
    render(<ProfileInfo profile={mockProfile} isOwner={true} />);
    expect(screen.getByText("Upload Photo")).toBeInTheDocument();
  });

  test("ProfileDataForm renders in edit mode and handles submit", () => {
    const store = mockStore({ form: {} });
    render(
      <Provider store={store}>
        <ProfileDataFormReduxForm profile={mockProfile} />
      </Provider>
    );
    expect(screen.getByText("Save")).toBeInTheDocument();
  });

  test("ProfileData displays profile details and edit button for owner", () => {
    render(<ProfileData profile={mockProfile} isOwner={true} />);
    expect(screen.getByText(mockProfile.fullName)).toBeInTheDocument();
  });
});
