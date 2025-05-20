import { Suspense, lazy } from 'react';
import { Routes, Route, Form } from 'react-router-dom';
import Layout from './pages/Layout';
import FormCreatePage from "./pages/FormCreatePage";
import OrderTracking from './components/OrderTracking';
import HeaderWrapper from './components/HeaderWrapper';
const HomePage = lazy(() => import('./pages/HomePage'));
const ProductListingPage = lazy(() => import('./pages/ProductListingPage'));
const ProductViewPage = lazy(() => import('./pages/ProductViewPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const CreateAccountInitialPage = lazy(() => import('./pages/CreateAccountInitialPage'));



const App = () => {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Routes>
        <Route
          path='/'
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path='/produtos'
          element={
            <Layout>
              <ProductListingPage />
            </Layout>
          }
        />
        <Route
          path='/produtos/:id'
          element={
            <Layout>
              <ProductViewPage />
            </Layout>
          }
        />
        <Route
          path='/categorias'
          element={
            <Layout>
              <div>Categoria</div>
            </Layout>
          }
        />
        <Route
          path='/orders'
          element={
            <Layout>
              <OrderTracking />
            </Layout>
          }
        />
        <Route
          path='/login'
          element={
            <Layout>
            
              <LoginPage />
            </Layout>
          }
        />
        <Route
          path='/register'
          element={
            <Layout>
              
              <CreateAccountInitialPage />
            </Layout>
          }
        />
        <Route
          path='/criar-conta'
          element={
            <Layout>
              
              <FormCreatePage />
            </Layout>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default App;