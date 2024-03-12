import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tmdb from "../../api/tmdb";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (_, { getState }) => {
    const { selectedMenu, page } = getState().config;

    if (selectedMenu == undefined) {
      return;
    }

    const genres = getState().config.genre.genres;

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
  async ({ name, page }, { getState }) => {
    const { selectedMenu } = getState().config;

    const response = await tmdb.get(`movie/${name}`, {
      params: {
        page,
      },
    });

    return response.data;
  }
);

const initialState = {
  discoverMovie: {
    movies: [],
    status: "idle",
    error: null,
  },
  movie: {
    movies: [],
    status: "idle",
    error: null,
  },
  searchMovies: {
    movies: [],
    status: "idle",
    error: null,
  }
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
        state.discoverMovie.status = "loading";
      })
      .addCase(fetchDiscover.fulfilled, (state, action) => {
        state.discoverMovie.status = "succeeded";
        state.discoverMovie.movies = action.payload;
      })
      .addCase(fetchDiscover.rejected, (state, action) => {
        state.discoverMovie.status = "failed";
        state.discoverMovie.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;
