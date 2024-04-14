import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./App.css";
import Sidebar from "./components/Sidebar.jsx";
import styled from "styled-components";
import Header from "./components/Header.jsx";
import GenreMovies from "./pages/GenreMovies.jsx";
import { useEffect } from "react";
import { fetchConfig, fetchGenres } from "./redux/configSlice.js";
import Discover from "./pages/Discover.jsx";
import SearchMovie from "./pages/SearchMovie.jsx";

const MainWrapper = styled.div`
  display: flex;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  font-family: "Montserrat", sans-serif;
  width: 100%;
  height: inherit;
  min-height: 100vh;
  margin-left: 12rem;
  
  @media only screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchConfig());
    dispatch(fetchGenres());
  }, []);

  return (
    <BrowserRouter>
      <MainWrapper>
        <Sidebar />
        <ContentWrapper>
          <Header />
          <Routes>
            <Route path="" element={<Navigate to={`/discover/Popular`} />} />
            <Route path="/genres/:name" element={<GenreMovies />} />
            <Route path="/discover/:name" element={<Discover />} />
            <Route path="/movies/:query" element={<SearchMovie />} />
          </Routes>
        </ContentWrapper>
      </MainWrapper>
    </BrowserRouter>
  );
}

export default App;
