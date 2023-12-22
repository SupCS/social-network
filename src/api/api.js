import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:3001/",
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true,
      })
      .then((response) => {
        return response.data;
      });
  },
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },

  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },

  getProfile(userId) {
    console.warn("Obsolete method. Please use profileAPI object.");
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId);
  },
  updateStatus(status) {
    return instance.put(`profile/status/`, { status: status });
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  saveProfile(profile) {
    return instance.put(`profile`, profile);
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe = false, captcha = null) {
    return instance.post(`auth/login`, {
      email,
      password,
      rememberMe,
      captcha,
    });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
  register(name, email, login, password) {
    return instance.post(`auth/register`, {
      name,
      email,
      login,
      password,
    });
  },
};

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`);
  },
};

export const dialogsAPI = {
  getDialogs() {
    return instance.get(`messages/dialogs`);
  },
  getMessages(userId) {
    return instance.get(`messages/${userId}`);
  },
  sendMessage(userId, message) {
    return instance.post(`messages`, { receiverId: userId, text: message });
  },
};

export const postsAPI = {
  getPosts(userId) {
    return instance
      .get(`posts?userId=${userId}`)
      .then((response) => response.data);
  },
  createPost(newPostText) {
    return instance
      .post(`posts`, { message: newPostText })
      .then((response) => response.data);
  },
  deletePost(postId) {
    return instance.delete(`posts/${postId}`).then((response) => response.data);
  },
  toggleLike(postId) {
    return instance
      .post(`posts/${postId}/toggle-like`)
      .then((response) => response.data);
  },
};
