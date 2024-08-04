import React from 'react';
import './App.css';
import GeneralLayout from './components/GeneralLayout';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UrlRoute } from './routes';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route element={<GeneralLayout />}>
          <Route path={UrlRoute.Home} element={<Home />} />
          <Route index element={<Navigate to={UrlRoute.Home} replace />} />
          <Route path={UrlRoute.PageNotFound} element={<PageNotFound />} />
          <Route path="*" element={<Navigate to={UrlRoute.PageNotFound} replace />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
