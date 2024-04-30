
import s from './App.module.scss'
import { Admin } from './page/Admin/Admin';
import { Home } from './page/Home/Home';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home />
    ),
  },
  {
    path: "admin",
    element: <Admin />
  },
]);
function App() {
  
  return (
    <div className={s.kymis}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
