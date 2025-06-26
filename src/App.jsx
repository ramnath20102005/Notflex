import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Banner from './Banner'
import MovieRow from './MovieRow'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'

const trending = [
  'https://image.tmdb.org/t/p/w500/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg',
  'https://image.tmdb.org/t/p/w500/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg',
  'https://image.tmdb.org/t/p/w500/9O1Iy9od7uG4r1Uu6Gk2kQkZ0dB.jpg',
  'https://image.tmdb.org/t/p/w500/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg',
  'https://image.tmdb.org/t/p/w500/4ZocdxnOO6q2UbdKye2wgofLFhB.jpg',
  'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
]
const topRated = [
  'https://image.tmdb.org/t/p/w500/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg',
  'https://image.tmdb.org/t/p/w500/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg',
  'https://image.tmdb.org/t/p/w500/4ZocdxnOO6q2UbdKye2wgofLFhB.jpg',
  'https://image.tmdb.org/t/p/w500/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg',
  'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
  'https://image.tmdb.org/t/p/w500/9O1Iy9od7uG4r1Uu6Gk2kQkZ0dB.jpg',
]
const actionMovies = [
  'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
  'https://image.tmdb.org/t/p/w500/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg',
  'https://image.tmdb.org/t/p/w500/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg',
  'https://image.tmdb.org/t/p/w500/4ZocdxnOO6q2UbdKye2wgofLFhB.jpg',
  'https://image.tmdb.org/t/p/w500/9O1Iy9od7uG4r1Uu6Gk2kQkZ0dB.jpg',
  'https://image.tmdb.org/t/p/w500/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg',
]

function ProtectedRoute({ children, isAuthenticated }) {
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Routes>
        <Route path="/login" element={
          isAuthenticated ? <Navigate to="/" replace /> : <Login setIsAuthenticated={setIsAuthenticated} />
        } />
        <Route path="/signup" element={
          isAuthenticated ? <Navigate to="/" replace /> : <Signup />
        } />
        <Route path="/" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <>
              <Navbar setIsAuthenticated={setIsAuthenticated} />
              <Banner />
              <MovieRow title="Trending Now" posters={trending} />
              <MovieRow title="Top Rated" posters={topRated} />
              <MovieRow title="Action Movies" posters={actionMovies} />
            </>
          </ProtectedRoute>
        } />
      </Routes>
    </div>
  )
}

export default App
