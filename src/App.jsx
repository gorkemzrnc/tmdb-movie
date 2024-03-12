import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {useDispatch} from 'react-redux'
import "./App.css";
import MovieList from "./Movies.jsx";
import Sidebar from "./pages/Sidebar.jsx";
import styled from "styled-components";
import Header from "./pages/Header.jsx";
import GenreMovies from "./pages/GenreMovies.jsx";
import { useEffect } from "react";
import { fetchConfig } from "./redux/configSlice.js";
import Discover from "./pages/Discover.jsx";

const MainWrapper = styled.div`
  display: flex;
  min-height:100vh;
`;

const ContentWrapper = styled.div`
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  height: inherit;
  min-height: 100vh;
  margin-left: 12rem;
`;

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchConfig());
  },[]);
  return (
    <BrowserRouter>
      <MainWrapper>
        <Sidebar />
        <ContentWrapper>
          <Header/>
          <Routes>
            <Route path="" element={<Navigate to={`/discover/Popular`}/>} />
            <Route path="/genres/:name" element={<GenreMovies/>}/>
            <Route path="/discover/:name" element={<Discover/>} />
          </Routes>
        </ContentWrapper>
      </MainWrapper>
    </BrowserRouter>
  );
}

export default App;
