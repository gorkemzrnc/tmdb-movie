import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tmdb from "../api/tmdb";

export const fetchGenres = createAsyncThunk("movies/fetchGenres", async () => {
  const response = await tmdb.get("/genre/movie/list");
  return response.data;
});

export const fetchConfig = createAsyncThunk("movies/config", async () => {
  const response = await tmdb.get("/configuration");

  return response.data;
});

const initialState = {
  genre: {
    genres: [],
    status: "idle",
    error: null,
  },
  config: {
    data: [],
    status: "idle",
    error: null,
  },
  staticCategories: ["Popular", "Top Rated", "Upcoming"],
  selectedMenu: null,
  header: null,
  page: 1,
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setSelectedMenu: (state, action) => {
      const { selected } = action.payload;
      state.selectedMenu = selected;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchGenres.pending, (state) => {
        state.genre.status = "pending";
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.genre.status = "fulfilled";
        state.genre.genres = action.payload.genres;
      })
      .addCase(fetchGenres.rejected, (state, action) => {
        state.genre.status = "rejected";
        state.genre.error = action.error;
      })
      .addCase(fetchConfig.pending, (state) => {
        state.config.status = "pending";
      })
      .addCase(fetchConfig.fulfilled, (state, action) => {
        state.config.status = "fulfilled";
        state.config.data = action.payload;
      })
      .addCase(fetchConfig.rejected, (state, action) => {
        state.config.status = "rejected";
        state.config.error = action.error;
      });
  },
});

export default configSlice.reducer;
export const { setSelectedMenu } = configSlice.actions;
