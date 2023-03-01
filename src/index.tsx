/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { CircularProgress, Container, styled } from '@mui/material';

// Use consistent styling
import 'sanitize.css/sanitize.css';

import { App } from 'app';

import { HelmetProvider } from 'react-helmet-async';

import reportWebVitals from 'reportWebVitals';

import './locales/i18n';
import { ThemeProvider } from 'styles/theme/ThemeProvider';
import { AuthLoader } from 'services/Authentication';
import { LoginPage } from 'app/pages/LoginPage/Loadable';
import { defaultQuery } from 'api/client';
import { Layout } from 'app/pages/layout';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey: [url, variables] }) => {
        return defaultQuery({ queryKey: { url, variables } });
      },
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <HelmetProvider>
        <React.StrictMode>
          <Layout>
            <AuthLoader
              renderLoading={() => <CircularProgress />}
              renderUnauthenticated={() => <LoginPage />}
            >
              <App />
            </AuthLoader>
          </Layout>
          <ReactQueryDevtools initialIsOpen={false} />
        </React.StrictMode>
      </HelmetProvider>
    </ThemeProvider>
  </QueryClientProvider>,
);

// Hot reloadable translation json files
if (module.hot) {
  module.hot.accept(['./locales/i18n'], () => {
    // No need to render the App again because i18next works with the hooks
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
