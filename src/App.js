import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import {defaultRoutes} from './routes/index';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          {
            defaultRoutes.map((route, index) => 
              <Route key={route.name} 
                      exact={route.exact} 
                      path={route.path}
                      element={route.element}/>)
          }
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;