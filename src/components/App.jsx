import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './App.Styled/Global';
import { Toaster } from 'react-hot-toast';
import ScrollToTop from 'react-scroll-up';
import { StyledUpSpan } from './App.Styled/App.Styled';
import HeaderBlock from './HeaderBlock/HeaderBlock';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MoviePage = lazy(() => import('pages/MoviePage/MoviePage'));
const Cast = lazy(() => import('./MovieDetails/Cast/Cast'));
const Reviews = lazy(() => import('./MovieDetails/Reviews/Reviews'));
const PageNotFound = lazy(() => import('pages/PageNotFound/PageNotFound'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeaderBlock />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MoviePage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="index.html" element={<Navigate to="/" />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 2000,
        }}
      />
      <ScrollToTop
        showUnder={120}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bottom: 35,
          background:
            'linear-gradient(141.22deg,  #6a6b38 9.4%, #9cb640 91.91%)',
          width: '42px',
          height: '42px',
          padding: '8px',
          borderRadius: '50%',
          boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2)',
        }}
      >
        <StyledUpSpan>&#8593;</StyledUpSpan>
      </ScrollToTop>

      <GlobalStyle />
    </>
  );
};
