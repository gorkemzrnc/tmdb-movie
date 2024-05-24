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

export const fetchMovie = createAsyncThunk(
  "movies/fetchMovie",
  async ({ id }) => {
    const response = await tmdb.get(`/movie/${id}`);
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
        page,
      },
    });

    return response.data;
  }
);

export const fetchSearchMovie = createAsyncThunk(
  "movies/fetchSearchMovie",
  async (search) => {
    const query = search.trim();

    const response = await tmdb.get("/search/movie", {
      params: {
        query,
      },
    });

    return response.data.results.slice(0, 5);
  }
);

const initialState = {
  discoverMovie: {
    movies: [],
    status: "idle",
    error: null,
  },
  searchMovie: {
    movies: [],
    status: "idle",
    error: null,
  },
  singleMovie: {
    movie: {},
    status: "idle",
    error: null,
  },
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setSingleMovie:(state, action)=>{
      state.singleMovie.movie = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.discoverMovie.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.discoverMovie.status = "succeeded";
        state.discoverMovie.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.discoverMovie.status = "failed";
        state.discoverMovie.error = action.error.message;
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

    builder
      .addCase(fetchSearchMovies.pending, (state) => {
        state.discoverMovie.status = "loading";
      })
      .addCase(fetchSearchMovies.fulfilled, (state, action) => {
        state.discoverMovie.status = "succeeded";
        state.discoverMovie.movies = action.payload;
      })
      .addCase(fetchSearchMovies.rejected, (state, action) => {
        state.discoverMovie.status = "failed";
        state.discoverMovie.error = action.error.message;
      });

    builder
      .addCase(fetchSearchMovie.pending, (state) => {
        state.searchMovie.status = "loading";
      })
      .addCase(fetchSearchMovie.fulfilled, (state, action) => {
        state.searchMovie.status = "succeeded";
        state.searchMovie.movies = action.payload;
      })
      .addCase(fetchSearchMovie.rejected, (state, action) => {
        state.searchMovie.status = "failed";
        state.searchMovie.error = action.error.message;
      });

    builder
      .addCase(fetchMovie.pending, (state) => {
        state.singleMovie.status = "loading";
      })
      .addCase(fetchMovie.fulfilled, (state, action) => {
        state.singleMovie.status = "succeeded";
        state.singleMovie.movie = action.payload;
      })
      .addCase(fetchMovie.rejected, (state, action) => {
        state.singleMovie.status = "failed";
        state.singleMovie.error = action.error.message;
      });
  },
});
export const {setSingleMovie} = moviesSlice.actions;
export default moviesSlice.reducer;
