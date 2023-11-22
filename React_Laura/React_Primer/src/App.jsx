import './App.css'
import { BrowserRouter, useRoutes } from 'react-router-dom';
import NavCompoment from './Component/NavComponent';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import PeliculaPage from './Pages/PeliculaPage';
import ApiPage from './Pages/ApiPage';
function App() {
  const AppRoutes = () => {
    let router = useRoutes([
      { path: 'LoginPage', element: <LoginPage /> },
      { path: '/HomePage', element: <HomePage /> },
      {path:'PeliculaPage', element:<PeliculaPage/>},
      {path:'ApiPage',element:<ApiPage/>},
    ])
    return router;
  }
  return (
    <div className='App'>
      <BrowserRouter>
        <NavCompoment />
        <AppRoutes />
      </BrowserRouter>
    </div>
  )
}
export default App
