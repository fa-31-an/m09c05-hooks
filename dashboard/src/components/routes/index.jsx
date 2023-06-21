import React from "react";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "../NotFound";
import ContentWrapper from "../ContentWrapper";
import { GenresInDb } from "../GenresInDb";
import { LastMovieInDb } from "../LastMovieInDb";
import { ContentRowMovies } from "../ContentRowMovies";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ContentWrapper />} />
      <Route path="/GenresInDb" element={<GenresInDb />} />
      <Route path="/LastMovieInDb" element={<LastMovieInDb />} />
      <Route path="/ContenRowMovies" element={<ContentRowMovies />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
