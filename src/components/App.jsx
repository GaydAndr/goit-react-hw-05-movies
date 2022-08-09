import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { MainWrapper } from './MainWrapper/mainWrapper';

const MovieSearch = lazy(() => import('pages/MovieSearch'));
const Home = lazy(() => import('pages/Home'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('components/Cast'));
const Review = lazy(() => import('components/Review'));
const NotFound = lazy(() => import('pages/NotFound'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/goit-react-hw-05-movies/" element={<MainWrapper />}>
          <Route
            index
            element={
              <Suspense fallback={<h2>Loading ...</h2>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/goit-react-hw-05-movies/movies"
            element={
              <Suspense fallback={<h2>Loading ...</h2>}>
                <MovieSearch />
              </Suspense>
            }
          />
          <Route
            path="/goit-react-hw-05-movies/movies/:movieId"
            element={
              <Suspense fallback={<h2>Loading ...</h2>}>
                <MovieDetails />
              </Suspense>
            }
          >
            <Route
              path="cast"
              element={
                <Suspense fallback={<h2>Loading ...</h2>}>
                  <Cast />
                </Suspense>
              }
            />
            <Route
              path="reviews"
              element={
                <Suspense fallback={<h2>Loading ...</h2>}>
                  <Review />
                </Suspense>
              }
            />
          </Route>
        </Route>

        <Route
          path="*"
          element={
            <Suspense fallback={<h2>Loading ...</h2>}>
              {/* <Review /> */}
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};
