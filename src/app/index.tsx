/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { HomePage } from './pages/HomePage';
import { HortaPage } from './components/Horta';
import { ROUTES } from 'utils/routes';
import { ErrorPage } from './pages/ErrorPage';
export function App() {
  const { i18n } = useTranslation();

  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - Horta"
        defaultTitle="Horta"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="NT - Horta automatizada" />
      </Helmet>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={`/${ROUTES.HORTA}/:id`} element={<HortaPage />} />
        <Route path={`*`} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
