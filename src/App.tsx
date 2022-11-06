import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Splash from './components/Splash/Splash';

const Main = React.lazy(() => import('./pages/Main'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const queryClient = new QueryClient();

function WrappedApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <React.Suspense fallback={<Splash />}>
          <Routes>
            <Route index path="/" element={<Main />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </React.Suspense>
      </BrowserRouter>
      {import.meta.env.MODE === 'development' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
      <ToastContainer />
    </QueryClientProvider>
  );
}
export default WrappedApp;
