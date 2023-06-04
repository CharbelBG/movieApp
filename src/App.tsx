import { Routes, Route } from "react-router-dom";
import Base from "./layout/Base";
import Movies from "./pages/Movies";
import SelectedMovie from "./pages/SelectedMovie";
import Genres from "./pages/Genres";
import SelectedGenres from "./pages/SelectedGenres";
import TopCharts from "./pages/TopCharts";
import NewReleases from "./pages/NewReleases";
import Footer from "./layout/Footer";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route path="" element={<Movies />} />
          <Route path="/movie/:id" element={<SelectedMovie />} />
          <Route path="topcharts" element={<TopCharts />} />
          <Route path="genres" element={<Genres />} />
          <Route path="genres/:id" element={<SelectedGenres />} />
          <Route path="newReleases" element={<NewReleases />} />
          <Route path="favorites" element={<h1>Render favorites</h1>} />
          <Route path="profile" element={<h1>Render Profile</h1>} />
          <Route path="info" element={<h1>Render info</h1>} />
          <Route path="*" element={<h1>fallback</h1>} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}
