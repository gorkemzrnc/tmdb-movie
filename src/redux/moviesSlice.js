import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tmdb from "../api/tmdb";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async ({ page }, { getState }) => {
    const { selectedMenu } = getState().config;
    const genres = getState().config.genre.genres;

    if (!selectedMenu) {
      return;
    }

    const genreId = genres
      .filter((el) => el.name === selectedMenu)
      .map((el) => el.id)
      .join("");

    const response = await tmdb.get("/discover/movie", {
      params: {
        page,
        with_genres: genreId,
      },
    });

    return response.data;
  }
);

export const fetchDiscover = createAsyncThunk(
  "movies/fetchDiscover",
  async ({ name, page }) => {
    const response = await tmdb.get(`movie/${name}`, {
      params: {
        page,
      },
    });

    return response.data;
  }
);

export const fetchSearchMovies = createAsyncThunk(
  "movies/fetchSearchMovies",
  async ({ search, page }) => {
    const query = search.trim();

    const response = await tmdb.get("/search/movie", {
      params: {
        query,
        page
      },
    });

    return response.data;
  }
);

const initialState = {
  movie: {
    movies: [],
    status: "idle",
    error: null,
  },
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.movie.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movie.status = "succeeded";
        state.movie.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.movie.status = "failed";
        state.movie.error = action.error.message;
      });

    builder
      .addCase(fetchDiscover.pending, (state) => {
        state.movie.status = "loading";
      })
      .addCase(fetchDiscover.fulfilled, (state, action) => {
        state.movie.status = "succeeded";
        state.movie.movies = action.payload;
      })
      .addCase(fetchDiscover.rejected, (state, action) => {
        state.movie.status = "failed";
        state.movie.error = action.error.message;
      });

    builder
      .addCase(fetchSearchMovies.pending, (state) => {
        state.movie.status = "loading";
      })
      .addCase(fetchSearchMovies.fulfilled, (state, action) => {
        state.movie.status = "succeeded";
        state.movie.movies = action.payload;
      })
      .addCase(fetchSearchMovies.rejected, (state, action) => {
        state.movie.status = "failed";
        state.movie.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;
