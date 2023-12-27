import React from "react";
import { Provider } from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/";
import MyPosts from "./MyPosts";
import Post from "./Post/Post";
import { reduxForm } from "redux-form";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);
const store = mockStore({
  form: {}, // Для Redux Form
  post: { posts: [] }, // Для компонента MyPosts
});

describe("MyPosts Component", () => {
  const mockPosts = [
    { _id: "1", message: "Post 1", likes: ["user1"], likesCount: 1 },
    { _id: "2", message: "Post 2", likes: ["user2"], likesCount: 1 },
  ];

  test("renders posts correctly", () => {
    render(
      <Provider store={store}>
        <MyPosts posts={mockPosts} isOwner={true} />
      </Provider>
    );
    expect(screen.getByText("Post 1")).toBeInTheDocument();
    expect(screen.getByText("Post 2")).toBeInTheDocument();
  });

  test("Add Post Form is visible when isOwner is true", () => {
    render(
      <Provider store={store}>
        <MyPosts posts={[]} isOwner={true} />
      </Provider>
    );
    expect(screen.getByPlaceholderText("Your post text")).toBeInTheDocument();
  });

  const handleSubmit = jest.fn();
  const AddNewPostReduxForm = reduxForm({ form: "ProfileAddNewPostForm" })(
    () => (
      <form onSubmit={handleSubmit}>
        <textarea name="newPostText" placeholder="Your post text"></textarea>
        <button type="submit">Add Post</button>
      </form>
    )
  );

  test("Form submits correctly", () => {
    render(
      <Provider store={store}>
        <AddNewPostReduxForm />
      </Provider>
    );
    fireEvent.submit(screen.getByText("Add Post"));
    expect(handleSubmit).toHaveBeenCalled();
  });
});

describe("Post Component", () => {
  const mockLikeHandler = jest.fn();
  const mockDeleteHandler = jest.fn();

  test("renders post with like and delete buttons for owner", () => {
    render(
      <Post
        message="Test post"
        likesCount={0}
        onLike={mockLikeHandler}
        onDelete={mockDeleteHandler}
        isOwner={true}
        isLikedByCurrentUser={false}
        postPhoto={"path/to/photo"}
      />
    );
    expect(screen.getByText("Test post")).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText("Like button"));
    expect(mockLikeHandler).toHaveBeenCalled();
    fireEvent.click(screen.getByLabelText("Delete button"));
    expect(mockDeleteHandler).toHaveBeenCalled();
  });

  test("Like count displays correctly", () => {
    render(
      <Post
        message="Test post"
        likesCount={10}
        onLike={mockLikeHandler}
        onDelete={mockDeleteHandler}
        isOwner={true}
        isLikedByCurrentUser={false}
        postPhoto={"path/to/photo"}
      />
    );
    expect(screen.getByText("10 likes")).toBeInTheDocument();
  });

  test("Like state changes on click", () => {
    render(
      <Post
        message="Test post"
        likesCount={0}
        onLike={mockLikeHandler}
        onDelete={mockDeleteHandler}
        isOwner={true}
        isLikedByCurrentUser={false}
        postPhoto={"path/to/photo"}
      />
    );
    fireEvent.click(screen.getByLabelText("Like button"));
    expect(mockLikeHandler).toHaveBeenCalled();
  });

  test("Delete and like buttons are visible as per the isOwner flag", () => {
    // Рендеримо компонент як невласник
    render(
      <Post
        message="Test post"
        likesCount={0}
        onLike={() => {}}
        onDelete={() => {}}
        isOwner={false}
        isLikedByCurrentUser={false}
        postPhoto={"path/to/photo"}
      />
    );

    // Перевіряємо що кнопки видалення немає
    expect(screen.queryByLabelText("Delete button")).not.toBeInTheDocument();

    // Перевіряємо, що кнопка лайка - є
    expect(screen.getByLabelText("Like button")).toBeInTheDocument();
  });

  test("Delete post handler is called on delete button click", () => {
    render(
      <Post
        message="Test post"
        likesCount={0}
        onLike={mockLikeHandler}
        onDelete={mockDeleteHandler}
        isOwner={true}
        isLikedByCurrentUser={false}
        postPhoto={"path/to/photo"}
      />
    );
    fireEvent.click(screen.getByLabelText("Delete button"));
    expect(mockDeleteHandler).toHaveBeenCalled();
  });
});
