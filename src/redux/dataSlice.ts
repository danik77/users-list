import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../app/config";
import { User } from "../app/interfaces";

const initialState: { users: Array<any>; user: User | null; loading: Boolean } =
  {
    users: [],
    user: null,
    loading: true,
  };

// Fetch users
export const fetchUsers = createAsyncThunk("data/fetchUsers", async () => {
  const response = await fetch(`${API_URL}/users`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return response;
});

// Fetch user
export const fetchUser = createAsyncThunk(
  "data/fetchUser",
  async (userId: string | undefined) => {
    const response = await fetch(`${API_URL}/users/${userId}`)
      .then((res) => res.json())
      .catch((err) => console.log(err));
    return response;
  }
);

// Search users
export const searchUsers = createAsyncThunk(
  "data/searchUsers",
  async (query: string) => {
    const response = await fetch(`${API_URL}/users`)
      .then((res) => res.json())
      .catch((err) => console.log(err));

    const searchedResponse = response.filter((user: User) =>
      user.username.toLowerCase().includes(query.toLowerCase())
    );

    return searchedResponse;
  }
);

// Add user
export const addUser = createAsyncThunk("data/addUser", async (user: any) => {
  //any
  const response = await fetch(`${API_URL}/users`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return response;
});

// Edit user
export const editUser = createAsyncThunk(
  "data/editUser",
  async (userData: User) => {
    const response = await fetch(`${API_URL}/users/${userData.id}`, {
      method: "PUT",
      body: JSON.stringify(userData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
    return response;
  }
);

// Delete user
export const deleteUser = createAsyncThunk(
  "data/deleteUser",
  async (userId: number) => {
    const response = await fetch(`${API_URL}/users/${userId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
      
    return userId;
  }
);

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setUser(state, action) {
      state.user = state.users.find((i) => i.id === +action.payload);
    },
    clearUser(state) {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch users
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })

      // Fetch user
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })

      // Search users
      .addCase(searchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })

      // Add user
      .addCase(addUser.fulfilled, (state, action) => {
        state.users.unshift(action.payload);
      })

      // Edit user
      .addCase(editUser.fulfilled, (state, action) => {
        state.users = state.users.map((user) =>
          user.id === action.payload.id ? { ...action.payload } : user
        );
      })

      // Delete user
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user.id != action.payload);
      });
  },
});

export const { setLoading, clearUser, setUser } = dataSlice.actions;

export default dataSlice.reducer;
