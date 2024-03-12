import "./App.css";
import api from "./api/axiosConfig";
import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import { Routes, Route} from "react-router-dom";

function App() {
  const [movies, setMovies] = useState();

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movie/getAllMovies");
      console.log(response.data);
      setMovies(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return <div className="App">
    <Routes>
      <Route path="/" element={Layout}>
        
      </Route>
    </Routes>
  </div>;
}

export default App;
